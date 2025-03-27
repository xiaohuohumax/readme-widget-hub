import path from 'node:path'

export function path2Url(p: string): string {
  return path.normalize(p).replaceAll('\\', '/')
}

export function replaceParentPath(original: string, op: string, np: string): string {
  const normOriginal = path.normalize(original)
  const normOp = path.normalize(op)
  const normNp = path.normalize(np)
  if (normOriginal.startsWith(normOp)) {
    return normNp + normOriginal.slice(normOp.length)
  }
  return original
}
