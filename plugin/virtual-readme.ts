import type { Logger, LogOptions, Plugin } from 'vite'
import chokidar from 'chokidar'
import fs from 'fs-extra'
import { createLogger } from 'vite'
import { badgesToMarkdown, readBadges } from '../scripts/build/badge.js'

const virtualModuleId = 'virtual:readme'
const resolvedVirtualModuleId = `\0${virtualModuleId}`

export interface VirtualReadmeOptions {
  readmeTplPath: string
  badgesDir: string
}

function createCustomLogger(logOptions: LogOptions): Logger {
  const logger = createLogger()

  const createLoggerFunc = (func: (msg: string, options?: LogOptions) => void) => {
    return (msg: string) => func(msg, logOptions)
  }

  return {
    ...logger,
    warn: createLoggerFunc(logger.warn),
    error: createLoggerFunc(logger.error),
    info: createLoggerFunc(logger.info),
  }
}

export default function virtualReadme(options: VirtualReadmeOptions): Plugin {
  const logger: Logger = createCustomLogger({ timestamp: true })

  function generateReadme() {
    const readmeTpl = fs.readFileSync(options.readmeTplPath, 'utf-8')
    const badges = readBadges(options.badgesDir, {
      log: logger.info,
      warn: logger.warn,
      error: logger.error,
    })
    return badgesToMarkdown(badges, readmeTpl)
  }

  return {
    name: 'vite-plugin-virtual-readme',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export default ${JSON.stringify(generateReadme())}`
      }
    },
    configureServer(server) {
      const watcher = chokidar.watch([options.badgesDir, options.readmeTplPath], {
        ignoreInitial: true,
        persistent: true,
      })
      function handleChange(event: string, filePath: string) {
        const module = server.moduleGraph.getModuleById(resolvedVirtualModuleId)
        if (!module) {
          return
        }
        logger.warn(`[vite-virtual-readme] ${event} ${filePath}`)
        server.moduleGraph.invalidateModule(module)
        server.ws.send({
          type: 'custom',
          event: 'virtual:readme:reload',
          data: generateReadme(),
        })
      }

      watcher.on('all', handleChange)

      server.httpServer?.once('close', () => watcher.close())
    },
  }
}