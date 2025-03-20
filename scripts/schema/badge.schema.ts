import type { FromSchema, JSONSchema } from 'json-schema-to-ts'

export const ruleItemSchema = {
  $id: 'ruleItem',
  type: 'object',
  patternProperties: {
    '^description:.*$': {
      type: 'string',
      description: 'Description (locale).',
    },
    '^extDescription:.*$': {
      type: 'string',
      description: 'Extended description (locale).',
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
  },
  additionalProperties: false,
  required: ['name', 'type', 'description'],
} as const satisfies JSONSchema

export type RuleItem = FromSchema<typeof ruleItemSchema>

export const markdownImageSchema = {
  $id: 'markdownImage',
  type: 'object',
  patternProperties: {
    '^alt:.*$': {
      type: 'string',
      description: 'Alt text (locale).',
    },
    '^src:.*$': {
      type: 'string',
      description: 'Badge Url (locale).',
    },
  },
  properties: {
    alt: {
      type: 'string',
      description: 'Alt text.',
    },
    src: {
      type: 'string',
      description: 'Badge Url.',
    },
  },
  additionalProperties: false,
  required: ['src'],
} as const satisfies JSONSchema

export type MarkdownImage = FromSchema<typeof markdownImageSchema>

export const explainSchema = {
  $id: 'explain',
  type: 'object',
  patternProperties: {
    '^annotate:.*$': {
      type: 'string',
      description: 'Annotation message (locale).',
    },
    '^alt:.*$': {
      type: 'string',
      description: 'Alt text (locale).',
    },
    '^src:.*$': {
      type: 'string',
      description: 'Badge Url (locale).',
    },
  },
  properties: {
    alt: {
      type: 'string',
      description: 'Alt text.',
    },
    src: {
      type: 'string',
      description: 'Badge Url.',
    },
    annotate: {
      type: 'string',
      description: 'Annotation message.',
    },
  },
  required: ['src'],
  additionalProperties: false,
  definitions: {
    markdownImage: markdownImageSchema,
  },
} as const satisfies JSONSchema

export type Explain = FromSchema<typeof explainSchema, {
  references: [typeof markdownImageSchema]
}>

export const exampleSchema = {
  $id: 'example',
  type: 'object',
  properties: {
    explain: {
      $ref: '#/definitions/explain',
    },
    images: {
      type: 'array',
      items: {
        $ref: '#/definitions/markdownImage',
      },
      description: 'Example images.',
    },
  },
  definitions: {
    explain: explainSchema,
    markdownImage: markdownImageSchema,
  },
  additionalProperties: false,
  required: ['explain', 'images'],
} as const satisfies JSONSchema

export type Example = FromSchema<typeof exampleSchema, {
  references: [typeof explainSchema, typeof markdownImageSchema]
}>

export const ruleSchema = {
  $id: 'rule',
  type: 'object',
  patternProperties: {
    '^annotate:.*$': {
      type: 'string',
      description: 'Annotation message (locale).',
    },
    '^alt:.*$': {
      type: 'string',
      description: 'Alt text (locale).',
    },
    '^srcTemplate:.*$': {
      type: 'string',
      description: 'URL template (URI Template) (locale).',
    },
  },
  properties: {
    params: {
      type: 'array',
      items: {
        $ref: '#/definitions/ruleItem',
      },
      description: 'Path parameters.',
    },
    querys: {
      type: 'array',
      items: {
        $ref: '#/definitions/ruleItem',
      },
      description: 'Query parameters.',
    },
    annotate: {
      type: 'string',
      description: 'Annotation message.',
    },
    alt: {
      type: 'string',
      description: 'Alt text.',
    },
    srcTemplate: {
      type: 'string',
      description: 'URL template (URI Template).',
    },
  },
  definitions: {
    ruleItem: ruleItemSchema,
  },
  additionalProperties: false,
  required: [
    'srcTemplate',
  ],
} as const satisfies JSONSchema

export type Rule = FromSchema<typeof ruleSchema, {
  references: [typeof ruleItemSchema]
}>

export const alertSchema = {
  $id: 'alert',
  type: 'object',
  patternProperties: {
    '^messages:.*$': {
      anyOf: [
        {
          type: 'string',
        },
        {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      ],
      description: 'Alert messages (locale).',
    },
  },
  properties: {
    type: {
      type: 'string',
      enum: [
        'Note',
        'Tip',
        'Important',
        'Warning',
        'Caution',
      ],
      description: 'Alert type, default is `Tip`.',
      default: 'Tip',
    },
    messages: {
      anyOf: [
        {
          type: 'string',
        },
        {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      ],
      description: 'Alert messages.',
    },
  },
  additionalProperties: false,
  required: ['messages'],
} as const satisfies JSONSchema

export type Alert = FromSchema<typeof alertSchema>

export const tagsSchema = {
  $id: 'tags',
  type: 'object',
  properties: {
    repoUrl: {
      type: 'string',
      description: 'Project address.',
    },
    onlineToolUrl: {
      type: 'string',
      description: 'Online tool address.',
    },
    officialDocsUrl: {
      type: 'string',
      description: 'Official documentation address.',
    },
    needLogin: {
      type: 'boolean',
      description: 'Whether login is required.',
    },
  },
  additionalProperties: false,
  required: [],
} as const satisfies JSONSchema

export type Tags = FromSchema<typeof tagsSchema>

export const badgeSchema = {
  $id: 'badge',
  type: 'object',
  patternProperties: {
    '^title:.*$': {
      type: 'string',
      description: 'Badge title (locale).',
    },
    '^description:.*$': {
      type: 'string',
      description: 'Badge description (locale).',
    },
  },
  properties: {
    enabled: {
      type: 'boolean',
      description: 'Badge enabled or not.',
    },
    index: {
      type: 'number',
      description: 'Badge order index, smaller is earlier, default is `9999`.',
      default: 9999,
    },
    title: {
      type: 'string',
      description: 'Badge title.',
    },
    description: {
      type: 'string',
      description: 'Badge description.',
    },
    alert: {
      $ref: '#/definitions/alert',
      description: 'Badge alert message.',
    },
    tags: {
      $ref: '#/definitions/tags',
      description: 'Badge tags.',
    },
    rules: {
      anyOf: [
        {
          $ref: '#/definitions/rule',
        },
        {
          type: 'array',
          items: {
            $ref: '#/definitions/rule',
          },
        },
      ],
      description: 'Badge url rules.',
    },
    examples: {
      type: 'array',
      items: {
        $ref: '#/definitions/example',
      },
      description: 'Badge examples.',
    },
  },
  definitions: {
    ruleItem: ruleItemSchema,
    markdownImage: markdownImageSchema,
    explain: explainSchema,
    example: exampleSchema,
    rule: ruleSchema,
    alert: alertSchema,
    tags: tagsSchema,
  },
  additionalProperties: false,
  required: [
    'title',
    'description',
    'rules',
    'examples',
  ],
} as const satisfies JSONSchema

export type Badge = FromSchema<typeof badgeSchema, {
  references: [
    typeof ruleItemSchema,
    typeof markdownImageSchema,
    typeof explainSchema,
    typeof exampleSchema,
    typeof ruleSchema,
    typeof alertSchema,
    typeof tagsSchema,
  ]
}>
