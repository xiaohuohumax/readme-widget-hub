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
        badgesDir: env.VITE_BADGES_DIR,
        readmeTplPath: env.VITE_README_TPL_PATH,
      }),
    ],
  }
})