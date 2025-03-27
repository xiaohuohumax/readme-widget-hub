{{set tag = badge.tag}}

{{if tag.repo}}[![ref-repo]]({{@tag.repo}})
{{/if}}{{if tag.onlineTool}}[![ref-online-tool]]({{@tag.onlineTool}})
{{/if}}{{if tag.officialDoc}}[![ref-official-doc]]({{@tag.officialDoc}})
{{/if}}{{if tag.needRegister}}![ref-need-register]{{/if}}