import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import virtualReadme from './plugin/virtual-readme'

const rootDir = path.join(__dirname, '../../')

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, rootDir) as unknown as ImportMetaEnv
  return {
    envDir: rootDir,
    plugins: mode === 'development'
      ? [virtualReadme({ env })]
      : [],
    server: {
      port: Number.parseInt(env.VITE_README_SERVER_PORT),
    },
  }
})