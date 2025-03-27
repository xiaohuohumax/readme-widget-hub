export type Overwrite<T, U> = Omit<T, keyof U> & U

export function ensureArray<T>(value?: T | T[]): T[] {
  if (value === undefined) {
    return []
  }
  return Array.isArray(value) ? value : [value]
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

export function deepCopy<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item)) as T
  }

  const result: any = {}
  for (const [key, value] of Object.entries(obj)) {
    result[key] = deepCopy(value)
  }
  return result
}
