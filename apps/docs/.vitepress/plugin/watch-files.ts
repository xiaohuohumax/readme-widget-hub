import type { Plugin } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import chokidar from 'chokidar'

function utimesFile(file: string) {
  fs.utimesSync(file, new Date(), new Date())
}

export function watchFiles(files: string[]): Plugin {
  return {
    name: 'vite-plugin-watch-files',
    configureServer(server) {
      const watcher = chokidar.watch(files, {
        ignoreInitial: true,
        persistent: true,
      })
      watcher.on('all', () => {
        utimesFile(path.join(path.dirname(__filename), '../config.ts'))
        utimesFile(path.join(path.dirname(__filename), '../../[doc].paths.ts'))
      })
      server.httpServer?.on('close', () => watcher.close())
    },
  }
}