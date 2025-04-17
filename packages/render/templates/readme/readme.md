{{ include "./layout/header.md"}}

> [!Tip]
> {{description}}

## {{readme.badgeLayout.tocTitle}}

{{each tocs}}
{{'  '.repeat($value.level)}}- {{if $value.type==='badge'}}[{{$value.name}}]({{$value.href}}){{else}}{{$value.name}}{{/if}}{{/each}}

{{ include "./layout/back2top.md"}}

## {{readme.how2Run.title}}

```shell{{each readme.how2Run.steps}}
{{$value}}{{/each}}
```

{{ include "./layout/back2top.md"}}

## {{readme.how2AddBadge.title}}

{{each readme.how2AddBadge.steps}}
+ {{$value}}{{/each}}

{{ include "./layout/back2top.md"}}

## {{readme.how2AddLocale.title}}

{{each readme.how2AddLocale.steps}}
+ {{$value}}{{/each}}

{{ include "./layout/back2top.md"}}

## {{readme.finalThanks.title}}

[![Contributors](https://contrib.rocks/image?repo=xiaohuohumax/readme-widget-hub)](https://github.com/xiaohuohumax/readme-widget-hub/contributors)

{{readme.finalThanks.concludingRemarks}}

{{ include "./layout/back2top.md"}}

{{ include "./layout/footer.md"}}