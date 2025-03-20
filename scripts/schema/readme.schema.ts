import type { FromSchema, JSONSchema } from 'json-schema-to-ts'

export const paramsTableSchema = {
  $id: 'paramsTable',
  type: 'object',
  patternProperties: {
    '^name:.*$': {
      type: 'string',
      description: 'Name (locale).',
    },
    '^type:.*$': {
      type: 'string',
      description: 'Type (locale).',
    },
    '^default:.*$': {
      type: 'string',
      description: 'Default (locale).',
    },
    '^description:.*$': {
      type: 'string',
      description: 'Description (locale).',
    },
    '^extDescription:.*$': {
      type: 'string',
      description: 'Extended description (locale).',
    },
    '^pathParams:.*$': {
      type: 'string',
      description: 'Path parameters (locale).',
    },
    '^queryParams:.*$': {
      type: 'string',
      description: 'Query parameters (locale).',
    },
  },
  properties: {
    name: {
      type: 'string',
      description: 'Name.',
    },
    type: {
      type: 'string',
      description: 'Type.',
    },
    default: {
      type: 'string',
      description: 'Default.',
    },
    description: {
      type: 'string',
      description: 'Description.',
    },
    extDescription: {
      type: 'string',
      description: 'Extended description.',
    },
    pathParams: {
      type: 'string',
      description: 'Path parameters.',
    },
    queryParams: {
      type: 'string',
      description: 'Query parameters.',
    },
  },
  additionalProperties: false,
  required: [
    'name',
    'type',
    'default',
    'description',
    'extDescription',
    'pathParams',
    'queryParams',
  ],
} as const satisfies JSONSchema

export type Params = FromSchema<typeof paramsTableSchema>

export const layoutSchema = {
  $id: 'layout',
  type: 'object',
  patternProperties: {
    '^badgeIntroduction:.*$': {
      type: 'string',
      description: 'Badge introduction (locale).',
    },
    '^badgeParams:.*$': {
      type: 'string',
      description: 'Badge parameters (locale).',
    },
    '^toggleBadgeParams:.*$': {
      type: 'string',
      description: 'Toggle badge parameters (locale).',
    },
    '^usesExamples:.*$': {
      type: 'string',
      description: 'Uses examples (locale).',
    },
    '^toggleUsesExamples:.*$': {
      type: 'string',
      description: 'Toggle uses examples (locale).',
    },
    '^backToTop:.*$': {
      type: 'string',
      description: 'Back to top (locale).',
    },
    '^repoUrl:.*$': {
      type: 'string',
      description: 'Repository URL (locale).',
    },
    '^onlineToolUrl:.*$': {
      type: 'string',
      description: 'Online tool URL (locale).',
    },
    '^officialDocsUrl:.*$': {
      type: 'string',
      description: 'Official documentation URL (locale).',
    },
    '^needLogin:.*$': {
      type: 'string',
      description: 'Need login (locale).',
    },
  },
  properties: {
    badgeIntroduction: {
      type: 'string',
      description: 'Badge introduction.',
    },
    badgeParams: {
      type: 'string',
      description: 'Badge parameters.',
    },
    toggleBadgeParams: {
      type: 'string',
      description: 'Toggle badge parameters.',
    },
    paramsTable: {
      $ref: '#/definitions/paramsTable',
      description: 'Toggle badge parameters.',
    },
    usesExamples: {
      type: 'string',
      description: 'Uses examples.',
    },
    toggleUsesExamples: {
      type: 'string',
      description: 'Toggle uses examples.',
    },
    backToTop: {
      type: 'string',
      description: 'Back to top.',
    },
    repoUrl: {
      type: 'string',
      description: 'Repository URL.',
    },
    onlineToolUrl: {
      type: 'string',
      description: 'Online tool URL.',
    },
    officialDocsUrl: {
      type: 'string',
      description: 'Official documentation URL.',
    },
    needLogin: {
      type: 'string',
      description: 'Need login.',
    },
  },
  definitions: {
    paramsTable: paramsTableSchema,
  },
  additionalProperties: false,
  required: [
    'badgeIntroduction',
    'badgeParams',
    'toggleBadgeParams',
    'paramsTable',
    'usesExamples',
    'toggleUsesExamples',
    'backToTop',
    'repoUrl',
    'onlineToolUrl',
    'officialDocsUrl',
    'needLogin',
  ],
} as const satisfies JSONSchema

export type Layout = FromSchema<typeof layoutSchema, {
  references: [typeof paramsTableSchema]
}>

export const localeSchema = {
  $id: 'locale',
  type: 'object',
  properties: {
    langNameMap: {
      type: 'object',
      description: 'The language name map.',
      additionalProperties: {
        type: 'string',
      },
    },
  },
  required: [
    'langNameMap',
  ],
  additionalProperties: false,
} as const satisfies JSONSchema

export type Locale = FromSchema<typeof localeSchema>

export const howToRunProjectSchema = {
  $id: 'howToRunProject',
  type: 'object',
  patternProperties: {
    '^title:.*$': {
      type: 'string',
      description: 'Title (locale).',
    },
    '^commands:.*$': {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Commands (locale).',
    },
  },
  properties: {
    title: {
      type: 'string',
      description: 'Title.',
    },
    commands: {
      type: 'array',
      description: 'Commands.',
      items: {
        type: 'string',
      },
    },
  },
  required: [
    'title',
    'commands',
  ],
  additionalProperties: false,
} as const satisfies JSONSchema

export type HowToRun = FromSchema<typeof howToRunProjectSchema>

export const howToAddBadgeSchema = {
  $id: 'howToAddBadge',
  type: 'object',
  patternProperties: {
    '^title:.*$': {
      type: 'string',
      description: 'Title (locale).',
    },
    '^warning:.*$': {
      type: 'string',
      description: 'Warning message (locale).',
    },
    '^steps:.*$': {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Steps (locale).',
    },
  },
  properties: {
    title: {
      type: 'string',
      description: 'Title.',
    },
    warning: {
      type: 'string',
      description: 'Warning message.',
    },
    steps: {
      type: 'array',
      description: 'Steps.',
      items: {
        type: 'string',
      },
    },
  },
  required: [
    'title',
    'warning',
    'steps',
  ],
  additionalProperties: false,
} as const satisfies JSONSchema

export type HowToContribute = FromSchema<typeof howToAddBadgeSchema>

export const howToAddLocaleSchema = {
  $id: 'howToAddLocale',
  type: 'object',
  patternProperties: {
    '^title:.*$': {
      type: 'string',
      description: 'Title (locale).',
    },
    '^steps:.*$': {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Steps (locale).',
    },
  },
  properties: {
    title: {
      type: 'string',
      description: 'Title.',
    },
    steps: {
      type: 'array',
      description: 'Steps.',
      items: {
        type: 'string',
      },
    },
  },
  required: [
    'title',
    'steps',
  ],
  additionalProperties: false,
} as const satisfies JSONSchema

export type HowToAddLocale = FromSchema<typeof howToAddLocaleSchema>

export const readmeSchema = {
  $id: 'readme',
  type: 'object',
  patternProperties: {
    '^warningInfo:.*$': {
      type: 'string',
      description: 'Warning information (locale).',
    },
    '^localeBuildingMessage:.*$': {
      type: 'string',
      description: 'Warning information (locale).',
    },
    '^headerTitle:.*$': {
      type: 'string',
      description: 'Header title (locale).',
    },
    '^tocTitle:.*$': {
      type: 'string',
      description: 'TOC title (locale).',
    },
    '^badgeCollectionTitle:.*$': {
      type: 'string',
      description: 'Badge collection title (locale).',
    },
    '^thanksContributorsTitle:.*$': {
      type: 'string',
      description: 'Thanks contributors title (locale).',
    },
  },
  properties: {
    warningInfo: {
      type: 'string',
      description: 'Warning information.',
    },
    localeBuildingMessage: {
      type: 'string',
      description: 'Locale building message.',
    },
    headerTitle: {
      type: 'string',
      description: 'Header title.',
    },
    tocTitle: {
      type: 'string',
      description: 'TOC title.',
    },
    badgeCollectionTitle: {
      type: 'string',
      description: 'Badge collection title.',
    },
    howToRunProject: {
      $ref: '#/definitions/howToRunProject',
      description: 'How to run the project.',
    },
    howToAddBadge: {
      $ref: '#/definitions/howToAddBadge',
      description: 'How to contribute to the project.',
    },
    howToAddLocale: {
      $ref: '#/definitions/howToAddLocale',
      description: 'How to add a new locale.',
    },
    thanksContributorsTitle: {
      type: 'string',
      description: 'Thanks contributors title.',
    },
    layout: {
      $ref: '#/definitions/layout',
      description: 'The layout of the readme.',
    },
    locale: {
      $ref: '#/definitions/locale',
      description: 'The locale of the readme.',
    },
  },
  definitions: {
    paramsTable: paramsTableSchema,
    layout: layoutSchema,
    locale: localeSchema,
    howToRunProject: howToRunProjectSchema,
    howToAddBadge: howToAddBadgeSchema,
    howToAddLocale: howToAddLocaleSchema,
  },
  required: [
    'warningInfo',
    'headerTitle',
    'tocTitle',
    'badgeCollectionTitle',
    'howToRunProject',
    'howToAddBadge',
    'howToAddLocale',
    'thanksContributorsTitle',
    'layout',
    'locale',
  ],
  additionalProperties: false,
} as const satisfies JSONSchema

export type Readme = FromSchema<typeof readmeSchema, {
  references: [typeof paramsTableSchema, typeof howToRunProjectSchema, typeof howToAddBadgeSchema, typeof layoutSchema, typeof localeSchema]
}>
