import type { Overwrite } from '@readme-widget-hub/utils'
import type { Alert, Example, LinkRule, Rule, Widget } from '@readme-widget-hub/widget'
import type { RenderReadmeOptions } from './readme'
import { ensureArray, formatMarkdown } from '@readme-widget-hub/utils'
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

type RenderWidget = Overwrite<Widget, {
  alert?: RenderAlert
  linkRules: RenderLinkRule[]
  examples: RenderExample[]
}>

type RenderWidgetOptionsBase = Omit<RenderReadmeOptions, 'tocs'> & {
  widget: Widget
  showParams: boolean
}

type RenderWidgetHtmlOptions = RenderWidgetOptionsBase & {
  mode: 'html'
  htmlTitle: string
}

type RenderWidgetMarkdownOptions = RenderWidgetOptionsBase & {
  mode: 'markdown'
}

export type RenderWidgetOptions = RenderWidgetHtmlOptions | RenderWidgetMarkdownOptions

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

export function widget2RenderWidget(widget: Widget): RenderWidget {
  return {
    ...widget,
    alert: widget.alert && alert2RenderAlert(widget.alert),
    linkRules: ensureArray(widget.linkRules).map(linkRule2RenderLinkRule),
    examples: ensureArray(widget.examples).map(example2RenderExample),
  }
}

export function renderWidget(options: RenderWidgetOptions): string {
  const markdown = renderTpl('readme/widget.md', {
    ...options,
    widget: widget2RenderWidget(options.widget),
  })
  if (options.mode === 'markdown') {
    return formatMarkdown(markdown)
  }
  return renderGithubHtml({ title: options.htmlTitle, markdown })
}