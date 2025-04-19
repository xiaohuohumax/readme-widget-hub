import type { FromSchema, JSONSchema } from 'json-schema-to-ts'
import path from 'node:path'
import { generateJSONSchema } from '@readme-widget-hub/utils'
import fs from 'fs-extra'

const alertSchema = {
  $id: 'alert',
  type: 'object',
  patternProperties: {
    '^messages:.+$': {
      anyOf: [
        {
          type: 'string',
        },
        {
          type: 'array',
          items: {
            type: 'string',
          },
          minItems: 1,
        },
      ],
      description: 'Alert message.',
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
      description: 'Alert type.',
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
          minItems: 1,
        },
      ],
      description: 'Alert message.',
    },
  },
  additionalProperties: false,
  required: ['messages'],
} as const satisfies JSONSchema

export type Alert = FromSchema<typeof alertSchema, { references: [] }>

const tagSchema = {
  $id: 'tag',
  type: 'object',
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
      type: 'boolean',
      description: 'Whether registration is required.',
    },
    staticBadge: {
      type: 'boolean',
      description: 'Whether the badge is static.',
    },
    needAuth: {
      type: 'boolean',
      description: 'Need authentication.',
    },
    dependentAction: {
      type: 'boolean',
      description: 'Need action.',
    },
  },
  additionalProperties: false,
} as const satisfies JSONSchema

export type Tag = FromSchema<typeof tagSchema, { references: [] }>

const ruleSchema = {
  $id: 'rule',
  type: 'object',
  patternProperties: {
    '^name:.+$': {
      type: 'string',
      description: 'Rule name.',
    },
    '^description:.+$': {
      type: 'string',
      description: 'Rule description.',
    },
    '^moreDescription:.+$': {
      type: 'string',
      description: 'Rule more description.',
    },
  },
  properties: {
    name: {
      type: 'string',
      description: 'Rule name.',
    },
    type: {
      type: 'string',
      enum: [
        'string',
        'number',
        'boolean',
        'array',
        'any',
      ],
      description: 'Rule type.',
    },
    required: {
      type: 'boolean',
      description: 'Whether the rule is required.',
    },
    default: {
      type: 'string',
      description: 'Rule default value.',
    },
    description: {
      type: 'string',
      description: 'Rule description.',
    },
    moreDescription: {
      type: 'string',
      description: 'Rule more description.',
    },
  },
  additionalProperties: false,
  required: [
    'name',
    'type',
    'description',
  ],
} as const satisfies JSONSchema

export type Rule = FromSchema<typeof ruleSchema, { references: [] }>

const linkRuleSchema = {
  $id: 'linkRule',
  type: 'object',
  patternProperties: {
    '^description:.+$': {
      type: 'string',
      description: 'Link rule description.',
    },
  },
  properties: {
    params: {
      type: 'array',
      items: {
        $ref: '#/definitions/rule',
      },
      minItems: 1,
      description: 'Link rule parameters.',
    },
    querys: {
      type: 'array',
      items: {
        $ref: '#/definitions/rule',
      },
      minItems: 1,
      description: 'Link rule querys.',
    },
    actions: {
      type: 'array',
      items: {
        $ref: '#/definitions/rule',
      },
      minItems: 1,
      description: 'Github actions parameters.',
    },
    actionOutputs: {
      type: 'array',
      items: {
        $ref: '#/definitions/rule',
      },
      minItems: 1,
      description: 'Github action outputs parameters.',
    },
    description: {
      type: 'string',
      description: 'Link rule description.',
    },
    uriTemplate: {
      type: 'string',
      description: 'Link uri template.',
    },
  },
  definitions: {
    rule: ruleSchema,
  },
  additionalProperties: false,
  required: [],
} as const satisfies JSONSchema

export type LinkRule = FromSchema<typeof linkRuleSchema, {
  references: [typeof ruleSchema]
}>

const imageSchema = {
  $id: 'image',
  type: 'object',
  patternProperties: {
    '^alt:.+$': {
      type: 'string',
      description: 'Example link alt.',
    },
    '^href:.+$': {
      type: 'string',
      description: 'Example link href.',
    },
  },
  properties: {
    alt: {
      type: 'string',
      description: 'Example link alt.',
    },
    href: {
      type: 'string',
      description: 'Example link href.',
    },
    width: {
      type: 'string',
      description: 'Image width.',
    },
    height: {
      type: 'string',
      description: 'Image height.',
    },
  },
  additionalProperties: false,
  required: ['href'],
} as const satisfies JSONSchema

export type Image = FromSchema<typeof imageSchema, { references: [] }>

const exampleSchema = {
  $id: 'example',
  type: 'object',
  patternProperties: {
    '^description:.+$': {
      type: 'string',
      description: 'Example description.',
    },
    '^annotate:.+$': {
      type: 'string',
      description: 'Example annotate.',
    },
    '^alt:.+$': {
      type: 'string',
      description: 'Example link alt.',
    },
    '^href:.+$': {
      type: 'string',
      description: 'Example link href.',
    },
  },
  properties: {
    description: {
      type: 'string',
      description: 'Example description.',
    },
    annotate: {
      type: 'string',
      description: 'Example annotate.',
    },
    alt: {
      type: 'string',
      description: 'Example link alt.',
    },
    href: {
      type: 'string',
      description: 'Example link href.',
    },
    images: {
      anyOf: [
        {
          $ref: '#/definitions/image',
        },
        {
          type: 'array',
          items: {
            $ref: '#/definitions/image',
          },
          minItems: 1,
        },
      ],
      description: 'Example images.',
    },
  },
  definitions: {
    image: imageSchema,
  },
  additionalProperties: false,
  required: ['href', 'images'],
} as const satisfies JSONSchema

export type Example = FromSchema<typeof exampleSchema, {
  references: [typeof imageSchema]
}>

const widgetSchema = {
  $id: 'widget',
  type: 'object',
  patternProperties: {
    '^index:.+$': {
      type: 'number',
      description: 'Widget order index, smaller is earlier.',
    },
    '^title:.+$': {
      type: 'string',
      description: 'Widget title.',
    },
    '^description:.+$': {
      type: 'string',
      description: 'Widget description.',
    },
    '^usage:.+$': {
      type: 'string',
      description: 'Widget usage (markdown).',
    },
  },
  properties: {
    enabled: {
      type: 'boolean',
      description: 'Whether the widget is enabled.',
    },
    index: {
      type: 'number',
      description: 'Widget order index, smaller is earlier.',
    },
    title: {
      type: 'string',
      description: 'Widget title.',
    },
    description: {
      type: 'string',
      description: 'Widget description.',
    },
    alert: {
      $ref: '#/definitions/alert',
      description: 'Alert message.',
    },
    tag: {
      $ref: '#/definitions/tag',
      description: 'Widget tag.',
    },
    usage: {
      type: 'string',
      description: 'Widget usage (markdown).',
    },
    linkRules: {
      anyOf: [
        {
          $ref: '#/definitions/linkRule',
        },
        {
          type: 'array',
          items: {
            $ref: '#/definitions/linkRule',
          },
          minItems: 1,
        },
      ],
      description: 'Widget link rules.',
    },
    examples: {
      anyOf: [
        {
          type: 'string',
          description: 'Widget example context.',
        },
        {
          type: 'array',
          items: {
            type: 'string',
          },
          minItems: 1,
          description: 'Widget example contexts.',
        },
        {
          $ref: '#/definitions/example',
        },
        {
          type: 'array',
          items: {
            $ref: '#/definitions/example',
          },
          minItems: 1,
        },
      ],
      description: 'Widget examples.',
    },
  },
  definitions: {
    alert: alertSchema,
    tag: tagSchema,
    linkRule: linkRuleSchema,
    example: exampleSchema,
  },
  additionalProperties: false,
  required: ['title', 'description'],
} as const satisfies JSONSchema

export type Widget = FromSchema<typeof widgetSchema, {
  references: [
    typeof alertSchema,
    typeof tagSchema,
    typeof linkRuleSchema,
    typeof exampleSchema,
  ]
}>

export const widgetRootSchema = generateJSONSchema(widgetSchema, [
  alertSchema,
  tagSchema,
  ruleSchema,
  linkRuleSchema,
  imageSchema,
  exampleSchema,
])

export function saveWidgetJSONSchema(filePath: string): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeJsonSync(filePath, widgetRootSchema, { spaces: 2 })
}
