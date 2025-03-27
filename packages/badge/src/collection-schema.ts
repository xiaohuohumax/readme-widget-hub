import type { FromSchema, JSONSchema } from 'json-schema-to-ts'
import path from 'node:path'
import { generateJSONSchema } from '@badge-collection/utils'
import fs from 'fs-extra'

const collectionSchema = {
  $id: 'collection',
  type: 'object',
  patternProperties: {
    '^index:.+$': {
      type: 'number',
      description: 'Collection order index, smaller is earlier.',
    },
    '^title:.+$': {
      type: 'string',
      description: 'Collection title.',
    },
    '^description:.+$': {
      type: 'string',
      description: 'Collection description.',
    },
  },
  properties: {
    enabled: {
      type: 'boolean',
      description: 'Whether the collection is enabled.',
    },
    index: {
      type: 'number',
      description: 'Collection order index, smaller is earlier.',
    },
    title: {
      type: 'string',
      description: 'Collection title.',
    },
    description: {
      type: 'string',
      description: 'Collection description.',
    },
  },
  additionalProperties: false,
  required: [
    'title',
  ],
} as const satisfies JSONSchema

export type Collection = FromSchema<typeof collectionSchema, { references: [] }>

export const collectionRootSchema = generateJSONSchema(collectionSchema, [])

export function saveCollectionJSONSchema(filePath: string): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeJsonSync(filePath, collectionRootSchema, { spaces: 2 })
}