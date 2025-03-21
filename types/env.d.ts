interface ImportMetaEnv {
  /** GitHub Token */
  readonly VITE_GITHUB_TOKEN?: string
  /**
   * 指引徽章样式（例如：使用示例、返回顶部等）
   * 可选值：flat、flat-square、plastic、for-the-badge
   *
   * @default 'for-the-badge'
   */
  readonly VITE_GUIDE_BADGE_STYLE?: string
  /**
   * 标签徽章样式（（例如：项目地址、官方文档等）
   * 可选值：flat、flat-square、plastic、for-the-badge
   *
   * @default 'flat-square'
   */
  readonly VITE_TAG_BADGE_STYLE?: string
  /** 徽章信息文件目录 */
  readonly VITE_BADGES_DIR_PATH: string
  /** 徽章集合信息文件名称 */
  readonly VITE_COLLECTION_FILE_NAME: string
  /** README 模板文件路径 */
  readonly VITE_TPL_PATH: string
  /** README 模板徽章标题级别 */
  readonly VITE_TPL_BADGE_HEADING_LEVEL: string
  /** 徽章示例折叠阈值，超过该阈值的示例会折叠 */
  readonly VITE_EXAMPLES_FOLD_THRESHOLD: string
  /** 本地化 README 文件目录 */
  readonly VITE_LOCALE_README_DIR_PATH: string
  /** 是否显示徽章详情页的参数 */
  readonly VITE_OPEN_PARAMS_DETAILS: string
  /** 是否显示徽章详情页的示例 */
  readonly VITE_OPEN_EXAMPLES_DETAILS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}