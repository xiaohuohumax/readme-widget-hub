import type { JSONSchema } from 'json-schema-to-ts'
import Ajv from 'ajv'
import fs from 'fs-extra'

const ajv = new Ajv()

type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
}

type ExtractBoolean<T> = T extends boolean ? never : T
type Schema = Mutable<ExtractBoolean<JSONSchema> & { $id: string }>

export function generateJSONSchema(rootSchema: Schema, definitions: Schema[]): JSONSchema {
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

export function readAndValidateJSONFile<T>(filePath: string, schema: JSONSchema): T {
  const json = fs.readJSONSync(filePath)
  const validate = ajv.compile(schema)
  const valid = validate(json)
  if (!valid) {
    const error = validate.errors![0]
    throw new Error(`Invalid JSON file: ${filePath} - ${error.message}`)
  }
  return json as T
}