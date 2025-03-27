import path from 'node:path'
import { Manager } from '@badge-collection/manager'
import { renderBadge, renderReadme } from '@badge-collection/render'
import fs from 'fs-extra'
import { badgeFilePath2Url, badgeTree2Tocs, object2Navs } from './transform'

const rootDir = path.resolve(__dirname, '../../../')
const env = import.meta.env
const manager = new Manager({
  defaultLocaleCode: env.VITE_DEFAULT_LOCALE_CODE,
  absBadgesDir: path.join(rootDir, env.VITE_BADGES_DIR),
  absMetaFilePath: path.join(rootDir, env.VITE_META_FILE_PATH),
})
const meta = manager.getMeta()

for (const locale of meta.locales) {
  const localeMeta = manager.getMeta(locale)
  const localeFileName = manager.locale2FileName(locale)
  const readme = localeMeta.readme
  const flatBadges = manager.getFlatBadges(locale)

  const outputPath = path.join(rootDir, manager.locale2FileName(locale))
  console.log(`Generating ${outputPath}`)

  const markdown = renderReadme({
    mode: 'markdown',
    hasLocale: manager.hasLocale(readme, locale),
    title: localeMeta.title,
    description: localeMeta.description,
    showTags: true,
    badgeCount: manager.badgeCount,
    navs: object2Navs(false, readme, readme, env.VITE_ONLINE_PAGE_URL, locale, manager),
    tocs: badgeTree2Tocs(rootDir, flatBadges, env, localeFileName),
    readme,
  })

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, markdown)

  for (const flatBadge of flatBadges) {
    if (flatBadge.type === 'collection') {
      continue
    }

    const badgeUrl = badgeFilePath2Url(rootDir, flatBadge.path, env, localeFileName)
    const outputPath = path.join(rootDir, badgeUrl)
    const badgeData = manager.getBadge(flatBadge.path, locale)
    console.log(`Generating ${outputPath}`)

    const markdown = renderBadge({
      mode: 'markdown',
      hasLocale: manager.hasLocale(flatBadge, locale),
      title: localeMeta.title,
      description: localeMeta.description,
      showTags: false,
      badgeCount: manager.badgeCount,
      navs: object2Navs(true, badgeData, readme, env.VITE_ONLINE_PAGE_URL, locale, manager),
      readme: localeMeta.readme,
      badge: badgeData,
      showParams: env.VITE_SHOW_PARAMS === 'true',
    })

    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    fs.writeFileSync(outputPath, markdown)
  }
}