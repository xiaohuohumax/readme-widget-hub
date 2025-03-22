import type { JSONSchema } from 'json-schema-to-ts'
import fs from 'fs-extra'
import { alertSchema, badgeSchema, exampleSchema, explainSchema, markdownImageSchema, ruleItemSchema, ruleSchema, tagsSchema } from './badge.schema.js'
import { collectionSchema } from './collection.schema.js'
import { howToAddBadgeSchema, howToAddLocaleSchema, howToRunProjectSchema, layoutSchema, localeSchema, paramsTableSchema, readmeSchema } from './readme.schema.js'
import { spiderSchema } from './spider.schema.js'

type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
}

type ExtractBoolean<T> = T extends boolean ? never : T
type Schema = Mutable<ExtractBoolean<JSONSchema> & {
  $id: string
}>

function createJsonSchema(rootSchema: Schema, definitions: Schema[]): JSONSchema {
  return {
    type: 'object',
    $ref: `#/definitions/${rootSchema.$id}`,
    definitions: definitions
      .concat(rootSchema)
      .reduce((acc, cur) => {
        const schema: Mutable<JSONSchema> = Object.assign({}, cur)
        delete schema.$id
        delete schema.definitions
        acc[cur.$id] = schema
        return acc
      }, {} as Record<string, JSONSchema>),
  } as const satisfies JSONSchema
}

const rootBadgeSchema = createJsonSchema(badgeSchema, [
  alertSchema,
  exampleSchema,
  explainSchema,
  markdownImageSchema,
  ruleItemSchema,
  ruleSchema,
  tagsSchema,
])

const rootCollectionSchema = createJsonSchema(collectionSchema, [])
const rootSpiderConfigSchema = createJsonSchema(spiderSchema, [])
const rootReadmeSchema = createJsonSchema(readmeSchema, [
  paramsTableSchema,
  howToAddBadgeSchema,
  howToAddLocaleSchema,
  howToRunProjectSchema,
  layoutSchema,
  localeSchema,
])

fs.writeJSONSync('.vscode/schema/badge.schema.json', rootBadgeSchema, { spaces: 2 })
fs.writeJSONSync('.vscode/schema/collection.schema.json', rootCollectionSchema, { spaces: 2 })
fs.writeJSONSync('.vscode/schema/spider.schema.json', rootSpiderConfigSchema, { spaces: 2 })
fs.writeJSONSync('.vscode/schema/readme.schema.json', rootReadmeSchema, { spaces: 2 })

console.log('Schema generated...')
