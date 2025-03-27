import type { Locale, Meta } from './meta-schema'
import { readAndValidateJSONFile } from '@badge-collection/utils'
import { metaRootSchema } from './meta-schema'

export * from './meta-schema'

export function readMeta(filePath: string): Meta {
  return readAndValidateJSONFile<Meta>(filePath, metaRootSchema)
}

export function readLocale(filePath: string, code: string): Locale {
  const meta = readMeta(filePath)
  const locale = meta.locales.find(l => l.code === code)
  if (!locale) {
    throw new Error(`Locale ${code} not found in meta file ${filePath}`)
  }
  return locale
}

export function objectHasLocale(obj: any, locale: Locale): boolean {
  return new RegExp(`:${locale.code}"`, 'gi').test(JSON.stringify(obj))
}