{{include './readme-header.md'}}

{{include './readme-toc.md'}}

<a name="readme-params"></a>

## {{badgeData.title}}

{{if badgeData.alert}}
> [!{{badgeData.alert.type}}]{{each badgeData.alert.messages}}
> {{@$value}}{{/each}}
{{/if}}

![rl-badge-introduction]

**{{@badgeData.description}}**

{{if badgeData.tags?.repoUrl}}[![rl-repo]]({{@badgeData.tags?.repoUrl}})
{{/if}}{{if badgeData.tags?.onlineToolUrl}}[![rl-online-tool]]({{@badgeData.tags?.onlineToolUrl}})
{{/if}}{{if badgeData.tags?.officialDocsUrl}}[![rl-official-docs]]({{@badgeData.tags?.officialDocsUrl}})
{{/if}}{{if badgeData.tags?.needLogin}}![rl-need-login]{{/if}}

![rl-badge-params]

{{each badgeData.rules}}
{{if $value.params.length || $value.querys.length}}

<details {{if openParamsDetails}}open{{/if}}>
  <summary>{{readme.layout.toggleBadgeParams}}</summary><p></p>

| {{readme.layout.paramsTable.name}} | {{readme.layout.paramsTable.type}} | {{readme.layout.paramsTable.default}} | {{readme.layout.paramsTable.description}} | {{readme.layout.paramsTable.extDescription}} |
| ---------------------------------- | :--------------------------------- | :------------------------------------ | :---------------------------------------- | :------------------------------------------- |{{if $value.params.length > 0}}
| ![rl-link-params] | | | | |{{each $value.params}}
| `{{$value.name}}` | {{$value.type}} | {{if $value.default}}`{{$value.default}}`{{/if}} | {{@$value.description}} | {{@$value.extDescription || ""}} |{{/each}}{{/if}}{{if $value.querys.length > 0}}
| ![rl-link-query] | | | | |{{each $value.querys}}
| `{{$value.name}}` | {{$value.type}} | {{if $value.default}}`{{$value.default}}`{{/if}} | {{@$value.description}} | {{@$value.extDescription || ""}} |{{/each}}{{/if}}

</details>
{{/if}}

```markdown
{{if $value.annotate}}<!-- {{@$value.annotate}} -->
{{/if}}![{{$value.alt}}]({{@$value.srcTemplate}})
```
{{/each}}

![rl-uses-examples]

{{each badgeData.examples}}
```markdown
{{if $value.explain.annotate}}<!-- {{@$value.explain.annotate}} -->
{{/if}}![{{$value.explain.alt}}]({{@$value.explain.src}})
```

{{each $value.images}}![{{$value.alt}}]({{@$value.src}})
{{/each}}

{{/each}}

{{if badgeData.foldedExamples.length > 0}}
<details {{if openExamplesDetails}}open{{/if}}>
  <summary>{{readme.layout.toggleUsesExamples}}</summary><p></p>

{{each badgeData.foldedExamples}}
```markdown
{{if $value.explain.annotate}}<!-- {{@$value.explain.annotate}} -->
{{/if}}![{{$value.explain.alt || 'Alt'}}]({{@$value.explain.src}})
```

{{each $value.images}}![{{$value.alt}}]({{@$value.src}})
{{/each}}

{{/each}}

</details>
{{/if}}

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/{{readme.layout.backToTop.replace(" ", "%20")}}-555555?style={{guideBadgeStyle}}"></a></p>

{{include './readme-footer.md'}}
