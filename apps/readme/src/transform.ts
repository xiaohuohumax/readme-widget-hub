import type { Manager } from '@readme-widget-hub/manager'
import type { Locale, Readme } from '@readme-widget-hub/meta'
import type { Nav, Toc } from '@readme-widget-hub/render'
import type { WidgetTree } from '@readme-widget-hub/widget'
import path from 'node:path'
import { path2Url, replaceParentPath } from '@readme-widget-hub/utils'

// widgets/...json => /dist/widgets/...md
export function widgetFilePath2Url(rootDir: string, filePath: string, env: ImportMetaEnv, localeFileName: string): string {
  const { dir, name } = path.parse(replaceParentPath(
    filePath,
    path.join(rootDir, env.VITE_WIDGETS_DIR),
    env.VITE_WIDGET_README_OUTPUT_DIR,
  ))
  return path2Url(`/${path.join(dir, name, localeFileName)}`).slice(1)
}

// dist/widgets/...md => widgets/...json
export function url2WidgetFilePath(rootDir: string, url: string, env: ImportMetaEnv): string {
  const { dir } = path.parse(url)
  const { dir: widgetDir, name } = path.parse(replaceParentPath(
    dir,
    env.VITE_WIDGET_README_OUTPUT_DIR,
    env.VITE_WIDGETS_DIR,
  ))
  return path.join(rootDir, widgetDir, `${name}.json`)
}

export function widgetTree2Tocs(rootDir: string, flatWidgetTree: WidgetTree[], env: ImportMetaEnv, localeFileName: string): Toc[] {
  return flatWidgetTree.map((node) => {
    if (node.type === 'widget') {
      return {
        type: 'widget',
        name: node.title,
        level: node.level,
        href: widgetFilePath2Url(rootDir, node.path, env, localeFileName),
      }
    }
    return {
      type: 'collection',
      name: node.title,
      level: node.level,
    }
  })
}

export function object2Navs(addHome: boolean, obj: any, readme: Readme, onlinePageUtl: string, nowLocale: Locale, manager: Manager): Nav[] {
  const navs: Nav[] = []
  if (addHome) {
    navs.push({ name: readme.back2Home, href: `/${manager.locale2FileName(nowLocale)}` })
  }
  else {
    navs.push({
      name: readme.onlinePage,
      href: manager.isDefaultLocale(nowLocale)
        ? onlinePageUtl
        : `${onlinePageUtl}${nowLocale.code}/`,
    })
  }

  for (const l of manager.objectHasLocales(obj)) {
    if (l.code === nowLocale.code) {
      continue
    }
    navs.push({ name: l.name, href: manager.locale2FileName(l) })
  }
  return navs
}