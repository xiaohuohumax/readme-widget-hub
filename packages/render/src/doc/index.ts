import type { Doc } from '@readme-widget-hub/meta'
import { formatMarkdown } from '@readme-widget-hub/utils'
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
  startPageUrl: string
}

export function renderIndexDoc(options: RenderIndexDocOptions) {
  return formatMarkdown(renderTpl('doc/index.md', options))
}