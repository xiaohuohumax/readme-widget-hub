{{set paramsTable = readme.badgeLayout.paramsTable}}

{{each badge.linkRules}}

{{set params = $value.params}}
{{set querys = $value.querys}}

{{if $value.description}}
#### {{$value.description}}
{{/if}}

<details {{if showParams}}open{{/if}}>
<summary><small>{{readme.badgeLayout.showOrCloseParams}}</small></summary><p></p>

| {{paramsTable.name}} | {{paramsTable.type}} | {{paramsTable.required}} | {{paramsTable.default}} | {{paramsTable.description}} | {{paramsTable.moreDescription}} |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |{{if params && params.length}}
| ![ref-params] | | | | | |{{each params}}
| `{{$value.name}}` | `{{$value.type}}` | {{if $value.required!==false}}`true`{{/if}} | {{if $value.default}}`{{$value.default}}`{{else}}{{/if}} | {{@$value.description}} | {{if $value.moreDescription}}{{@$value.moreDescription}}{{/if}} |{{/each}}{{/if}}{{if querys && querys.length}}
| ![ref-querys] | | | | | |{{each querys}}
| `{{$value.name}}` | `{{$value.type}}` | {{if $value.required===true}}`true`{{/if}} | {{if $value.default}}`{{$value.default}}`{{else}}{{/if}} | {{@$value.description}} | {{if $value.moreDescription}}{{@$value.moreDescription}}{{/if}} |{{/each}}{{/if}}

</details>

```txt
{{@$value.uriTemplate}}
```

{{/each}}