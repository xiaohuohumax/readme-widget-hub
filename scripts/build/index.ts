import type { Badge } from './schema.js'
import fs from 'fs-extra'
import { badgesToMarkdown, readBadges } from './badge.js'

console.log('Start building README.md')

const readmeTpl = fs.readFileSync(import.meta.env.VITE_README_TPL_PATH, 'utf-8')
const badges: Badge[] = readBadges(import.meta.env.VITE_BADGES_DIR)
const readme = badgesToMarkdown(badges, readmeTpl, import.meta.env.VITE_README_TPL_TOC_TITLE)
fs.writeFileSync('./README.md', readme)

console.log('Build README.md success.')