import type * as badgeSchema from '../../schema/badge.schema.js'
import type { ReadmeTpl } from './readme.js'
import { ensureArray } from '../../util.js'

interface Alert extends badgeSchema.Alert {
  messages: string[]
}

interface Rule extends badgeSchema.Rule {
  params: badgeSchema.RuleItem[]
  querys: badgeSchema.RuleItem[]
  alt: string
}

interface Explain extends badgeSchema.Explain {
  alt: string
}

interface Example extends badgeSchema.Example {
  explain: Explain
}

export interface BadgeData extends badgeSchema.Badge {
  alert?: Alert
  rules: Rule[]
  examples: Example[]
  foldedExamples: Example[]
}

export interface BadgeTpl extends ReadmeTpl {
  badgeData: BadgeData
}

export function badge2BadgeData(badge: badgeSchema.Badge, examplesFoldThreshold: number): BadgeData {
  const examples: Example[] = badge.examples.map(example => ({
    ...example,
    explain: {
      ...example.explain,
      alt: example.explain.alt || 'Alt',
    },
  }))
  const foldedExamples = examples.splice(examplesFoldThreshold)
  const rules: Rule[] = ensureArray(badge.rules).map(rule => ({
    ...rule,
    params: rule.params || [],
    querys: rule.querys || [],
    alt: rule.alt || 'Alt',
  }))

  return {
    ...badge,
    alert: badge.alert && {
      ...badge.alert,
      messages: ensureArray(badge.alert.messages),
    },
    rules,
    examples,
    foldedExamples,
  }
}