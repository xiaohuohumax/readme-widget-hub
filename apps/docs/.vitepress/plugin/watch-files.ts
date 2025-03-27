import type { Plugin } from 'vitepress'
import fs from 'node:fs'
import chokidar from 'chokidar'

export function watchFiles(files: string[]): Plugin {
  return {
    name: 'vite-plugin-watch-files',

    configureServer(server) {
      const watcher = chokidar.watch(files, {
        ignoreInitial: true,
        persistent: true,
      })

      watcher.on('all', () => fs.utimesSync(__filename, new Date(), new Date()))
      // watcher.on('all', () => server.ws.send({ type: 'full-reload' }))
      server.httpServer?.on('close', () => watcher.close())
    },
  }
}