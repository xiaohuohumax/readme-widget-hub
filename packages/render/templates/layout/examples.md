{{each badge.examples}}

{{if $value.description}}
#### {{$value.description}}
{{/if}}

```markdown{{if $value.annotate}}
<!-- {{$value.annotate}} -->{{/if}}
![{{$value.alt}}]({{@$value.href}})
```
{{if $value.images.length>0}}
<div>{{each $value.images}}
  <img src="{{$value.href}}" alt="{{$value.alt}}" width="{{$value.width}}" height="{{$value.height}}" />{{/each}}
</div>
{{/if}}

{{/each}}
