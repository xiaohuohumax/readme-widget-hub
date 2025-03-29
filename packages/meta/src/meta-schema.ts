import type { FromSchema, JSONSchema } from 'json-schema-to-ts'
import path from 'node:path'
import { generateJSONSchema } from '@badge-collection/utils'
import fs from 'fs-extra'

export const localeSchema = {
  $id: 'locale',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'Locale name.',
    },
    code: {
      type: 'string',
      description: 'Locale code.',
    },
  },
  additionalProperties: false,
  required: [
    'name',
    'code',
  ],
} as const satisfies JSONSchema

export type Locale = FromSchema<typeof localeSchema, { references: [] }>

export const tagSchema = {
  $id: 'tag',
  type: 'object',
  patternProperties: {
    '^repo:.+$': {
      type: 'string',
      description: 'Repository URL.',
    },
    '^onlineTool:.+$': {
      type: 'string',
      description: 'Online tool URL.',
    },
    '^officialDoc:.+$': {
      type: 'string',
      description: 'Official documentation URL.',
    },
    '^needRegister:.+$': {
      type: 'string',
      description: 'Need register.',
    },
    '^staticBadge:.+$': {
      type: 'string',
      description: 'Static badge.',
    },
  },
  properties: {
    repo: {
      type: 'string',
      description: 'Repository URL.',
    },
    onlineTool: {
      type: 'string',
      description: 'Online tool URL.',
    },
    officialDoc: {
      type: 'string',
      description: 'Official documentation URL.',
    },
    needRegister: {
      type: 'string',
      description: 'Need register.',
    },
    staticBadge: {
      type: 'string',
      description: 'Static badge.',
    },
  },
  additionalProperties: false,
  required: [
    'repo',
    'onlineTool',
    'officialDoc',
    'needRegister',
    'staticBadge',
  ],
} as const satisfies JSONSchema

export type Tag = FromSchema<typeof localeSchema, { references: [] }>

export const paramsTableSchema = {
  $id: 'paramsTable',
  type: 'object',
  patternProperties: {
    '^name:.+$': {
      type: 'string',
      description: 'Name.',
    },
    '^type:.+$': {
      type: 'string',
      description: 'Type.',
    },
    '^required:.+$': {
      type: 'string',
      description: 'Required.',
    },
    '^default:.+$': {
      type: 'string',
      description: 'Default.',
    },
    '^description:.+$': {
      type: 'string',
      description: 'Description.',
    },
    '^moreDescription:.+$': {
      type: 'string',
      description: 'More description.',
    },
    '^paramsTitle:.+$': {
      type: 'string',
      description: 'Parameters title.',
    },
    '^querysTitle:.+$': {
      type: 'string',
      description: 'Query parameters title.',
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
    required: {
      type: 'string',
      description: 'Required.',
    },
    default: {
      type: 'string',
      description: 'Default.',
    },
    description: {
      type: 'string',
      description: 'Description.',
    },
    moreDescription: {
      type: 'string',
      description: 'More description.',
    },
    paramsTitle: {
      type: 'string',
      description: 'Parameters title.',
    },
    querysTitle: {
      type: 'string',
      description: 'Query parameters title.',
    },
  },
  additionalProperties: false,
  required: [
    'name',
    'type',
    'required',
    'default',
    'description',
    'moreDescription',
    'paramsTitle',
    'querysTitle',
  ],
} as const satisfies JSONSchema

export type ParamsTHeader = FromSchema<typeof paramsTableSchema, { references: [] }>

export const badgeLayoutSchema = {
  $id: 'badgeLayout',
  type: 'object',
  patternProperties: {
    '^paramsTitle.+$': {
      type: 'string',
      description: 'Parameters title.',
    },
    '^tocTitle.+$': {
      type: 'string',
      description: 'Table of contents title.',
    },
    '^showOrCloseParams.+$': {
      type: 'string',
      description: 'Show or close parameters.',
    },
    '^exampleTitle.+$': {
      type: 'string',
      description: 'Example title.',
    },
  },
  properties: {
    paramsTitle: {
      type: 'string',
      description: 'Parameters title.',
    },
    tocTitle: {
      type: 'string',
      description: 'Table of contents title.',
    },
    tag: {
      $ref: '#/definitions/tag',
      description: 'Tag metadata.',
    },
    showOrCloseParams: {
      type: 'string',
      description: 'Show or close parameters.',
    },
    paramsTable: {
      $ref: '#/definitions/paramsTable',
      description: 'Parameters table header metadata.',
    },
    exampleTitle: {
      type: 'string',
      description: 'Example title.',
    },
  },
  definitions: {
    tag: tagSchema,
    paramsTable: paramsTableSchema,
  },
  additionalProperties: false,
  required: [
    'paramsTitle',
    'tocTitle',
    'tag',
    'showOrCloseParams',
    'paramsTable',
    'exampleTitle',
  ],
} as const satisfies JSONSchema

export type BadgeLayout = FromSchema<typeof badgeLayoutSchema, {
  references: [typeof tagSchema, typeof paramsTableSchema]
}>

export const how2RunSchema = {
  $id: 'how2Run',
  type: 'object',
  patternProperties: {
    '^title:.+$': {
      type: 'string',
      description: 'How to run title.',
    },
    '^steps:.+$': {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'List of steps.',
    },
  },
  properties: {
    title: {
      type: 'string',
      description: 'How to run title.',
    },
    steps: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'List of steps.',
    },
  },
  additionalProperties: false,
  required: [
    'title',
    'steps',
  ],
} as const satisfies JSONSchema

export type How2Run = FromSchema<typeof how2RunSchema, { references: [] }>

export const how2AddBadgeSchema = {
  $id: 'how2AddBadge',
  type: 'object',
  patternProperties: {
    '^title:.+$': {
      type: 'string',
      description: 'How to add badge title.',
    },
    '^steps:.+$': {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'List of steps.',
    },
  },
  properties: {
    title: {
      type: 'string',
      description: 'How to add badge title.',
    },
    steps: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'List of steps.',
    },
  },
  additionalProperties: false,
  required: [
    'title',
    'steps',
  ],
} as const satisfies JSONSchema

export type How2AddBadge = FromSchema<typeof how2AddBadgeSchema, { references: [] }>

export const how2AddLocaleSchema = {
  $id: 'how2AddLocale',
  type: 'object',
  patternProperties: {
    '^title:.+$': {
      type: 'string',
      description: 'How to add locale title.',
    },
    '^steps:.+$': {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'List of steps.',
    },
  },
  properties: {
    title: {
      type: 'string',
      description: 'How to add locale title.',
    },
    steps: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'List of steps.',
    },
  },
  additionalProperties: false,
  required: [
    'title',
    'steps',
  ],
} as const satisfies JSONSchema

export type How2AddLocale = FromSchema<typeof how2AddLocaleSchema, { references: [] }>

export const finalThanksSchema = {
  $id: 'finalThanks',
  type: 'object',
  patternProperties: {
    '^title:.+$': {
      type: 'string',
      description: 'Final thanks title.',
    },
    '^concludingRemarks:.+$': {
      type: 'string',
      description: 'Concluding remarks.',
    },
  },
  properties: {
    title: {
      type: 'string',
      description: 'Final thanks title.',
    },
    concludingRemarks: {
      type: 'string',
      description: 'Concluding remarks.',
    },
  },
  additionalProperties: false,
  required: [
    'title',
    'concludingRemarks',
  ],
} as const satisfies JSONSchema

export type FinalThanks = FromSchema<typeof finalThanksSchema, { references: [] }>

export const readmeSchema = {
  $id: 'readme',
  type: 'object',
  patternProperties: {
    '^notLocaleWarning.+$': {
      type: 'string',
      description: 'Not locale warning.',
    },
    '^back2Home.+$': {
      type: 'string',
      description: 'Back to home.',
    },
    '^onlinePage.+$': {
      type: 'string',
      description: 'Online page.',
    },
    '^back2Top.+$': {
      type: 'string',
      description: 'Back to top.',
    },
  },
  properties: {
    notLocaleWarning: {
      type: 'string',
      description: 'Not locale warning.',
    },
    back2Home: {
      type: 'string',
      description: 'Back to home.',
    },
    onlinePage: {
      type: 'string',
      description: 'Online page.',
    },
    back2Top: {
      type: 'string',
      description: 'Back to top.',
    },
    badgeLayout: {
      $ref: '#/definitions/badgeLayout',
      description: 'Badge layout metadata.',
    },
    how2Run: {
      $ref: '#/definitions/how2Run',
      description: 'How to run metadata.',
    },
    how2AddBadge: {
      $ref: '#/definitions/how2AddBadge',
      description: 'How to add badge metadata.',
    },
    how2AddLocale: {
      $ref: '#/definitions/how2AddLocale',
      description: 'How to add locale metadata.',
    },
    finalThanks: {
      $ref: '#/definitions/finalThanks',
      description: 'Final thanks metadata.',
    },
  },
  definitions: {
    tag: tagSchema,
    badgeLayout: badgeLayoutSchema,
    paramsTable: paramsTableSchema,
    how2Run: how2RunSchema,
    how2AddBadge: how2AddBadgeSchema,
    how2AddLocale: how2AddLocaleSchema,
    finalThanks: finalThanksSchema,
  },
  additionalProperties: false,
  required: [
    'back2Home',
    'onlinePage',
    'back2Top',
    'badgeLayout',
    'notLocaleWarning',
    'how2Run',
    'how2AddBadge',
    'how2AddLocale',
    'finalThanks',
  ],
} as const satisfies JSONSchema

export type Readme = FromSchema<typeof readmeSchema, {
  references: [
    typeof tagSchema,
    typeof badgeLayoutSchema,
    typeof paramsTableSchema,
    typeof how2RunSchema,
    typeof how2AddBadgeSchema,
    typeof how2AddLocaleSchema,
    typeof finalThanksSchema,
  ]
}>

export const docIndexSchema = {
  $id: 'docIndex',
  type: 'object',
  patternProperties: {
    '^startButton.+$': {
      type: 'string',
      description: 'Start button text.',
    },
  },
  properties: {
    startButton: {
      type: 'string',
      description: 'Start button text.',
    },
  },
  additionalProperties: false,
  required: [
    'startButton',
  ],
} as const satisfies JSONSchema

export type DocIndex = FromSchema<typeof docIndexSchema, { references: [] }>

export const docBadgeSchema = {
  $id: 'docBadge',
  type: 'object',
  patternProperties: {
    '^outlineLabel.+$': {
      type: 'string',
      description: 'Outline label.',
    },
    '^editLinkText.+$': {
      type: 'string',
      description: 'Edit link text.',
    },
  },
  properties: {
    outlineLabel: {
      type: 'string',
      description: 'Outline label.',
    },
    editLinkText: {
      type: 'string',
      description: 'Edit link text.',
    },
  },
  additionalProperties: false,
  required: [
    'outlineLabel',
    'editLinkText',
  ],
} as const satisfies JSONSchema

export type DocBadge = FromSchema<typeof docBadgeSchema, { references: [] }>

export const docSchema = {
  $id: 'doc',
  type: 'object',
  patternProperties: {
    '^sidebarMenuLabel:.+$': {
      type: 'string',
      description: 'Sidebar menu label.',
    },
    '^darkModeSwitchLabel:.+$': {
      type: 'string',
      description: 'Dark mode switch label.',
    },
    '^notFoundTitle:.+$': {
      type: 'string',
      description: 'Not found title.',
    },
    '^notFoundQuote:.+$': {
      type: 'string',
      description: 'Not found quote.',
    },
    '^notFoundLinkText:.+$': {
      type: 'string',
      description: 'Not found link text.',
    },
  },
  properties: {
    sidebarMenuLabel: {
      type: 'string',
      description: 'Sidebar menu label.',
    },
    darkModeSwitchLabel: {
      type: 'string',
      description: 'Dark mode switch label.',
    },
    notFoundTitle: {
      type: 'string',
      description: 'Not found title.',
    },
    notFoundQuote: {
      type: 'string',
      description: 'Not found quote.',
    },
    notFoundLinkText: {
      type: 'string',
      description: 'Not found link text.',
    },
    docIndex: {
      $ref: '#/definitions/docIndex',
      description: 'Doc index metadata.',
    },
    docBadge: {
      $ref: '#/definitions/docBadge',
      description: 'Doc badge metadata.',
    },
  },
  definitions: {
    docIndex: docIndexSchema,
    docBadge: docBadgeSchema,
  },
  additionalProperties: false,
  required: [
    'sidebarMenuLabel',
    'darkModeSwitchLabel',
    'notFoundTitle',
    'notFoundQuote',
    'notFoundLinkText',
    'docIndex',
    'docBadge',
  ],
} as const satisfies JSONSchema

export type Doc = FromSchema<typeof docSchema, {
  references: [typeof docIndexSchema, typeof docBadgeSchema]
}>

export const metaSchema = {
  $id: 'meta',
  type: 'object',
  patternProperties: {
    '^name.+$': {
      type: 'string',
      description: 'Project name.',
    },
    '^title.+$': {
      type: 'string',
      description: 'Project title.',
    },
    '^description.+$': {
      type: 'string',
      description: 'Project description.',
    },
  },
  properties: {
    locales: {
      type: 'array',
      items: {
        $ref: '#/definitions/locale',
      },
      minItems: 1,
      description: 'List of locales.',
    },
    name: {
      type: 'string',
      description: 'Project name.',
    },
    title: {
      type: 'string',
      description: 'Project title.',
    },
    description: {
      type: 'string',
      description: 'Project description.',
    },
    readme: {
      $ref: '#/definitions/readme',
      description: 'Readme metadata.',
    },
    doc: {
      $ref: '#/definitions/doc',
      description: 'Doc metadata.',
    },
  },
  definitions: {
    locale: localeSchema,
    readme: readmeSchema,
    docIndex: docIndexSchema,
    docBadge: docBadgeSchema,
    doc: docSchema,
    tag: tagSchema,
    badgeLayout: badgeLayoutSchema,
    paramsTable: paramsTableSchema,
    how2Run: how2RunSchema,
    how2AddBadge: how2AddBadgeSchema,
    how2AddLocale: how2AddLocaleSchema,
    finalThanks: finalThanksSchema,
  },
  additionalProperties: false,
  required: [
    'locales',
    'name',
    'title',
    'description',
    'readme',
    'doc',
  ],
} as const satisfies JSONSchema

export type Meta = FromSchema<typeof metaSchema, {
  references: [
    typeof localeSchema,
    typeof readmeSchema,
    typeof docIndexSchema,
    typeof docBadgeSchema,
    typeof docSchema,
    typeof tagSchema,
    typeof badgeLayoutSchema,
    typeof paramsTableSchema,
    typeof how2RunSchema,
    typeof how2AddBadgeSchema,
    typeof how2AddLocaleSchema,
    typeof finalThanksSchema,
  ]
}>

export const metaRootSchema = generateJSONSchema(metaSchema, [
  localeSchema,
  readmeSchema,
  docIndexSchema,
  docBadgeSchema,
  docSchema,
  tagSchema,
  badgeLayoutSchema,
  paramsTableSchema,
  how2RunSchema,
  how2AddBadgeSchema,
  how2AddLocaleSchema,
  finalThanksSchema,
])

export function saveMetaJSONSchema(filePath: string): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeJsonSync(filePath, metaRootSchema, { spaces: 2 })
}