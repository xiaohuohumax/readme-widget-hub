import type { Plugin } from 'vite'
import path from 'node:path'
import { Manager } from '@readme-widget-hub/manager'
import { RENDER_TEMPLATE_DIR, renderBadge, renderGithubHtml, renderReadme } from '@readme-widget-hub/render'
import chokidar from 'chokidar'
import { badgeTree2Tocs, object2Navs, url2BadgeFilePath } from '../src/transform'

const rootDir = path.join(__dirname, '../../../')

export interface VirtualReadmeOptions {
  env: ImportMetaEnv
}

export default function virtualReadme({ env }: VirtualReadmeOptions): Plugin {
  const absBadgesDir = path.join(rootDir, env.VITE_BADGES_DIR)
  const absMetaFilePath = path.join(rootDir, env.VITE_META_FILE_PATH)
  const manager = new Manager({
    defaultLocaleCode: env.VITE_DEFAULT_LOCALE_CODE,
    absBadgesDir,
    absMetaFilePath,
  })

  function generateResponse(url: string): string {
    const { dir } = path.parse(url)
    const locale = manager.url2Locale(url)
    const isRoot = dir === ''

    const meta = manager.getMeta(locale)
    const flatBadges = manager.getFlatBadges(locale)
    const localeFileName = manager.locale2FileName(locale)
    const readme = meta.readme

    if (isRoot) {
      return renderReadme({
        mode: 'html',
        hasLocale: manager.hasLocale(readme, locale),
        htmlTitle: `${meta.name} [${locale.name}]`,
        title: meta.title,
        description: meta.description,
        showTags: true,
        badgeCount: manager.badgeCount,
        navs: object2Navs(false, readme, readme, env.VITE_ONLINE_PAGE_URL, locale, manager),
        tocs: badgeTree2Tocs(rootDir, flatBadges, env, localeFileName),
        readme,
      })
    }

    const badgeFilePath = url2BadgeFilePath(rootDir, url, env)
    const badge = manager.getBadge(badgeFilePath, locale)

    return renderBadge({
      mode: 'html',
      hasLocale: manager.hasLocale(badge, locale),
      htmlTitle: `${badge.title} [${locale.name}]`,
      title: meta.title,
      description: meta.description,
      showTags: false,
      badgeCount: manager.badgeCount,
      navs: object2Navs(true, badge, readme, env.VITE_ONLINE_PAGE_URL, locale, manager),
      readme: meta.readme,
      badge,
      showParams: env.VITE_SHOW_PARAMS === 'true',
    })
  }

  const README_RE = /^\/(?:.+\/)?README(?:_.+)?\.md$/i

  return {
    name: 'vite-plugin-virtual-readme',
    configureServer(server) {
      server.middlewares.use(async ({ url }, res) => {
        res.setHeader('Content-Type', 'text/html; charset=UTF-8')

        function error404() {
          res.statusCode = 404
          res.end('404 Not Found')
        }

        if (url === undefined || (url !== '/' && !README_RE.test(url))) {
          return error404()
        }

        try {
          res.end(generateResponse(decodeURI(url.slice(1))))
        }
        catch (error) {
          if (error.code === 'ENOENT') {
            return error404()
          }
          res.statusCode = 500
          res.end(renderGithubHtml({
            title: 'Error',
            markdown: `\`\`\`\n${error.message}\n\`\`\`\n`,
          }))
          throw error
        }
      })

      const watcher = chokidar.watch([absBadgesDir, absMetaFilePath, RENDER_TEMPLATE_DIR], {
        ignoreInitial: true,
        persistent: true,
      })
      server.httpServer?.on('close', () => watcher.close())

      watcher.on('all', () => {
        manager.init()
        server.ws.send({ type: 'full-reload' })
      })
    },
  }
}