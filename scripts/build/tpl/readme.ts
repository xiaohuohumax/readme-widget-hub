import type { Readme } from '../../schema/readme.schema.js'
import type { Locale } from './readme-header.js'
import type { TocTpl } from './readme-toc.js'

export interface ReadmeTpl {
  locales: Locale[]
  readme: Readme
  tocs: TocTpl[]
  badgeCount: number
  tagBadgeStyle: string
  guideBadgeStyle: string
  openParamsDetails: boolean
  openExamplesDetails: boolean
}