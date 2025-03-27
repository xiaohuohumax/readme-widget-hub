import path from 'node:path'
import { saveBadgeJSONSchema, saveCollectionJSONSchema } from './src'

const schemaDir = path.join(__dirname, 'schema')
saveBadgeJSONSchema(path.join(schemaDir, 'badge.schema.json'))
saveCollectionJSONSchema(path.join(schemaDir, 'collection.schema.json'))