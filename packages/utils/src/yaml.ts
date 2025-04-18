import type { JSONSchema } from 'json-schema-to-ts'
import fs from 'fs-extra'
import yaml from 'js-yaml'
import { validateJSONData } from './json'

export function readAndValidateYamlFile<T>(filePath: string, schema: JSONSchema): T {
  const json = yaml.load(fs.readFileSync(filePath, 'utf8'))
  try {
    return validateJSONData<T>(json, schema)
  }
  catch (error) {
    throw new Error(`Invalid YAML file: ${filePath} ${error.message}`)
  }
}