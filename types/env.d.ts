interface ImportMetaEnv {
  /** GitHub Token */
  readonly VITE_GITHUB_TOKEN?: string
  /** 徽章信息文件目录 */
  readonly VITE_BADGES_DIR: string
  /** README 模板文件路径 */
  readonly VITE_README_TPL_PATH: string
  /** README 模板 TOC 标题 */
  readonly VITE_README_TPL_TOC_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}