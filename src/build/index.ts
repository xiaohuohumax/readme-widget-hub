import type { Badge } from './schema.js'
import { Ajv } from 'ajv'
import { render } from 'art-template'
import fs from 'fs-extra'

const BADGE_INDEX_DEFAULT = 9999
const DO_NOT_EDIT = '<!-- 这是由脚本自动生成的 README.md 文件，请勿直接修改此文件！ -->\n\n'
const badgeSchema = fs.readJSONSync('schema/badge.schema.json')
const readmeTpl = fs.readFileSync('README-TPL.md', 'utf-8')
const ajv = new Ajv()
const badges: Badge[] = []

console.log('Start building README.md')

const badgeJsonMap = import.meta.glob<any>('/badge/**/*.json', { eager: true })

for (const badgeJsonPath in badgeJsonMap) {
  const badgeJson = badgeJsonMap[badgeJsonPath].default

  const validate = ajv.compile(badgeSchema)
  const valid = validate(badgeJson)
  if (!valid) {
    const error = validate.errors![0]
    console.error(`Invalid badge ${badgeJsonPath}: ${error.message}`)
    continue
  }
  const badge = badgeJson as Badge
  if (badge.enabled === false) {
    continue
  }
  console.log('Valid badge:', badgeJsonPath)
  badges.push(badge)
}

const readme = render(readmeTpl, {
  badges: badges.sort((a, b) => (a.index || BADGE_INDEX_DEFAULT) - (b.index || BADGE_INDEX_DEFAULT)),
}).replaceAll(/\n{3,}/g, () => '\n\n')

fs.writeFileSync('./README.md', DO_NOT_EDIT + readme)

console.log('Build README.md success.')