import type { Plugin } from 'vite'
import path from 'node:path'
import { Manager } from '@readme-widget-hub/manager'
import { RENDER_TEMPLATE_DIR, renderGithubHtml, renderReadme, renderWidget } from '@readme-widget-hub/render'
import chokidar from 'chokidar'
import fs from 'fs-extra'
import { createLogger } from 'vite'
import { object2Navs, url2WidgetFilePaths, widgetTree2Tocs } from '../src/transform'

const rootDir = path.join(__dirname, '../../../')

export interface VirtualReadmeOptions {
  env: ImportMetaEnv
}

export default function virtualReadme({ env }: VirtualReadmeOptions): Plugin {
  const absWidgetsDir = path.join(rootDir, env.VITE_WIDGETS_DIR)
  const absMetaFilePath = path.join(rootDir, env.VITE_META_FILE_PATH)
  const logger = createLogger()
  const README_RE = /^\/(?:.+\/)?README(?:_.+)?\.md$/i
  const manager = new Manager({
    defaultLocaleCode: env.VITE_DEFAULT_LOCALE_CODE,
    absWidgetsDir,
    absMetaFilePath,
  })

  function generateResponse(url: string): string {
    const { dir } = path.parse(url)
    const locale = manager.url2Locale(url)
    const isRoot = dir === ''

    const meta = manager.getMeta(locale)
    const flatWidgets = manager.getFlatWidgets(locale)
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
        widgetCount: manager.widgetCount,
        navs: object2Navs(false, readme, readme, env.VITE_ONLINE_PAGE_URL, locale, manager),
        tocs: widgetTree2Tocs(rootDir, flatWidgets, env, localeFileName),
        readme,
      })
    }

    const widgetFilePaths = url2WidgetFilePaths(rootDir, url, env)
    const widgetFilePath = widgetFilePaths.find(fs.pathExistsSync) || widgetFilePaths[0]
    const widget = manager.getWidget(widgetFilePath, locale)

    return renderWidget({
      mode: 'html',
      hasLocale: manager.hasLocale(widget, locale),
      htmlTitle: `${widget.title} [${locale.name}]`,
      title: meta.title,
      description: meta.description,
      showTags: false,
      widgetCount: manager.widgetCount,
      navs: object2Navs(true, widget, readme, env.VITE_ONLINE_PAGE_URL, locale, manager),
      readme: meta.readme,
      widget,
      showParams: env.VITE_SHOW_PARAMS === 'true',
    })
  }

  return {
    name: 'vite-plugin-virtual-readme',
    configureServer(server) {
      server.middlewares.use(async ({ url }, res, next) => {
        res.setHeader('Content-Type', 'text/html; charset=UTF-8')

        function error404() {
          res.statusCode = 404
          res.end('404 Not Found')
          logger.warn(`File not found: ${url}`, { timestamp: true })
        }

        if (url === undefined || (url !== '/' && !README_RE.test(url))) {
          return next()
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
          logger.error(error, { timestamp: true })
          throw error
        }
      })

      const watcher = chokidar.watch([absWidgetsDir, absMetaFilePath, RENDER_TEMPLATE_DIR], {
        ignoreInitial: true,
        persistent: true,
      })
      server.httpServer?.on('close', () => watcher.close())

      watcher.on('all', () => {
        try {
          manager.init()
        }
        catch (error) {
          logger.error(error.message, { timestamp: true })
        }
        server.ws.send({ type: 'full-reload' })
      })
    },
  }
}