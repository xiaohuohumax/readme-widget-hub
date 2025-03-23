import type { LogOptions, Plugin } from 'vite'
import type { Logger } from '../scripts/log.js'
import chokidar from 'chokidar'
import { createLogger } from 'vite'
import { BadgeBuilder } from '../scripts/build/badge.js'

export interface VirtualReadmeOptions {
  env: ImportMetaEnv
}

function createCustomLogger(logOptions: LogOptions): Logger {
  const logger = createLogger()

  function createLoggerFunc(func: (msg: string, options?: LogOptions) => void) {
    return (msg: string) => func(msg, logOptions)
  }

  return {
    warn: createLoggerFunc(logger.warn),
    error: createLoggerFunc(logger.error),
    log: createLoggerFunc(logger.info),
  }
}

export default function virtualReadme(options: VirtualReadmeOptions): Plugin {
  const logger = createCustomLogger({ timestamp: true })

  const builder = new BadgeBuilder({
    env: options.env,
    logger,
  })

  return {
    name: 'vite-plugin-virtual-readme',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url
        if (url === undefined) {
          return next()
        }
        res.setHeader('Content-Type', 'text/html; charset=utf-8')

        if (url === '/' || /^\/.*README(?:_[\w-]+)?\.md$/i.test(url)) {
          logger.log(`Generating README for ${url}`)
          return res.end(builder.generateReadmeHtml(url))
        }

        next()
      })

      const watcher = chokidar.watch([
        options.env.VITE_BADGES_DIR_PATH,
        options.env.VITE_README_JSON_FILE_PATH,
        ...builder.getWatchFiles(),
      ], {
        ignoreInitial: true,
        persistent: true,
      })

      watcher.on('all', (file, event) => {
        logger.log(`File ${file} ${event}, reloading server`)
        server.ws.send({ type: 'full-reload' })
      })

      server.httpServer?.once('close', () => watcher.close())
    },
  }
}