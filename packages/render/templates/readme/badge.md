{{ include "./layout/header.md"}}

## {{badge.title}}

**{{badge.description}}**

{{ include "./layout/tag.md"}}

{{if badge.alert}}
> [!{{badge.alert.type}}]{{each badge.alert.messages}}
> {{$value}}{{/each}}
{{/if}}

{{if badge.linkRules.length>0}}
### {{readme.badgeLayout.paramsTitle}}
{{/if}}

{{ include "./layout/params.md"}}

{{ include "./layout/back2top.md"}}

### {{readme.badgeLayout.exampleTitle}}

{{ include "./layout/examples.md"}}

{{ include "./layout/back2top.md"}}

{{ include "./layout/footer.md"}}

{{ include "./layout/reference.md"}}
