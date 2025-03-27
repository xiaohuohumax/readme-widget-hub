import type { Alert, Badge, Example, LinkRule, Rule } from '@badge-collection/badge'
import type { Overwrite } from '@badge-collection/utils'
import type { RenderReadmeOptions } from './readme'
import { ensureArray, formatMarkdown } from '@badge-collection/utils'
import { renderGithubHtml } from '../github-html'
import { renderTpl } from '../tpl'

type RenderAlert = Overwrite<Alert, {
  messages: string[]
}>

type RenderLinkRule = Overwrite<LinkRule, {
  params: Rule[]
  querys: Rule[]
}>

type RenderExample = Overwrite<Example, {
  alt: string
}>

type RenderBadge = Overwrite<Badge, {
  alert?: RenderAlert
  linkRules: RenderLinkRule[]
  examples: RenderExample[]
}>

type RenderBadgeOptionsBase = Omit<RenderReadmeOptions, 'tocs'> & {
  badge: Badge
  showParams: boolean
}

type RenderBadgeHtmlOptions = RenderBadgeOptionsBase & {
  mode: 'html'
  htmlTitle: string
}

type RenderBadgeMarkdownOptions = RenderBadgeOptionsBase & {
  mode: 'markdown'
}

export type RenderBadgeOptions = RenderBadgeHtmlOptions | RenderBadgeMarkdownOptions

function alert2RenderAlert(alert: Alert): RenderAlert {
  return { ...alert, messages: ensureArray(alert.messages) }
}

function linkRule2RenderLinkRule(linkRules: LinkRule): RenderLinkRule {
  return {
    ...linkRules,
    params: ensureArray(linkRules.params),
    querys: ensureArray(linkRules.querys),
  }
}

function example2RenderExample(example: Example): RenderExample {
  return { ...example, alt: example.alt || '' }
}

export function badge2RenderBadge(badge: Badge): RenderBadge {
  return {
    ...badge,
    alert: badge.alert && alert2RenderAlert(badge.alert),
    linkRules: ensureArray(badge.linkRules).map(linkRule2RenderLinkRule),
    examples: ensureArray(badge.examples).map(example2RenderExample),
  }
}

export function renderBadge(options: RenderBadgeOptions): string {
  const markdown = renderTpl('readme/badge.md', {
    ...options,
    badge: badge2RenderBadge(options.badge),
  })
  if (options.mode === 'markdown') {
    return formatMarkdown(markdown)
  }
  return renderGithubHtml({ title: options.htmlTitle, markdown })
}