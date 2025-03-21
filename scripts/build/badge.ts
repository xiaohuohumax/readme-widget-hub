import type { Alert, Badge, Example, Explain, Rule, RuleItem } from '../schema/badge.schema.js'
import type { Collection } from '../schema/collection.schema.js'
import type { Readme } from '../schema/readme.schema.js'
import path from 'node:path'
import { Ajv } from 'ajv'
import ArtTemplate from 'art-template'
import fs from 'fs-extra'
import badgeSchema from '../../.vscode/schema/badge.schema.json'
import collectionSchema from '../../.vscode/schema/collection.schema.json'
import readmeSchema from '../../.vscode/schema/readme.schema.json'
import { generateToc } from '../../src/markdown.js'

const BADGE_INDEX_DEFAULT = 9999
const ajv = new Ajv()

export interface Logger {
  log: (msg: string) => void
  warn: (msg: string) => void
  error: (msg: string) => void
}

export interface BadgeBuilderOptions {
  guideBadgeStyle?: string
  tagBadgeStyle?: string
  badgeDirPath: string
  collectionFileName: string
  tplPath: string
  tplBadgeHeadingLevel: number
  examplesFoldThreshold: number
  openParamsDetails: string
  openExamplesDetails: string
  readmeJsonPath: string
  localeDirPath: string
  logger: Logger
}

interface RenderAlert extends Alert {
  messages: string[]
}

interface RenderRule extends Rule {
  params: RuleItem[]
  querys: RuleItem[]
  alt: string
}

interface RenderExplain extends Explain {
  alt: string
}

interface RenderExample extends Example {
  explain: RenderExplain
}

interface RenderBadge extends Badge {
  type: 'badge'
  alert?: RenderAlert
  rules: RenderRule[]
  examples: RenderExample[]
  foldedExamples: RenderExample[]
  index: number
  level: number
}

interface RenderCollection extends Collection {
  type: 'collection'
  index: number
  level: number
}

type RenderItem = RenderBadge | RenderCollection

function ensureArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}

export interface LocaleReadme {
  locale: string
  localeName: string
  readmeMarkdown: string
}

export class BadgeReadmeBuilder {
  private readme: Readme = null!
  constructor(private options: BadgeBuilderOptions) {
    this.initReadme()
  }

  private initReadme(): void {
    this.readme = this.readAndValidateJson<Readme>(this.options.readmeJsonPath, readmeSchema, true)!
  }

  private collection2RenderCollection(collection: Collection, level: number, index: number, locale: string): RenderCollection {
    collection = this.ObjectSwitchLocale(collection, locale)
    return {
      ...collection,
      type: 'collection',
      level,
      index,
    }
  }

  private readAndValidateJson<T>(jsonPath: string, schema: any, throwError: boolean = false): T | undefined {
    const json = fs.readJSONSync(jsonPath, { throws: false })

    let errorMessage: string | undefined
    try {
      const validate = ajv.compile(schema)
      const valid = validate(json)
      if (!valid) {
        const error = validate.errors![0]
        errorMessage = `skipped "${jsonPath}": ${error.message}`
      }
    }
    catch (error) {
      errorMessage = `skipped "${jsonPath}": ${(error as Error).message}`
    }
    if (throwError && errorMessage) {
      throw new Error(errorMessage)
    }

    return json as T
  }

  private ObjectSwitchLocale<T>(badgeItem: T, locale: string): T {
    if (locale === 'zh-CN' || locale === '') {
      return badgeItem
    }
    if (typeof badgeItem !== 'object' || badgeItem === null) {
      return badgeItem
    }

    if (Array.isArray(badgeItem)) {
      return badgeItem.map(item => this.ObjectSwitchLocale(item, locale)) as T
    }

    for (const key in badgeItem) {
      const value = badgeItem[key]
      const splitKey = key.split(':', 2)
      if (splitKey.length === 2) {
        if (splitKey[1] === locale) {
          badgeItem[splitKey[0] as keyof T] = value
        }
      }
      else {
        badgeItem[key] = this.ObjectSwitchLocale(value, locale)
      }
    }
    return badgeItem
  }

  private badge2RenderBadge(badge: Badge, level: number, index: number, locale: string): RenderBadge {
    badge = this.ObjectSwitchLocale(badge, locale)

    const examples: RenderExample[] = badge.examples.map(example => ({
      ...example,
      explain: {
        ...example.explain,
        alt: example.explain.alt || 'Alt',
      },
    }))
    const foldedExamples = examples.splice(this.options.examplesFoldThreshold)
    const rules = ensureArray(badge.rules).map(rule => ({
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
      type: 'badge',
      level,
      index,
    }
  }

  public loopReadBadgesDir(dirPath: string, locale: string, deepLevel: number = 1): RenderItem[] {
    const items: RenderItem[] = []
    const files = fs.readdirSync(dirPath, { withFileTypes: true })
    const level = this.options.tplBadgeHeadingLevel + deepLevel

    if (level > 6) {
      this.options.logger.warn(`skipped "${dirPath}": heading level is too deep.`)
      return items
    }

    function getPushIndex(sortIndex: number): number {
      if (items.length === 0) {
        return 0
      }
      for (let index = 0; index < items.length; index++) {
        if (items[index].index > sortIndex) {
          return index
        }
      }
      return items.length
    }

    for (const file of files) {
      const filePath = path.join(file.parentPath, file.name)

      if (file.isDirectory()) {
        const collection = this.readAndValidateJson<Collection>(
          path.join(filePath, this.options.collectionFileName),
          collectionSchema,
        )
        if (!collection) {
          continue
        }

        if (collection.enabled === false) {
          this.options.logger.warn(`skipped "${filePath}": disabled.`)
          continue
        }

        const index = collection.index || BADGE_INDEX_DEFAULT
        const renderCollection = this.collection2RenderCollection(collection, level, index, locale)
        const pushIndex = getPushIndex(index)

        items.splice(pushIndex, 0, renderCollection)

        const subItems = this.loopReadBadgesDir(filePath, locale, deepLevel + 1)
        items.splice(pushIndex + 1, 0, ...subItems.map((item) => {
          item.index = index
          return item
        }))

        this.options.logger.log(`added "${filePath}".`)
      }
      else if (file.name !== this.options.collectionFileName) {
        const badge = this.readAndValidateJson<Badge>(filePath, badgeSchema)
        if (!badge) {
          continue
        }

        if (badge.enabled === false) {
          this.options.logger.warn(`skipped "${filePath}": disabled.`)
          continue
        }

        const index = badge.index || BADGE_INDEX_DEFAULT
        const renderBadge = this.badge2RenderBadge(badge, level, index, locale)

        const pushIndex = getPushIndex(index)
        items.splice(pushIndex, 0, renderBadge)
        this.options.logger.log(`added "${filePath}".`)
      }
    }

    return items
  }

  public getReadmePath(locale: string): string {
    if (locale === '' || locale === 'zh-CN') {
      return 'README.md'
    }
    return path
      .join(this.options.localeDirPath, `README${locale === '' ? '' : `-${locale}`}.md`)
      .replace(/\\/g, '/')
  }

  public renderBadgeItems2Readme(items: RenderItem[], locale: string): string {
    const readmeTpl = fs.readFileSync(this.options.tplPath, 'utf-8')
    const readme = this.ObjectSwitchLocale(this.readme, locale)
    const locales = Object.entries(readme.locale.langNameMap)
      .map(([locale, name]) => ({
        locale,
        localeSrc: `/${this.getReadmePath(locale)}`,
        name,
      }))
    const DO_NOT_EDIT = `<!-- ${readme.warningInfo} -->\n\n`
    const readmeMarkdown = DO_NOT_EDIT + ArtTemplate.render(readmeTpl, {
      locales,
      readme,
      renderItems: items,
      badgeLength: items.filter(item => item.type === 'badge').length,
      guideBadgeStyle: this.options.guideBadgeStyle || 'for-the-badge',
      tagBadgeStyle: this.options.tagBadgeStyle || 'flat',
      openParamsDetails: this.options.openParamsDetails,
      openExamplesDetails: this.options.openExamplesDetails,
    })
    return generateToc(readmeMarkdown, readme.tocTitle)
  }

  public generateReadme(locale: string = ''): string {
    return this.renderBadgeItems2Readme(
      this.loopReadBadgesDir(this.options.badgeDirPath, locale),
      locale,
    )
  }

  public generateReadmeAllLocales(): LocaleReadme[] {
    return Object.entries(this.readme.locale.langNameMap)
      .map(([locale, name]) => ({
        locale,
        localeName: name as string,
        readmeMarkdown: this.generateReadme(locale),
      }))
  }

  public generateReadmeAllLocaleMap(): Record<string, string> {
    this.initReadme()
    const localeReadmes = this.generateReadmeAllLocales()
    return localeReadmes.reduce((map, { locale, readmeMarkdown }) => {
      map[locale] = readmeMarkdown
      return map
    }, {} as Record<string, string>)
  }
}