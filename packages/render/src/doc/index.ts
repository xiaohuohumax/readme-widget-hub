import type { Doc } from '@badge-collection/meta'
import { formatMarkdown } from '@badge-collection/utils'
import { renderTpl } from '../tpl'

export interface Feature {
  title: string
  details: string
  link: string
}

export interface RenderIndexDocOptions {
  name: string
  title: string
  logo: string
  features: Feature[]
  doc: Doc
  localeCode: string
}

export function renderIndexDoc(options: RenderIndexDocOptions) {
  return formatMarkdown(renderTpl('doc/index.md', options))
}