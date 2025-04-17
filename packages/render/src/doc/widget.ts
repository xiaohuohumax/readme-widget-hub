import type { Readme } from '@readme-widget-hub/meta'
import type { Widget } from '@readme-widget-hub/widget'
import { formatMarkdown } from '@readme-widget-hub/utils'
import { widget2RenderWidget } from '../readme/widget'
import { renderTpl } from '../tpl'

export interface RenderWidgetDocOptions {
  widget: Widget
  readme: Readme
  showParams: boolean
}

export function renderWidgetDoc(options: RenderWidgetDocOptions) {
  return formatMarkdown(renderTpl('doc/widget.md', {
    ...options,
    widget: widget2RenderWidget(options.widget),
  }))
}