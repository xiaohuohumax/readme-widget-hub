import type { Badge } from './badge-schema'
import type { Collection } from './collection-schema'
import path from 'node:path'
import { readAndValidateJSONFile } from '@readme-widget-hub/utils'
import fs from 'fs-extra'
import { badgeRootSchema } from './badge-schema'
import { collectionRootSchema } from './collection-schema'

export * from './badge-schema'
export * from './collection-schema'

export const defaultIndex: number = 9999
export const collectionFileName: string = 'collection.json'

export interface BadgeNode extends Badge {
  type: 'badge'
  level: number
  path: string
}

export interface CollectionNode extends Collection {
  type: 'collection'
  level: number
  items: BadgeTree[]
}

export type BadgeTree = BadgeNode | CollectionNode

export function readBadgeTrees(dir: string, level: number = 1): BadgeTree[] {
  let nodes: BadgeTree[] = []

  for (const file of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, file.name)

    if (file.name === collectionFileName) {
      continue
    }

    if (file.isFile()) {
      const badge = readBadge(filePath)
      if (badge === undefined || badge.enabled === false) {
        continue
      }
      nodes.push({ ...badge, type: 'badge', level, path: filePath })
    }
    else if (file.isDirectory()) {
      nodes.push(...readBadgeTrees(filePath, level + 1))
    }
  }

  nodes = nodes.sort((a, b) => (a.index || defaultIndex) - (b.index || defaultIndex))

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

export function flatBadgeTrees(tree: BadgeTree[]): BadgeTree[] {
  const nodes: BadgeTree[] = []
  for (const node of tree) {
    nodes.push(node)
    if (node.type === 'collection') {
      nodes.push(...flatBadgeTrees(node.items))
    }
  }
  return nodes
}

export function readBadge(filePath: string): Badge {
  return readAndValidateJSONFile<Badge>(filePath, badgeRootSchema)
}

export function readCollection(filePath: string): Collection {
  return readAndValidateJSONFile<Badge>(filePath, collectionRootSchema)
}