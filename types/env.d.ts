interface ImportMetaEnv {
  /** GitHub Token */
  readonly VITE_GITHUB_TOKEN?: string
  /** 徽章信息文件目录 */
  readonly VITE_BADGES_DIR_PATH: string
  /** 徽章集合信息文件名称 */
  readonly VITE_COLLECTION_FILE_NAME: string
  /** README 模板文件路径 */
  readonly VITE_TPL_PATH: string
  /** README 模板 TOC 标题 */
  readonly VITE_TPL_TOC_TITLE: string
  /** README 模板徽章标题级别 */
  readonly VITE_TPL_BADGE_HEADING_LEVEL: string
  /** 徽章示例折叠阈值，超过该阈值的示例会折叠 */
  readonly VITE_EXAMPLES_FOLD_THRESHOLD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}