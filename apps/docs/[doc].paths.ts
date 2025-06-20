import type { Feature } from '@readme-widget-hub/render'
import type { WidgetTree } from '@readme-widget-hub/widget'
import path from 'node:path'
import { renderIndexDoc, renderWidgetDoc } from '@readme-widget-hub/render'
import { path2Url } from '@readme-widget-hub/utils'
import { env, locales, manager, rootDir } from './manager'

interface Path {
  params: {
    doc: string
  }
  content: string
}

function widgetFilePath2Url(localeUrlPrefix: string, filePath: string): string {
  return path2Url(path.join(localeUrlPrefix, path.relative(rootDir, filePath))).slice(0, -5)
}

function widget2Features(localeUrlPrefix: string, flatWidgets: WidgetTree[]): Feature[] {
  const features: Feature[] = []
  let count = 0
  const showCount = Number.parseInt(env.VITE_DOC_SHOW_FEATURES_COUNT)
  for (const widget of flatWidgets) {
    if (count >= showCount) {
      break
    }
    if (widget.type === 'widget') {
      features.push({
        title: widget.title,
        details: widget.description,
        link: widgetFilePath2Url(localeUrlPrefix, widget.path),
      })
      count++
    }
  }
  return features
}

export default {
  paths: () => {
    const paths: Path[] = []

    for (const locale of locales) {
      const localeUrlPrefix = manager.isDefaultLocale(locale) ? '' : locale.code
      const meta = manager.getMeta(locale)
      const flatWidgets = manager.getFlatWidgets(locale)

      // index
      paths.push({
        params: { doc: path2Url(path.join(localeUrlPrefix, 'index')) },
        content: renderIndexDoc({
          name: meta.name,
          title: meta.title,
          logo: '/logo.svg',
          features: widget2Features(localeUrlPrefix, flatWidgets),
          doc: meta.doc,
          localeCode: localeUrlPrefix,
        }),
      })

      for (const flatWidget of flatWidgets) {
        if (flatWidget.type !== 'widget') {
          continue
        }

        paths.push({
          params: { doc: widgetFilePath2Url(localeUrlPrefix, flatWidget.path) },
          content: renderWidgetDoc({
            widget: flatWidget,
            readme: meta.readme,
            showParams: env.VITE_SHOW_PARAMS === 'true',
          }),
        })
      }
    }

    return paths
  },
}