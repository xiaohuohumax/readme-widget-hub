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

export function validateJSONData<T>(data: unknown, schema: JSONSchema): T {
  const validate = ajv.compile(schema)
  if (!validate(data)) {
    const error = validate.errors![0]
    throw new Error(`${error.instancePath} ${error.message}`)
  }
  return data as T
}

export function readAndValidateJSONFile<T>(filePath: string, schema: JSONSchema): T {
  const json = fs.readJSONSync(filePath)
  try {
    return validateJSONData<T>(json, schema)
  }
  catch (error) {
    throw new Error(`Invalid JSON file: ${filePath} ${error.message}`)
  }
}