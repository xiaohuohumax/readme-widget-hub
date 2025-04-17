import type { Locale, Meta } from '@readme-widget-hub/meta'
import type { Widget, WidgetTree } from '@readme-widget-hub/widget'
import path from 'node:path'
import { objectHasLocale, readLocale, readMeta } from '@readme-widget-hub/meta'
import { deepCopy, objectSwitchLocale } from '@readme-widget-hub/utils'
import { flatWidgetTrees, readWidget, readWidgetTrees } from '@readme-widget-hub/widget'

export interface ManagerOptions {
  defaultLocaleCode: string
  absWidgetsDir: string
  absMetaFilePath: string
}

export class Manager {
  private defaultMeta: Meta = null!
  private defaultWidgetTrees: WidgetTree[] = null!
  private defaultFlatWidgets: WidgetTree[] = null!
  public defaultLocale: Locale = null!
  public widgetCount: number = null!

  constructor(private options: ManagerOptions) {
    this.init()
  }

  init(): void {
    this.defaultWidgetTrees = readWidgetTrees(this.options.absWidgetsDir)
    this.defaultFlatWidgets = flatWidgetTrees(this.defaultWidgetTrees)
    this.defaultLocale = readLocale(this.options.absMetaFilePath, this.options.defaultLocaleCode)
    this.defaultMeta = readMeta(this.options.absMetaFilePath)
    this.widgetCount = this.defaultFlatWidgets.filter(widget => widget.type === 'widget').length
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

  getWidget(filePath: string, locale: Locale): Widget {
    return objectSwitchLocale(readWidget(filePath), locale.code)
  }

  getLocales(): Locale[] {
    return this.defaultMeta.locales
  }

  getWidgetTrees(locale?: Locale): WidgetTree[] {
    if (locale === undefined) {
      locale = this.defaultLocale
    }
    const defaultWidgetTrees = deepCopy(this.defaultWidgetTrees)
    return objectSwitchLocale(defaultWidgetTrees, locale.code)
  }

  getFlatWidgets(locale?: Locale): WidgetTree[] {
    if (locale === undefined) {
      locale = this.defaultLocale
    }
    const flatWidgets = deepCopy(this.defaultFlatWidgets)
    return objectSwitchLocale(flatWidgets, locale.code)
  }

  isDefaultLocale(locale: Locale): boolean {
    return locale.code === this.defaultLocale.code
  }
}