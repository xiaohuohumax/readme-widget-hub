import { markdown2Html } from '@readme-widget-hub/utils'
import { renderTpl } from './tpl'

export interface RenderGithubHtmlOptions {
  markdown: string
  title: string
}

export function renderGithubHtml(options: RenderGithubHtmlOptions): string {
  return renderTpl('github.html', {
    title: options.title,
    content: markdown2Html(options.markdown),
  })
}
