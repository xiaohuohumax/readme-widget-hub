interface TocBase {
  title: string
  level: number
  index: number
}

export interface TocBadge extends TocBase {
  type: 'badge'
  href: string
  path: string
}

export interface TocCollection extends TocBase {
  type: 'collection'
  items: TocTpl[]
}

export type TocTpl = TocBadge | TocCollection
