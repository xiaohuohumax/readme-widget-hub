{{ include "./layout/header.md"}}

## {{widget.title}}

**{{widget.description}}**

{{ include "./layout/tag.md"}}

{{if widget.alert}}
> [!{{widget.alert.type}}]{{each widget.alert.messages}}
> {{$value}}{{/each}}
{{/if}}

{{if widget.usage}}
### {{readme.widgetLayout.usageTitle}}

{{ include "./layout/usage.md"}}

{{ include "./layout/back2top.md"}}
{{/if}}

{{if widget.linkRules.length>0}}
### {{readme.widgetLayout.paramsTitle}}

{{ include "./layout/params.md"}}

{{ include "./layout/back2top.md"}}
{{/if}}

{{if widget.examples.length>0}}
### {{readme.widgetLayout.exampleTitle}}

{{ include "./layout/examples.md"}}

{{ include "./layout/back2top.md"}}
{{/if}}

{{ include "./layout/footer.md"}}

{{ include "./layout/reference.md"}}
