import fs from 'fs-extra'
import { BadgeReadmeBuilder } from './badge.js'

console.log('Start building README.md')

const builder = new BadgeReadmeBuilder({
  guideBadgeStyle: import.meta.env.VITE_GUIDE_BADGE_STYLE,
  tagBadgeStyle: import.meta.env.VITE_TAG_BADGE_STYLE,
  badgeDirPath: import.meta.env.VITE_BADGES_DIR_PATH,
  collectionFileName: import.meta.env.VITE_COLLECTION_FILE_NAME,
  tplPath: import.meta.env.VITE_TPL_PATH,
  tplTocTitle: import.meta.env.VITE_TPL_TOC_TITLE,
  tplBadgeHeadingLevel: Number.parseInt(import.meta.env.VITE_TPL_BADGE_HEADING_LEVEL),
  examplesFoldThreshold: Number.parseInt(import.meta.env.VITE_EXAMPLES_FOLD_THRESHOLD),
  logger: console,
})

fs.writeFileSync('README.md', builder.generateReadme())

console.log('Build README.md success.')