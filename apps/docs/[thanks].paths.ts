import path from 'node:path'
import { renderThanksDoc } from '@readme-widget-hub/render'
import { path2Url } from '@readme-widget-hub/utils'
import { locales, manager } from './manager'

interface Path {
  params: {
    thanks: string
  }
  content: string
}

export default {
  paths: () => {
    const paths: Path[] = []

    for (const locale of locales) {
      const meta = manager.getMeta(locale)
      const localeUrlPrefix = manager.isDefaultLocale(locale) ? '' : locale.code

      paths.push({
        params: { thanks: path2Url(path.join(localeUrlPrefix, 'thanks')) },
        content: renderThanksDoc({ readme: meta.readme }),
      })
    }

    return paths
  },
}