# {{readme.finalThanks.title}}

## {{readme.finalThanks.contributorTitle}}

[![Contributors](https://contrib.rocks/image?repo=xiaohuohumax/readme-widget-hub)](https://github.com/xiaohuohumax/readme-widget-hub/contributors)

## {{readme.finalThanks.translatorTitle}}

{{each readme.finalThanks.translates}}{{$value.name}}:{{each $value.translators}} [{{$value.name}}]({{$value.link}})
{{/each}}
{{/each}}