interface ImportMetaEnv {
  /** 徽章信息文件目录 */
  readonly VITE_BADGES_DIR: string
  /** 元数据文件路径 */
  readonly VITE_META_FILE_PATH: string
  /** 默认语言代码 */
  readonly VITE_DEFAULT_LOCALE_CODE: string
  /** 徽章 README 输出目录 */
  readonly VITE_BADGE_README_OUTPUT_DIR: string
  /** 是否显示徽章参数 */
  readonly VITE_SHOW_PARAMS: string
  /** 文档首页页面徽章展示数量 */
  readonly VITE_DOC_SHOW_FEATURES_COUNT: string
  /** 文档基础 URL */
  readonly VITE_DOCS_BASE_URL: string
  /** 徽章 README 服务器端口 */
  readonly VITE_README_SERVER_PORT: string
  /** 徽章文档服务器端口 */
  readonly VITE_DOCS_SERVER_PORT: string
  /** 徽章在线页面 URL */
  readonly VITE_ONLINE_PAGE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}