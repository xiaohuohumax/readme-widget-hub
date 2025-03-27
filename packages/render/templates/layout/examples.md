{{each badge.examples}}

{{if $value.description}}
#### {{$value.description}}
{{/if}}

```markdown{{if $value.annotate}}
<!-- {{$value.annotate}} -->{{/if}}
![{{$value.alt}}]({{@$value.href}})
```
{{each $value.images}}
![{{$value.alt}}]({{$value.href}}){{/each}}

{{/each}}
