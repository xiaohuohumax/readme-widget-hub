# {{widget.title}}

**{{widget.description}}**

{{ include "./layout/tag.md"}}

{{if widget.alert}}
> [!{{widget.alert.type}}]{{each widget.alert.messages}}
> {{$value}}{{/each}}
{{/if}}

{{if widget.linkRules.length>0}}
## {{readme.widgetLayout.paramsTitle}}
{{/if}}

{{ include "./layout/params.md"}}

## {{readme.widgetLayout.exampleTitle}}

{{ include "./layout/examples.md"}}

{{ include "./layout/reference.md"}}
