import fs from 'fs-extra'
import { BadgeReadmeBuilder } from './badge.js'

const localeDirPath = import.meta.env.VITE_LOCALE_README_DIR_PATH

const builder = new BadgeReadmeBuilder({
  guideBadgeStyle: import.meta.env.VITE_GUIDE_BADGE_STYLE,
  tagBadgeStyle: import.meta.env.VITE_TAG_BADGE_STYLE,
  badgeDirPath: import.meta.env.VITE_BADGES_DIR_PATH,
  collectionFileName: import.meta.env.VITE_COLLECTION_FILE_NAME,
  tplPath: import.meta.env.VITE_TPL_PATH,
  tplBadgeHeadingLevel: Number.parseInt(import.meta.env.VITE_TPL_BADGE_HEADING_LEVEL),
  examplesFoldThreshold: Number.parseInt(import.meta.env.VITE_EXAMPLES_FOLD_THRESHOLD),
  openParamsDetails: import.meta.env.VITE_OPEN_PARAMS_DETAILS,
  openExamplesDetails: import.meta.env.VITE_OPEN_EXAMPLES_DETAILS,
  readmeJsonPath: 'readme.json',
  localeDirPath,
  logger: console,
})

const readmeAllLocales = builder.generateReadmeAllLocales()

if (readmeAllLocales.length > 1) {
  fs.mkdirSync(localeDirPath, { recursive: true })
}

for (const { locale, localeName, readmeMarkdown } of readmeAllLocales) {
  const readmePath = builder.getReadmePath(locale)
  console.log(`Write ${localeName} README.md to "${readmePath}"`)
  fs.writeFileSync(readmePath, readmeMarkdown, 'utf-8')
}

console.log('Build README.md success.')
