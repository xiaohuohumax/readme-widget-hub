import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import virtualReadme from './plugin/virtual-readme.js'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '')
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      virtualReadme({
        badgeDirPath: env.VITE_BADGES_DIR_PATH,
        collectionFileName: env.VITE_COLLECTION_FILE_NAME,
        tplPath: env.VITE_TPL_PATH,
        tplTocTitle: env.VITE_TPL_TOC_TITLE,
        tplBadgeHeadingLevel: Number.parseInt(env.VITE_TPL_BADGE_HEADING_LEVEL),
      }),
    ],
  }
})