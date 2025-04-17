import path from 'node:path'
import { Manager } from '@readme-widget-hub/manager'
import { renderReadme, renderWidget } from '@readme-widget-hub/render'
import fs from 'fs-extra'
import { object2Navs, widgetFilePath2Url, widgetTree2Tocs } from './transform'

const rootDir = path.resolve(__dirname, '../../../')
const env = import.meta.env
const manager = new Manager({
  defaultLocaleCode: env.VITE_DEFAULT_LOCALE_CODE,
  absWidgetsDir: path.join(rootDir, env.VITE_WIDGETS_DIR),
  absMetaFilePath: path.join(rootDir, env.VITE_META_FILE_PATH),
})
const meta = manager.getMeta()

for (const locale of meta.locales) {
  const localeMeta = manager.getMeta(locale)
  const localeFileName = manager.locale2FileName(locale)
  const readme = localeMeta.readme
  const flatWidgets = manager.getFlatWidgets(locale)

  const outputPath = path.join(rootDir, manager.locale2FileName(locale))
  console.log(`Generating ${outputPath}`)

  const markdown = renderReadme({
    mode: 'markdown',
    hasLocale: manager.hasLocale(readme, locale),
    title: localeMeta.title,
    description: localeMeta.description,
    showTags: true,
    widgetCount: manager.widgetCount,
    navs: object2Navs(false, readme, readme, env.VITE_ONLINE_PAGE_URL, locale, manager),
    tocs: widgetTree2Tocs(rootDir, flatWidgets, env, localeFileName),
    readme,
  })

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, markdown)

  for (const flatWidget of flatWidgets) {
    if (flatWidget.type === 'collection') {
      continue
    }

    const widgetUrl = widgetFilePath2Url(rootDir, flatWidget.path, env, localeFileName)
    const outputPath = path.join(rootDir, widgetUrl)
    const widgetData = manager.getWidget(flatWidget.path, locale)
    console.log(`Generating ${outputPath}`)

    const markdown = renderWidget({
      mode: 'markdown',
      hasLocale: manager.hasLocale(flatWidget, locale),
      title: localeMeta.title,
      description: localeMeta.description,
      showTags: false,
      widgetCount: manager.widgetCount,
      navs: object2Navs(true, widgetData, readme, env.VITE_ONLINE_PAGE_URL, locale, manager),
      readme: localeMeta.readme,
      widget: widgetData,
      showParams: env.VITE_SHOW_PARAMS === 'true',
    })

    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    fs.writeFileSync(outputPath, markdown)
  }
}