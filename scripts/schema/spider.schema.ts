import type { FromSchema, JSONSchema } from 'json-schema-to-ts'

export const spiderSchema = {
  $id: 'spider',
  type: 'object',
  properties: {
    outDir: {
      type: 'string',
      description: 'Output directory.',
    },
    languages: {
      type: 'array',
      description: 'Languages to crawl.',
      items: {
        type: 'string',
      },
    },
    languageReposCount: {
      type: 'integer',
      description: 'Number of repositories to crawl for each language type.',
    },
    repos: {
      type: 'array',
      description: 'Repositories to crawl.',
      items: {
        type: 'string',
      },
    },
    imagePatterns: {
      type: 'array',
      description: 'Image link patterns to match, refer to: https://www.npmjs.com/package/minimatch.',
      items: {
        type: 'string',
      },
    },
  },
  additionalProperties: false,
  required: [
    'outDir',
    'languages',
    'languageReposCount',
    'repos',
    'imagePatterns',
  ],
} as const satisfies JSONSchema

export type Spider = FromSchema<typeof spiderSchema>