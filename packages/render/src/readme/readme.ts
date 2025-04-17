import type { Readme } from '@readme-widget-hub/meta'
import { formatMarkdown } from '@readme-widget-hub/utils'
import { renderGithubHtml } from '../github-html'
import { renderTpl } from '../tpl'

export interface Nav {
  name: string
  href: string
}

interface BadgeToc {
  type: 'badge'
  name: string
  href: string
  level: number
}

interface CollectionToc {
  type: 'collection'
  name: string
  level: number
}

export type Toc = BadgeToc | CollectionToc

export type RenderMode = 'html' | 'markdown'

interface RenderReadmeOptionsBase {
  title: string
  description: string
  showTags: boolean
  badgeCount: number
  navs: Nav[]
  tocs: Toc[]
  readme: Readme
  hasLocale: boolean
}

type RenderReadmeHtmlOptions = RenderReadmeOptionsBase & {
  mode: 'html'
  htmlTitle: string
}

type RenderReadmeMarkdownOptions = RenderReadmeOptionsBase & {
  mode: 'markdown'
}

export type RenderReadmeOptions = RenderReadmeHtmlOptions | RenderReadmeMarkdownOptions

export function renderReadme(options: RenderReadmeOptions): string {
  function formatRenderReadmeOptions(options: RenderReadmeOptions): RenderReadmeOptions {
    return {
      ...options,
      navs: options.navs.map(nav => ({
        ...nav,
        href: encodeURI(nav.href),
      })),
      tocs: options.tocs.map((toc) => {
        if (toc.type === 'badge') {
          return { ...toc, href: encodeURI(toc.href) }
        }
        return toc
      }),
    }
  }

  const markdown = renderTpl('readme/readme.md', formatRenderReadmeOptions(options))
  if (options.mode === 'markdown') {
    return formatMarkdown(markdown)
  }
  return renderGithubHtml({ title: options.htmlTitle, markdown })
}
