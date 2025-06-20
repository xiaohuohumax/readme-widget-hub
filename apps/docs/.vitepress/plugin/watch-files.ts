import type { Plugin } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import chokidar from 'chokidar'

function utimesFile(file: string) {
  fs.utimesSync(file, new Date(), new Date())
}

function absPath(p: string): string {
  return path.join(path.dirname(__filename), p)
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
        utimesFile(absPath('../config.ts'))
        for (const f of fs.readdirSync(absPath('../../'), { withFileTypes: true })) {
          if (f.isFile() && f.name.endsWith('.paths.ts')) {
            utimesFile(path.join(f.parentPath, f.name))
          }
        }
      })
      server.httpServer?.on('close', () => watcher.close())
    },
  }
}