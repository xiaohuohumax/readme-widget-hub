# {{widget.title}}

**{{widget.description}}**

{{ include "./layout/tag.md"}}

{{if widget.alert}}
> [!{{widget.alert.type}}]{{each widget.alert.messages}}
> {{$value}}{{/each}}
{{/if}}

{{if widget.usage}}
## {{readme.widgetLayout.usageTitle}}

{{ include "./layout/usage.md"}}
{{/if}}

{{if widget.linkRules.length>0}}
## {{readme.widgetLayout.paramsTitle}}

{{ include "./layout/params.md"}}
{{/if}}

{{if widget.examples.length>0}}
## {{readme.widgetLayout.exampleTitle}}

{{ include "./layout/examples.md"}}
{{/if}}

{{ include "./layout/reference.md"}}
