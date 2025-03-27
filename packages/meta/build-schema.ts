import path from 'node:path'
import { saveMetaJSONSchema } from './src'

const schemaDir = path.join(__dirname, 'schema')
saveMetaJSONSchema(path.join(schemaDir, 'meta.schema.json'))