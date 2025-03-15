import type { LogOptions, Plugin } from 'vite'
import type { BadgeBuilderOptions, Logger } from '../scripts/build/badge.js'
import chokidar from 'chokidar'
import { createLogger } from 'vite'
import { BadgeReadmeBuilder } from '../scripts/build/badge.js'

const virtualModuleId = 'virtual:readme'
const resolvedVirtualModuleId = `\0${virtualModuleId}`

export type VirtualReadmeOptions = Omit<BadgeBuilderOptions, 'logger'> & {}

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
  const logger: Logger = createCustomLogger({ timestamp: true })
  const builder = new BadgeReadmeBuilder({ ...options, logger })

  return {
    name: 'vite-plugin-virtual-readme',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export default ${JSON.stringify(builder.generateReadme())}`
      }
    },
    configureServer(server) {
      const watcher = chokidar.watch([options.badgeDirPath, options.tplPath], {
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
          data: builder.generateReadme(),
        })
      }

      watcher.on('all', handleChange)

      server.httpServer?.once('close', () => watcher.close())
    },
  }
}