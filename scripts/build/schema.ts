/**
 * 规则参数
 */
export interface RuleItem {
  /** 名称 */
  name: string
  /** 类型 */
  type: string
  /** 默认值 */
  default?: string
  /** 说明 */
  description: string
  /** 补充说明 */
  extDescription?: string
}

/**
 * Markdown 图片
 */
export interface MarkdownImage {
  /** 描述 */
  alt?: string
  /** 链接 */
  src: string
}

/**
 * 示例
 */
export interface Example {
  /** 说明 */
  explain: MarkdownImage & {
    /** 注释 */
    annotate?: string
  }
  /** 图片 */
  images: MarkdownImage[]
}

/**
 * 徽章数据结构
 */
export interface Badge {
  /**
   * 是否启用
   *
   * @default true
   */
  enabled?: boolean
  /**
   * 显示顺序，数字越小越靠前
   *
   * @default 9999
   */
  index?: number
  /** 名称 */
  title: string
  /** 描述 */
  description: string
  /** 提示 */
  alert?: {
    /**
     * 类型
     *
     * @default 'Tip'
     */
    type?: 'Note' | 'Tip' | 'Important' | 'Warning' | 'Caution'
    /** 提示内容 */
    messages: string | string[]
  }
  /** 标签 */
  tags?: {
    /** 项目地址 */
    repoUrl?: string
    /** 在线工具地址 */
    onlineToolUrl?: string
    /** 官方文档地址 */
    officialDocsUrl?: string
    /** 是否需要登录 */
    needLogin?: boolean
  }
  /** 规则 */
  rule: {
    /** 路径参数 */
    params?: RuleItem[]
    /** 查询参数 */
    query?: RuleItem[]
    /** 整体URL模板 URI Template */
    URITemplates: string | string[]
  }
  /** 示例 */
  useExamples: Example[]
}

export interface Collection {
  /**
   * 是否启用
   *
   * @default true
   */
  enabled?: boolean
  /**
   * 显示顺序，数字越小越靠前
   *
   * @default 9999
   */
  index?: number
  /** 名称 */
  title: string
  /** 描述 */
  description?: string
}