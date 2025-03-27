import MarkdownIt from 'markdown-it'
// @ts-expect-error ignore export default warning
import MarkdownItGithubAlerts from 'markdown-it-github-alerts'
import { remark } from 'remark'
import remarkFrontmatter from 'remark-frontmatter'

const md = new MarkdownIt({
  html: true,
})
md.use(MarkdownItGithubAlerts)

export function markdown2Html(markdown: string): string {
  return md.render(markdown)
}

export function formatMarkdown(markdown: string): string {
  return remark()
    .use(remarkFrontmatter)
    .processSync(markdown)
    .toString()
    // FIX MarkdownItGithubAlerts 异常
    // 不支持 `> \[!Tip]` 类型的语法, 需要去除转义`\[` => `[`
    .replaceAll(/> \\\[!/g, () => '> [!')
}