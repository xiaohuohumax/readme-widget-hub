import type { Collection } from './collection-schema'
import type { Widget } from './widget-schema'
import path from 'node:path'
import { readAndValidateJSONFile } from '@readme-widget-hub/utils'
import fs from 'fs-extra'
import { collectionRootSchema } from './collection-schema'
import { widgetRootSchema } from './widget-schema'

export * from './collection-schema'
export * from './widget-schema'

export const defaultIndex: number = 9999
export const collectionFileName: string = 'collection.json'

export interface WidgetNode extends Widget {
  type: 'widget'
  level: number
  path: string
}

export interface CollectionNode extends Collection {
  type: 'collection'
  level: number
  items: WidgetTree[]
}

export type WidgetTree = WidgetNode | CollectionNode

export function readWidgetTrees(dir: string, level: number = 1): WidgetTree[] {
  let nodes: WidgetTree[] = []

  for (const file of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, file.name)

    if (file.name === collectionFileName) {
      continue
    }

    if (file.isFile()) {
      const widget = readWidget(filePath)
      if (widget === undefined || widget.enabled === false) {
        continue
      }
      nodes.push({ ...widget, type: 'widget', level, path: filePath })
    }
    else if (file.isDirectory()) {
      nodes.push(...readWidgetTrees(filePath, level + 1))
    }
  }

  // 先按类型排序(文件夹在前)，再按 index 排序
  nodes = nodes
    .sort((a, b) => a.type === b.type ? 0 : a.type === 'collection' ? -1 : 1)
    .sort((a, b) => (a.index || defaultIndex) - (b.index || defaultIndex))

  const collectionFilePath = path.join(dir, collectionFileName)
  if (fs.pathExistsSync(collectionFilePath)) {
    const collection = readCollection(collectionFilePath)
    if (collection === undefined || collection.enabled === false) {
      return []
    }
    return [{ ...collection, type: 'collection', items: nodes, level: level - 1 }]
  }

  return nodes
}

export function flatWidgetTrees(tree: WidgetTree[]): WidgetTree[] {
  const nodes: WidgetTree[] = []
  for (const node of tree) {
    nodes.push(node)
    if (node.type === 'collection') {
      nodes.push(...flatWidgetTrees(node.items))
    }
  }
  return nodes
}

export function readWidget(filePath: string): Widget {
  return readAndValidateJSONFile<Widget>(filePath, widgetRootSchema)
}

export function readCollection(filePath: string): Collection {
  return readAndValidateJSONFile<Widget>(filePath, collectionRootSchema)
}