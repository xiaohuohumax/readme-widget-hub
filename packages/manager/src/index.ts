import type { Badge, BadgeTree } from '@readme-widget-hub/badge'
import type { Locale, Meta } from '@readme-widget-hub/meta'
import path from 'node:path'
import { flatBadgeTrees, readBadge, readBadgeTrees } from '@readme-widget-hub/badge'
import { objectHasLocale, readLocale, readMeta } from '@readme-widget-hub/meta'
import { deepCopy, objectSwitchLocale } from '@readme-widget-hub/utils'

export interface ManagerOptions {
  defaultLocaleCode: string
  absBadgesDir: string
  absMetaFilePath: string
}

export class Manager {
  private defaultMeta: Meta = null!
  private defaultBadgeTrees: BadgeTree[] = null!
  private defaultFlatBadges: BadgeTree[] = null!
  public defaultLocale: Locale = null!
  public badgeCount: number = null!

  constructor(private options: ManagerOptions) {
    this.init()
  }

  init(): void {
    this.defaultBadgeTrees = readBadgeTrees(this.options.absBadgesDir)
    this.defaultFlatBadges = flatBadgeTrees(this.defaultBadgeTrees)
    this.defaultLocale = readLocale(this.options.absMetaFilePath, this.options.defaultLocaleCode)
    this.defaultMeta = readMeta(this.options.absMetaFilePath)
    this.badgeCount = this.defaultFlatBadges.filter(badge => badge.type === 'badge').length
  }

  locale2FileName(locale: Locale): string {
    return locale.code === this.defaultLocale.code
      ? 'README.md'
      : `README_${locale.code}.md`
  }

  objectHasLocales(obj: any): Locale[] {
    return this.getLocales()
      .filter(l => objectHasLocale(obj, l))
      .concat(this.defaultLocale)
  }

  hasLocale(obj: any, locale: Locale): boolean {
    return objectHasLocale(obj, locale)
      || this.defaultLocale.code === locale.code
  }

  url2Locale(url: string): Locale {
    const fileName = path.parse(url).base
    const match = fileName.match(/^README_(.+)\.md$/)
    return match
      ? readLocale(this.options.absMetaFilePath, match[1])
      : this.defaultLocale
  }

  getMeta(locale?: Locale): Meta {
    if (locale === undefined) {
      locale = this.defaultLocale
    }
    return objectSwitchLocale(deepCopy(this.defaultMeta), locale.code)
  }

  getBadge(filePath: string, locale: Locale): Badge {
    return objectSwitchLocale(readBadge(filePath), locale.code)
  }

  getLocales(): Locale[] {
    return this.defaultMeta.locales
  }

  getBadgeTrees(locale?: Locale): BadgeTree[] {
    if (locale === undefined) {
      locale = this.defaultLocale
    }
    const defaultBadgeTrees = deepCopy(this.defaultBadgeTrees)
    return objectSwitchLocale(defaultBadgeTrees, locale.code)
  }

  getFlatBadges(locale?: Locale): BadgeTree[] {
    if (locale === undefined) {
      locale = this.defaultLocale
    }
    const flatBadges = deepCopy(this.defaultFlatBadges)
    return objectSwitchLocale(flatBadges, locale.code)
  }

  isDefaultLocale(locale: Locale): boolean {
    return locale.code === this.defaultLocale.code
  }
}