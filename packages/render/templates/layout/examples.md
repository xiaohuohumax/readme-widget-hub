{{each widget.examples}}

{{if typeof $value === 'object'}}

{{if $value.description}}
#### {{$value.description}}
{{/if}}

```markdown{{if $value.annotate}}
<!-- {{$value.annotate}} -->{{/if}}
![{{$value.alt}}]({{@$value.href}})
```
{{if $value.images.length>0}}
<div>{{each $value.images}}
  <img src="{{$value.href}}" alt="{{$value.alt}}"{{if $value.width}} width="{{$value.width}}"{{/if}}{{if $value.height}} height="{{$value.height}}"{{/if}} />{{/each}}
</div>
{{/if}}

{{else}}
{{@$value}}
{{/if}}

{{/each}}
