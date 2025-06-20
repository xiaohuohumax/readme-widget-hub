import path from 'node:path'
import { Manager } from '@readme-widget-hub/manager'
import { loadEnv } from './.vitepress/env'

export const rootDir = path.resolve(__dirname, '../../')
export const env = loadEnv(rootDir)
export const manager = new Manager({
  defaultLocaleCode: env.VITE_DEFAULT_LOCALE_CODE,
  absWidgetsDir: path.join(rootDir, env.VITE_WIDGETS_DIR),
  absMetaFilePath: path.join(rootDir, env.VITE_META_FILE_PATH),
})
export const locales = manager.getLocales()