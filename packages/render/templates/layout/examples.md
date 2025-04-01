{{each badge.examples}}

{{if $value.description}}
#### {{$value.description}}
{{/if}}

```markdown{{if $value.annotate}}
<!-- {{$value.annotate}} -->{{/if}}
![{{$value.alt}}]({{@$value.href}})
```
{{each $value.images}}
<img src="{{$value.href}}" alt="{{$value.alt}}" width="{{$value.width}}" height="{{$value.height}}" />{{/each}}

{{/each}}
