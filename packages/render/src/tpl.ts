import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ArtTemplate from 'art-template'

export const RENDER_TEMPLATE_DIR: string = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../templates',
)

export function renderTpl(templateFilePath: string, data: any): string {
  return ArtTemplate.render(fs.readFileSync(path.join(RENDER_TEMPLATE_DIR, templateFilePath), 'utf-8'), data, {
    root: RENDER_TEMPLATE_DIR,
    debug: true,
  })
}
