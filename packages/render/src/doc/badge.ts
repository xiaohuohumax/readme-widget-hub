import type { Badge } from '@badge-collection/badge'
import type { Readme } from '@badge-collection/meta'
import { formatMarkdown } from '@badge-collection/utils'
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