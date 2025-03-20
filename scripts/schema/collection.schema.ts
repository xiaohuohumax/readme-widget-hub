import type { FromSchema, JSONSchema } from 'json-schema-to-ts'

export const collectionSchema = {
  $id: 'collection',
  type: 'object',
  patternProperties: {
    '^title:.*$': {
      type: 'string',
      description: 'Collection title (locale).',
    },
    '^description:.*$': {
      type: 'string',
      description: 'Collection description (locale).',
    },
  },
  properties: {
    enabled: {
      type: 'boolean',
      description: 'Whether the collection is enabled.',
      default: true,
    },
    index: {
      type: 'number',
      description: 'Collection order index, smaller is earlier, default is `9999`.',
      default: 9999,
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

export type Collection = FromSchema<typeof collectionSchema>