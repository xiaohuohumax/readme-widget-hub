interface ImportMetaEnv {
  /** 小部件信息文件目录 */
  readonly VITE_WIDGETS_DIR: string
  /** 元数据文件路径 */
  readonly VITE_META_FILE_PATH: string
  /** 默认语言代码 */
  readonly VITE_DEFAULT_LOCALE_CODE: string
  /** 小部件 README 输出目录 */
  readonly VITE_WIDGET_README_OUTPUT_DIR: string
  /** 是否显示小部件参数 */
  readonly VITE_SHOW_PARAMS: string
  /** 文档首页页面小部件展示数量 */
  readonly VITE_DOC_SHOW_FEATURES_COUNT: string
  /** 文档基础 URL */
  readonly VITE_DOCS_BASE_URL: string
  /** 小部件 README 服务器端口 */
  readonly VITE_README_SERVER_PORT: string
  /** 小部件文档服务器端口 */
  readonly VITE_DOCS_SERVER_PORT: string
  /** 小部件在线页面 URL */
  readonly VITE_ONLINE_PAGE_URL: string
  /** 文档首页页面 URL */
  readonly VITE_START_PAGE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}