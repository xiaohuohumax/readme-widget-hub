import type { Plugin } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'

function utimesFile(file: string) {
  fs.utimesSync(file, new Date(), new Date())
}

export function watchFiles(files: string[]): Plugin {
  return {
    name: 'vite-plugin-watch-files',
    configureServer(server) {
      server.watcher.add(files)
      server.watcher.on('all', (_, p) => {
        if (files.includes(p)) {
          utimesFile(path.join(path.dirname(__filename), '../config.ts'))
          utimesFile(path.join(path.dirname(__filename), '../../[doc].paths.ts'))
        }
      })
    },
  }
}