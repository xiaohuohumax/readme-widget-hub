{{set tag = widget.tag}}

{{if tag}}
{{if tag.repo}}[![ref-repo]]({{@tag.repo}})
{{/if}}{{if tag.onlineTool}}[![ref-online-tool]]({{@tag.onlineTool}})
{{/if}}{{if tag.officialDoc}}[![ref-official-doc]]({{@tag.officialDoc}})
{{/if}}{{if tag.needRegister}}![ref-need-register]
{{/if}}{{if tag.staticBadge}}![ref-static-badge]
{{/if}}{{if tag.needAuth}}![ref-need-auth]{{/if}}
{{/if}}