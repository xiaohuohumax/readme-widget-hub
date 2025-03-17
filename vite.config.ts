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
        guideBadgeStyle: env.VITE_GUIDE_BADGE_STYLE,
        tagBadgeStyle: env.VITE_TAG_BADGE_STYLE,
        badgeDirPath: env.VITE_BADGES_DIR_PATH,
        collectionFileName: env.VITE_COLLECTION_FILE_NAME,
        tplPath: env.VITE_TPL_PATH,
        tplTocTitle: env.VITE_TPL_TOC_TITLE,
        tplBadgeHeadingLevel: Number.parseInt(env.VITE_TPL_BADGE_HEADING_LEVEL),
        examplesFoldThreshold: Number.parseInt(env.VITE_EXAMPLES_FOLD_THRESHOLD),
      }),
    ],
  }
})