import path from 'node:path'
import { saveCollectionJSONSchema, saveWidgetJSONSchema } from './src'

const schemaDir = path.join(__dirname, 'schema')
saveWidgetJSONSchema(path.join(schemaDir, 'widget.schema.json'))
saveCollectionJSONSchema(path.join(schemaDir, 'collection.schema.json'))