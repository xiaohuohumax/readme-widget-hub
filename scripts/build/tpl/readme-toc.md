## {{readme.tocTitle}}

{{each tocs}}
{{'  '.repeat($value.level)}}- {{if $value.type === 'badge'}}[{{$value.title}}{{if $value.description}}: {{$value.description}}{{/if}}]({{$value.href}}){{else if $value.type === 'collection'}}{{$value.title}}{{/if}}{{/each}}