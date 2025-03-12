import rehypeParse from 'rehype-parse'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'

export function markdown2Html(markdown: string): string {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .processSync(markdown)
    .toString()
}

export interface MarkdownImage {
  src: string
  alt?: string
  href?: string
}

export function extractImages4Markdown(markdown: string): MarkdownImage[] {
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