import type { Badge } from '@readme-widget-hub/badge'
import type { Readme } from '@readme-widget-hub/meta'
import { formatMarkdown } from '@readme-widget-hub/utils'
import { badge2RenderBadge } from '../readme/badge'
import { renderTpl } from '../tpl'

export interface RenderBadgeDocOptions {
  badge: Badge
  readme: Readme
  showParams: boolean
}

export function renderBadgeDoc(options: RenderBadgeDocOptions) {
  return formatMarkdown(renderTpl('doc/badge.md', {
    ...options,
    badge: badge2RenderBadge(options.badge),
  }))
}