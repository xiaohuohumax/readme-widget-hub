# {{badge.title}}

**{{badge.description}}**

{{ include "./layout/tag.md"}}

{{if badge.alert}}
> [!{{badge.alert.type}}]{{each badge.alert.messages}}
> {{$value}}{{/each}}
{{/if}}

## {{readme.badgeLayout.paramsTitle}}

{{ include "./layout/params.md"}}

## {{readme.badgeLayout.exampleTitle}}

{{ include "./layout/examples.md"}}

{{ include "./layout/reference.md"}}
