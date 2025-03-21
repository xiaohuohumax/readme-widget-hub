import type { Root } from 'hast'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeParse from 'rehype-parse'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkToc from 'remark-toc'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'

function fixGithubAlert() {
  return (tree: Root) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'blockquote' || node.children.length < 2) {
        return
      }
      const bodyElement = node.children[1]
      if (bodyElement.type !== 'element' || bodyElement.tagName !== 'p') {
        return
      }
      const contentElement = bodyElement.children[0]
      if (contentElement.type !== 'text') {
        return
      }
      const content = contentElement.value
      if (!content.startsWith('[!')) {
        return
      }
      const closeIndex = content.indexOf(']', 1)
      const alertType = content.slice(2, closeIndex)
      contentElement.value = content.slice(closeIndex + 1).trimStart()
      node.children = node.children.toSpliced(1, 0, {
        type: 'element',
        tagName: 'p',
        children: [
          { type: 'text', value: alertType },
        ],
        properties: {},
      })
      node.properties.class = `github-alert ${alertType.toLowerCase()}`
    })
  }
}

function lazyLoadImagePlugin() {
  return (tree: Root) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img' && node.properties) {
        node.properties['data-src'] = node.properties.src
        delete node.properties.src
        node.properties.class = 'lazyload'
      }
    })
  }
}

export function markdown2Html(markdown: string): string {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings) // 标题添加锚点
    .use(rehypeRaw)
    .use(lazyLoadImagePlugin) // 图片延迟加载
    .use(fixGithubAlert) // 修复 Github Alert样式
    .use(rehypeStringify)
    .processSync(markdown)
    .toString()
}

export interface MarkdownImage {
  src: string
  alt?: string
  href?: string
}

export function generateToc(markdown: string, tocTitle: string): string {
  return remark()
    .use(remarkToc, { heading: tocTitle })
    .processSync(markdown)
    .toString()
}

export function extractImages(markdown: string): MarkdownImage[] {
  if (markdown.trim() === '') {
    return []
  }
  const images: MarkdownImage[] = []
  const readmeHtml = markdown2Html(markdown)

  const readmeHtmlAst = unified()
    .use(rehypeParse, { fragment: true })
    .parse(readmeHtml)

  visit(readmeHtmlAst, 'element', ({ tagName, properties }, _, parent) => {
    if (tagName !== 'img') {
      return
    }
    const src = properties.src as string | undefined
    const alt = (properties.alt || '') as string
    if (!src) {
      return
    }
    const image: MarkdownImage = { src, alt }
    if (parent?.type === 'element' && parent.tagName === 'a') {
      image.href = parent.properties.href as string | undefined
    }
    images.push(image)
  })

  return images
}