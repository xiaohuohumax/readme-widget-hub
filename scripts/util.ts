import path from 'node:path'
import { Ajv } from 'ajv'
import fs from 'fs-extra'
import resolve from 'resolve'

const ajv = new Ajv()

export function getNodeModulesUrl(id: string): string {
  return path.sep + path.relative('', resolve.sync(id))
}

export function objectSwitchLocale<T>(obj: T, locale: string): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(item => objectSwitchLocale(item, locale)) as T
  }

  for (const [key, value] of Object.entries(obj)) {
    const splitKey = key.split(':', 2)
    if (splitKey.length === 2) {
      if (splitKey[1] === locale) {
        obj[splitKey[0] as keyof T] = value
      }
    }
    else {
      obj[key as keyof T] = objectSwitchLocale(value, locale)
    }
  }

  return obj
}

export function changeParentPath(originalPath: string, oldParent: string, newParent: string): string {
  originalPath = path.normalize(originalPath)
  oldParent = path.normalize(oldParent)
  newParent = path.normalize(newParent)
  return originalPath.replace(oldParent, newParent)
}

export function removeLeadingSlash(str: string): string {
  return path.normalize(str)
    .replace(/^[\\/]+/, '')
}

export function ensureArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}

export function readAndValidateJsonFile<T>(jsonPath: string, schema: any): T {
  const json = fs.readJSONSync(jsonPath, { throws: false })
  const validate = ajv.compile(schema)
  const valid = validate(json)
  if (!valid) {
    const error = validate.errors![0]
    throw new Error(`invalid "${jsonPath}": ${error.message}`)
  }
  return json as T
}

export function path2url(filePath: string): string {
  return path.normalize(filePath).replaceAll(path.sep, '/')
}