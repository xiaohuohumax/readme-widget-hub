import type { Logger } from '../log.js'
import type { Badge } from '../schema/badge.schema.js'
import type { Collection } from '../schema/collection.schema.js'
import type { Readme } from '../schema/readme.schema.js'
import type { BadgeData, BadgeTpl } from './tpl/badge.js'
import type { MarkdownTpl } from './tpl/markdown.js'
import type { Locale } from './tpl/readme-header.js'
import type { TocTpl } from './tpl/readme-toc.js'
import type { ReadmeTpl } from './tpl/readme.js'
import path from 'node:path'
import artTemplate from 'art-template'
import fs from 'fs-extra'
import badgeSchema from '../../.vscode/schema/badge.schema.json'
import collectionSchema from '../../.vscode/schema/collection.schema.json'
import readmeSchema from '../../.vscode/schema/readme.schema.json'
import { formatMarkdown, markdown2Html } from '../markdown.js'
import { changeParentPath, getNodeModulesUrl, objectSwitchLocale, path2url, readAndValidateJsonFile, removeLeadingSlash } from '../util.js'
import { badge2BadgeData } from './tpl/badge.js'

export interface BadgeBuilderOptions {
  env: ImportMetaEnv
  logger: Logger
}

function readTpl(tplPath: string): string {
  return fs.readFileSync(path.resolve(__dirname, tplPath), 'utf-8')
}

export class BadgeBuilder {
  private env: ImportMetaEnv
  private readonly logger: Logger
  private readonly OUTPUT_BADGES_DIR: string
  private readonly INDEX_DEFAULT = 9999
  private readonly ART_TEMPLATE_OPTIONS = {
    root: path.resolve(__dirname, './tpl/'),
  }

  constructor(options: BadgeBuilderOptions) {
    this.env = options.env
    this.logger = options.logger
    this.OUTPUT_BADGES_DIR = path.join(this.env.VITE_OUTPUT_DIR, 'badges')
  }

  private getReadmeJson(locale?: string): Readme {
    const readmeJson = readAndValidateJsonFile<Readme>(
      this.env.VITE_README_JSON_FILE_PATH,
      readmeSchema,
    )
    return locale === undefined
      ? readmeJson
      : objectSwitchLocale(readmeJson, locale)
  }

  private localeToFileName(locale: string): string {
    return locale === '' ? 'README.md' : `README_${locale}.md`
  }

  private getLocale(filePath: string): string {
    const { base } = path.parse(filePath)
    if (base.includes('_')) {
      return base.slice(base.indexOf('_') + 1, base.lastIndexOf('.'))
    }
    return ''
  }

  private getLocales(dirPath: string, readme: Readme, locale: string, isReadme: boolean): Locale[] {
    const locales: Locale[] = []
    if (!isReadme) {
      locales.push({
        name: readme.backToHomeTitle,
        src: `/${this.localeToFileName(locale)}`,
      })
    }
    return Object.entries(readme.locale.langNameMap)
      .reduce((acc, [locale, name]) => {
        acc.push({
          src: path2url(path.join(`/${dirPath}`, this.localeToFileName(locale))),
          name,
        })
        return acc
      }, locales)
  }

  private getTocs(locale: string): TocTpl[] {
    const loop = (dirPath: string, level: number = 0): TocTpl[] => {
      const items: TocTpl[] = []

      for (const file of fs.readdirSync(dirPath, { withFileTypes: true })) {
        const filePath = path.join(dirPath, file.name)

        if (file.name === this.env.VITE_COLLECTION_FILE_NAME) {
          continue
        }

        if (file.isFile()) {
          const badgeJson = readAndValidateJsonFile<Badge>(filePath, badgeSchema)
          if (badgeJson.enabled === false) {
            this.logger.warn(`Badge '${filePath}' is disabled.`)
            continue
          }

          const badgeData: BadgeData = objectSwitchLocale(
            badge2BadgeData(
              badgeJson,
              Number.parseInt(this.env.VITE_EXAMPLES_FOLD_THRESHOLD),
            ),
            locale,
          )
          const { name, dir } = path.parse(filePath)

          items.push({
            index: badgeData.index || this.INDEX_DEFAULT,
            type: 'badge',
            title: badgeData.title,
            level,
            path: filePath,
            href: path2url(
              path.join(
                '/',
                changeParentPath(dir, this.env.VITE_BADGES_DIR_PATH, this.OUTPUT_BADGES_DIR),
                name,
                `${locale === '' ? 'README.md' : `README_${locale}.md`}#readme-params`,
              ),
            ),
          })
        }
        else {
          items.push(...loop(filePath, level + 1))
        }
      }

      items.sort((a, b) => a.index - b.index)

      const collectionFilePath = path.join(dirPath, this.env.VITE_COLLECTION_FILE_NAME)
      if (fs.existsSync(collectionFilePath)) {
        const collection: Collection = objectSwitchLocale(
          readAndValidateJsonFile(collectionFilePath, collectionSchema),
          locale,
        )

        if (collection.enabled === false) {
          this.logger.warn(`Collection '${collectionFilePath}' is disabled.`)
          return []
        }

        return [
          {
            index: collection.index || this.INDEX_DEFAULT,
            type: 'collection',
            title: collection.title,
            level: level - 1,
            items,
          },
        ]
      }

      return items
    }

    const tocTree = loop(this.env.VITE_BADGES_DIR_PATH, 0)

    const result: TocTpl[] = []
    const loopTree = (items: TocTpl[]): void => {
      for (const item of items) {
        result.push(item)
        if (item.type === 'collection') {
          loopTree(item.items)
        }
      }
    }
    loopTree(tocTree)

    return result
  }

  private createReadmeHtml(url: string, tocs: TocTpl[], mode: 'markdown' | 'html'): string {
    url = removeLeadingSlash(url)
    const { name, dir } = path.parse(url)
    const locale = this.getLocale(url)
    const isReadme = dir === ''
    const readme = this.getReadmeJson(locale)

    const tplData: BadgeTpl | ReadmeTpl = {
      locales: this.getLocales(dir, readme, locale, isReadme),
      readme,
      badgeCount: tocs.filter(item => item.type === 'badge').length,
      badgeData: undefined!,
      tocs,
      tagBadgeStyle: this.env.VITE_TAG_BADGE_STYLE || 'flat-square',
      guideBadgeStyle: this.env.VITE_GUIDE_BADGE_STYLE || 'for-the-badge',
      openParamsDetails: this.env.VITE_OPEN_PARAMS_DETAILS === 'true',
      openExamplesDetails: this.env.VITE_OPEN_EXAMPLES_DETAILS === 'true',
    }

    if (!isReadme) {
      const { base: badgeName, dir: badgeDir } = path.parse(
        changeParentPath(dir, this.OUTPUT_BADGES_DIR, ''),
      )
      tplData.badgeData = badge2BadgeData(
        objectSwitchLocale(
          readAndValidateJsonFile(
            path.join(this.env.VITE_BADGES_DIR_PATH, badgeDir, `${badgeName}.json`),
            badgeSchema,
          ),
          locale,
        ),
        Number.parseInt(this.env.VITE_EXAMPLES_FOLD_THRESHOLD),
      )
    }

    const markdown = artTemplate.render(
      readTpl(isReadme ? './tpl/readme.md' : './tpl/badge.md'),
      tplData,
      this.ART_TEMPLATE_OPTIONS,
    )

    if (mode === 'markdown') {
      return formatMarkdown(markdown)
    }

    return artTemplate.render(readTpl('./tpl/markdown.html'), {
      title: name,
      markdownHtml: markdown2Html(markdown),
      githubMarkdownCssHref: getNodeModulesUrl('github-markdown-css/github-markdown.css'),
      lazysizesScriptSrc: getNodeModulesUrl('lazysizes'),
      lsParentFitScriptSrc: getNodeModulesUrl('lazysizes/plugins/parent-fit/ls.parent-fit'),
    } as MarkdownTpl)
  }

  public generateReadmeHtml(url: string): string {
    const locale = this.getLocale(url)
    return this.createReadmeHtml(url, this.getTocs(locale), 'html')
  }

  public buildAllReadmeHtml(): void {
    const readme: Readme = this.getReadmeJson()

    for (const locale of Object.keys(readme.locale.langNameMap)) {
      this.logger.log(`Generating '${locale}' README.md...`)

      const tocs: TocTpl[] = this.getTocs(locale)

      const readmePath = this.localeToFileName(locale)
      const readmeHtml = this.createReadmeHtml(readmePath, tocs, 'markdown')
      fs.writeFileSync(readmePath, readmeHtml)
      this.logger.log(`Generated ${readmePath}`)

      for (const toc of tocs) {
        if (toc.type !== 'badge') {
          continue
        }

        const { name, dir } = path.parse(toc.path)

        const readmePath = path.join(
          changeParentPath(dir, this.env.VITE_BADGES_DIR_PATH, this.OUTPUT_BADGES_DIR),
          name,
          this.localeToFileName(locale),
        )

        const badgeHtml = this.createReadmeHtml(readmePath, tocs, 'markdown')
        fs.mkdirSync(path.dirname(readmePath), { recursive: true })
        fs.writeFileSync(readmePath, badgeHtml)
        this.logger.log(`Generated ${readmePath}`)
      }
    }
  }
}