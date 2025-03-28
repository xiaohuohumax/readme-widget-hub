import { loadEnv as viteLoadEnv } from 'vite'

export function loadEnv(dir: string): ImportMetaEnv {
  return viteLoadEnv('', dir) as unknown as ImportMetaEnv
}