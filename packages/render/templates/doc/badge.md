# {{badge.title}}

**{{badge.description}}**

{{ include "./layout/tag.md"}}

{{if badge.alert}}
> [!{{badge.alert.type}}]{{each badge.alert.messages}}
> {{$value}}{{/each}}
{{/if}}

{{if badge.linkRules.length>0}}
## {{readme.badgeLayout.paramsTitle}}
{{/if}}

{{ include "./layout/params.md"}}

## {{readme.badgeLayout.exampleTitle}}

{{ include "./layout/examples.md"}}

{{ include "./layout/reference.md"}}
