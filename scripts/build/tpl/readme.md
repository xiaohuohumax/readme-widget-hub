{{include './readme-header.md'}}

{{include './readme-toc.md'}}

## {{readme.howToRunProject.title}}

```shell{{each readme.howToRunProject.commands}}
{{@$value}}{{/each}}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/{{readme.layout.backToTop.replace(" ", "%20")}}-555555?style={{guideBadgeStyle}}"></a></p>

## {{readme.howToAddBadge.title}}

> [!Warning]
> {{@readme.howToAddBadge.warning}}

{{each readme.howToAddBadge.steps}}
+ {{@$value}}{{/each}}

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/{{readme.layout.backToTop.replace(" ", "%20")}}-555555?style={{guideBadgeStyle}}"></a></p>

## {{readme.howToAddLocale.title}}

{{each readme.howToAddLocale.steps}}
+ {{@$value}}{{/each}}

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/{{readme.layout.backToTop.replace(" ", "%20")}}-555555?style={{guideBadgeStyle}}"></a></p>

## {{readme.thanksContributorsTitle}}

[![Contributors](https://contrib.rocks/image?repo=xiaohuohumax/badge-collection)](https://github.com/xiaohuohumax/badge-collection/contributors)

{{include './readme-footer.md'}}
