import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import virtualReadme from './plugin/virtual-readme.js'

export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      virtualReadme({ env: loadEnv(mode, '') as ImportMetaEnv }),
    ],
  }
})