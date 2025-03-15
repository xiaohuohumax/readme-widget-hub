import type { Badge } from './schema.js'
import path from 'node:path'
import { Ajv } from 'ajv'
import ArtTemplate from 'art-template'
import fs from 'fs-extra'
import klawSync from 'klaw-sync'
import badgeSchema from '../../.vscode/schema/badge.schema.json'
import { generateToc } from '../../src/markdown.js'

const BADGE_INDEX_DEFAULT = 9999
const DO_NOT_EDIT = '<!-- 这是由脚本自动生成的文件，请勿直接修改此文件！ -->\n\n'
const ajv = new Ajv()

export interface BadgeJson {
  path: string
  json: any
}

function readBadgeJsons(badgeDirPath: string, logger: Logger): BadgeJson[] {
  if (!fs.existsSync(badgeDirPath)) {
    return []
  }

  return klawSync(badgeDirPath, { nodir: true })
    .filter(item => path.extname(item.path) === '.json')
    .map((item) => {
      const badgeJson = fs.readJSONSync(item.path, { throws: false })
      if (badgeJson === null) {
        logger.warn(`Invalid JSON file: ${item.path}`)
      }
      return {
        path: item.path,
        json: badgeJson,
      }
    })
    .filter(item => item.json !== null)
}

function validateBadgeJson(badgeJson: any): Badge {
  const validate = ajv.compile(badgeSchema)
  const valid = validate(badgeJson)
  if (!valid) {
    const error = validate.errors![0]
    throw new Error(`Invalid badge: ${error.message}`)
  }
  return badgeJson as Badge
}

interface Logger {
  log: (msg: string) => void
  warn: (msg: string) => void
  error: (msg: string) => void
}

function badgeFormat(badge: Badge): Badge {
  badge.rule.URITemplates = Array.isArray(badge.rule.URITemplates)
    ? badge.rule.URITemplates
    : [badge.rule.URITemplates]
  return badge
}

export function readBadges(badgeDirPath: string, logger: Logger = console): Badge[] {
  const badgeJsons = readBadgeJsons(badgeDirPath, logger)
  const badges: Badge[] = []
  for (const badgeJson of badgeJsons) {
    try {
      const badge = validateBadgeJson(badgeJson.json)
      if (badge.enabled === false) {
        logger.warn(`Disabled badge: ${badgeJson.path}`)
        continue
      }
      logger.log(`Valid badge: ${badgeJson.path}`)
      badges.push(badgeFormat(badge))
    }
    catch (error) {
      logger.error(`Invalid badge ${badgeJson.path}: ${(error as Error).message}`)
    }
  }
  return badges
}

export function badgesToMarkdown(badges: Badge[], readmeTpl: string, tocTitle: string): string {
  const readme = DO_NOT_EDIT + ArtTemplate.render(readmeTpl, {
    badges: badges.sort((a, b) => (a.index || BADGE_INDEX_DEFAULT) - (b.index || BADGE_INDEX_DEFAULT)),
  }).replaceAll(/\n{3,}/g, () => '\n\n')
  return generateToc(readme, tocTitle)
  // .replaceAll(/> +\\\[!/g, () => '> [!') // 将 Github Alert 结构中的转义符号 `\` 去除
}