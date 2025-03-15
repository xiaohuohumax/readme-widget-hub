import fs from 'fs-extra'
import { BadgeReadmeBuilder } from './badge.js'

console.log('Start building README.md')

const builder = new BadgeReadmeBuilder({
  badgeDirPath: import.meta.env.VITE_BADGES_DIR_PATH,
  collectionFileName: import.meta.env.VITE_COLLECTION_FILE_NAME,
  tplPath: import.meta.env.VITE_TPL_PATH,
  tplTocTitle: import.meta.env.VITE_TPL_TOC_TITLE,
  tplBadgeHeadingLevel: Number.parseInt(import.meta.env.VITE_TPL_BADGE_HEADING_LEVEL),
  logger: console,
})

fs.writeFileSync('README.md', builder.generateReadme())

console.log('Build README.md success.')