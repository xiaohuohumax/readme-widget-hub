import type { Config } from 'ts-json-schema-generator'
import path from 'node:path'
import fs from 'fs-extra'
import { createGenerator } from 'ts-json-schema-generator'

interface SchemaBuildConfig extends Config {
  outputPath: string
}

const buildConfigs: SchemaBuildConfig[] = [
  {
    path: path.join(__dirname, '../build/schema.ts'),
    type: 'Badge',
    outputPath: '.vscode/schema/badge.schema.json',
  },
  {
    path: path.join(__dirname, '../build/schema.ts'),
    type: 'Collection',
    outputPath: '.vscode/schema/collection.schema.json',
  },
  {
    path: path.join(__dirname, '../spider/schema.ts'),
    type: 'SpiderConfig',
    outputPath: '.vscode/schema/spider.schema.json',
  },
]

fs.removeSync('.vscode/schema')

for (const config of buildConfigs) {
  fs.mkdirSync(path.dirname(config.outputPath), { recursive: true })
  const schema = createGenerator(config).createSchema(config.type)
  fs.writeJSONSync(config.outputPath, schema, { spaces: 2 })
  console.log(`Generating schema for ${config.type} => ${config.outputPath}`)
}