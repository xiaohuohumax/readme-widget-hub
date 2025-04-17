import type { BadgeTree } from '@readme-widget-hub/badge'
import type { Feature } from '@readme-widget-hub/render'
import path from 'node:path'
import { Manager } from '@readme-widget-hub/manager'
import { renderBadgeDoc, renderIndexDoc } from '@readme-widget-hub/render'
import { path2Url } from '@readme-widget-hub/utils'
import { loadEnv } from './.vitepress/env'

interface Path {
  params: {
    doc: string
  }
  content: string
}

const rootDir = path.resolve(__dirname, '../../')
const env = loadEnv(rootDir)
const manager = new Manager({
  defaultLocaleCode: env.VITE_DEFAULT_LOCALE_CODE,
  absBadgesDir: path.join(rootDir, env.VITE_BADGES_DIR),
  absMetaFilePath: path.join(rootDir, env.VITE_META_FILE_PATH),
})
const locales = manager.getLocales()

function badgeFilePath2Url(localeUrlPrefix: string, filePath: string): string {
  return path2Url(path.join(localeUrlPrefix, path.relative(rootDir, filePath))).slice(0, -5)
}

function badge2Features(localeUrlPrefix: string, flatBadges: BadgeTree[]): Feature[] {
  const features: Feature[] = []
  let count = 0
  const showCount = Number.parseInt(env.VITE_DOC_SHOW_FEATURES_COUNT)
  for (const badge of flatBadges) {
    if (count >= showCount) {
      break
    }
    if (badge.type === 'badge') {
      features.push({
        title: badge.title,
        details: badge.description,
        link: badgeFilePath2Url(localeUrlPrefix, badge.path),
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
      const flatBadges = manager.getFlatBadges(locale)

      // index
      paths.push({
        params: { doc: path2Url(path.join(localeUrlPrefix, 'index')) },
        content: renderIndexDoc({
          name: meta.name,
          title: meta.title,
          logo: '/logo.svg',
          features: badge2Features(localeUrlPrefix, flatBadges),
          doc: meta.doc,
          localeCode: localeUrlPrefix,
        }),
      })

      for (const flatBadge of flatBadges) {
        if (flatBadge.type !== 'badge') {
          continue
        }

        paths.push({
          params: { doc: badgeFilePath2Url(localeUrlPrefix, flatBadge.path) },
          content: renderBadgeDoc({
            badge: flatBadge,
            readme: meta.readme,
            showParams: env.VITE_SHOW_PARAMS === 'true',
          }),
        })
      }
    }

    return paths
  },
}