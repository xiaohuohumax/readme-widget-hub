import type { Readme } from '@readme-widget-hub/meta'
import { formatMarkdown } from '@readme-widget-hub/utils'
import { renderTpl } from '../tpl'

export interface RenderThanksDocOptions {
  readme: Readme
}

export function renderThanksDoc(options: RenderThanksDocOptions) {
  return formatMarkdown(renderTpl('doc/thanks.md', options))
}