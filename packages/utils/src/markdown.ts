import MarkdownIt from 'markdown-it'
// @ts-expect-error ignore export default warning
import MarkdownItGithubAlerts from 'markdown-it-github-alerts'
import { remark } from 'remark'
import remarkFrontmatter from 'remark-frontmatter'
import remarkRemoveComments from 'remark-remove-comments'
import { visit } from 'unist-util-visit'

const md = new MarkdownIt({
  html: true,
})
md.use(MarkdownItGithubAlerts)

export function markdown2Html(markdown: string): string {
  return md.render(markdown)
}

function remarkRemoveUnusedLinks() {
  return (tree: any) => {
    const usedIdentifiers = new Set()

    // 收集所有已使用的链接标识符
    visit(tree, 'linkReference', (node) => {
      usedIdentifiers.add(node.identifier.toLowerCase())
    })
    visit(tree, 'imageReference', (node) => {
      usedIdentifiers.add(node.identifier.toLowerCase())
    })

    // 移除未被引用的链接定义
    visit(tree, 'definition', (node, index, parent) => {
      if (!usedIdentifiers.has(node.identifier.toLowerCase())) {
        parent.children.splice(index, 1)
      }
    })
  }
}

export function formatMarkdown(markdown: string): string {
  return remark()
    .use(remarkFrontmatter)
    .use(remarkRemoveUnusedLinks)
    .use(remarkRemoveComments)
    .processSync(markdown)
    .toString()
    // FIX MarkdownItGithubAlerts 异常
    // 不支持 `> \[!Tip]` 类型的语法, 需要去除转义`\[` => `[`
    .replaceAll(/> \\\[!/g, () => '> [!')
}