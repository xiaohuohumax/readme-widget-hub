/**
 * 爬取配置
 */
export interface SpiderConfig {
  /** 爬取语言类型 */
  languages: string[]
  /** 每种语言类型下需要爬取的仓库数量 */
  languageReposCount: number
  /** 爬取仓库列表 */
  repos: string[]
  /** 图片链接匹配规则，参考：https://www.npmjs.com/package/minimatch */
  imagePatterns: string[]
}