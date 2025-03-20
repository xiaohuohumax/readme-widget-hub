<a name="readme-top"></a>

![Capsule-Render Header](https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=160&section=header)

<div align="center">
  <a href="https://github.com/xiaohuohumax/badge-collection">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&height=68&lines=%F0%9F%8E%96%EF%B8%8FBadge+Collection%F0%9F%8E%96%EF%B8%8F"/>
  </a>
  <p><b>{{readme.headerTitle}}</b></p>
  <div>
    <a href="https://github.com/xiaohuohumax/badge-collection?tab=MIT-1-ov-file#readme"><img src="https://img.shields.io/github/license/xiaohuohumax/badge-collection" /></a>
    <a href="https://github.com/xiaohuohumax/badge-collection/pulls"><img src="https://img.shields.io/github/issues-pr/xiaohuohumax/badge-collection" /></a>
    <a href="https://github.com/xiaohuohumax/badge-collection/issues"><img src="https://img.shields.io/github/issues/xiaohuohumax/badge-collection" /></a>
    <a href="https://github.com/xiaohuohumax/badge-collection"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/xiaohuohumax/badge-collection" /></a>
    <a href="https://github.com/xiaohuohumax/badge-collection"><img src="https://img.shields.io/badge/badge_count-{{badgeLength}}-84AD64" /></a>
    <a href="https://github.com/xiaohuohumax/badge-collection"><img src="https://img.shields.io/github/stars/xiaohuohumax/badge-collection" /></a>
  </div>{{if locales.length > 1}}
  <div>
    <b>{{each locales}}
      <a class="locale-link" data-locale="{{@$value.locale}}" href="{{@$value.localeSrc}}">{{@$value.name}}</a>{{/each}}
    </b>
  </div>{{/if}}
  <br/>
</div>

{{if readme.localeBuildingMessage}}
> [!Tip]
> {{readme.localeBuildingMessage}}
{{/if}}

## {{readme.tocTitle}}

## {{readme.badgeCollectionTitle}}

{{each renderItems}}

{{if $value.type === 'collection'}}
{{'#'.repeat($value.level)}} {{$value.title}}

{{if $value.description}}{{@$value.description}}{{/if}}
{{else if $value.type === 'badge'}}
{{'#'.repeat($value.level)}} {{@$value.title}}

{{if $value.alert}}
> [!{{$value.alert?.type || "Tip"}}]{{each $value.alert.messages}}
> {{@$value}}{{/each}}
{{/if}}

![rl-badge-introduction]

**{{@$value.description}}**

{{if $value.tags?.repoUrl}}[![rl-repo]]({{@$value.tags?.repoUrl}})
{{/if}}{{if $value.tags?.onlineToolUrl}}[![rl-online-tool]]({{@$value.tags?.onlineToolUrl}})
{{/if}}{{if $value.tags?.officialDocsUrl}}[![rl-official-docs]]({{@$value.tags?.officialDocsUrl}})
{{/if}}{{if $value.tags?.needLogin}}![rl-need-login]{{/if}}

![rl-badge-params]

{{each $value.rules}}
{{if $value.params.length || $value.querys.length}}

<details>
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

{{each $value.examples}}
```markdown
{{if $value.explain.annotate}}<!-- {{@$value.explain.annotate}} -->
{{/if}}![{{$value.explain.alt}}]({{@$value.explain.src}})
```

{{each $value.images}}![{{$value.alt}}]({{@$value.src}})
{{/each}}

{{/each}}

{{if $value.foldedExamples.length > 0}}
<details>
  <summary>{{readme.layout.toggleUsesExamples}}</summary><p></p>

{{each $value.foldedExamples}}
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

![rl-line]
{{/if}}{{/each}}

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

![Capsule-Render Footer](https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer)

<!-- reference links -->

[rl-link-params]: https://img.shields.io/badge/{{readme.layout.paramsTable.pathParams.replace(" ", "%20")}}-526E86 ""
[rl-link-query]: https://img.shields.io/badge/{{readme.layout.paramsTable.queryParams.replace(" ", "%20")}}-526E86 ""
[rl-line]: ./image/line.svg ""
[rl-repo]: https://img.shields.io/badge/{{readme.layout.repoUrl.replace(" ", "%20")}}-555555?style={{tagBadgeStyle}}&logo=github ""

<!-- https://ionic.io/ionicons people-circle-outline -->
[rl-need-login]: https://img.shields.io/badge/{{readme.layout.needLogin.replace(" ", "%20")}}-E37945?style={{tagBadgeStyle}}&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI1NiA0NjRjLTExNC42OSAwLTIwOC05My4zMS0yMDgtMjA4UzE0MS4zMSA0OCAyNTYgNDhzMjA4IDkzLjMxIDIwOCAyMDgtOTMuMzEgMjA4LTIwOCAyMDh6bTAtMzg0Yy05NyAwLTE3NiA3OS0xNzYgMTc2czc5IDE3NiAxNzYgMTc2IDE3Ni03OC45NSAxNzYtMTc2UzM1My4wNSA4MCAyNTYgODB6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMyMy42NyAyOTJjLTE3LjQgMC0zNC4yMS03LjcyLTQ3LjM0LTIxLjczYTgzLjc2IDgzLjc2IDAgMDEtMjItNTEuMzJjLTEuNDctMjAuNyA0Ljg4LTM5Ljc1IDE3Ljg4LTUzLjYyUzMwMy4zOCAxNDQgMzIzLjY3IDE0NGMyMC4xNCAwIDM4LjM3IDcuNjIgNTEuMzMgMjEuNDZzMTkuNDcgMzMgMTggNTMuNTFhODQgODQgMCAwMS0yMiA1MS4zQzM1Ny44NiAyODQuMjggMzQxLjA2IDI5MiAzMjMuNjcgMjkyem01NS44MS03NHpNMTYzLjgyIDI5NS4zNmMtMjkuNzYgMC01NS45My0yNy41MS01OC4zMy02MS4zMy0xLjIzLTE3LjMyIDQuMTUtMzMuMzMgMTUuMTctNDUuMDhzMjYuMjItMTggNDMuMTUtMTggMzIuMTIgNi40NCA0My4wNyAxOC4xNCAxNi41IDI3LjgyIDE1LjI1IDQ1Yy0yLjQ0IDMzLjc3LTI4LjYgNjEuMjctNTguMzEgNjEuMjd6TTQyMC4zNyAzNTUuMjhjLTEuNTktNC43LTUuNDYtOS43MS0xMy4yMi0xNC40Ni0yMy40Ni0xNC4zMy01Mi4zMi0yMS45MS04My40OC0yMS45MS0zMC41NyAwLTYwLjIzIDcuOS04My41MyAyMi4yNS0yNi4yNSAxNi4xNy00My44OSAzOS43NS01MSA2OC4xOC0xLjY4IDYuNjktNC4xMyAxOS4xNC0xLjUxIDI2LjExYTE5Mi4xOCAxOTIuMTggMCAwMDIzMi43NS04MC4xN3pNMTYzLjYzIDQwMS4zN2M3LjA3LTI4LjIxIDIyLjEyLTUxLjczIDQ1LjQ3LTcwLjc1YTggOCAwIDAwLTIuNTktMTMuNzdjLTEyLTMuODMtMjUuNy01Ljg4LTQyLjY5LTUuODgtMjMuODIgMC00OS4xMSA2LjQ1LTY4LjE0IDE4LjE3LTUuNCAzLjMzLTEwLjcgNC42MS0xNC43OCA1Ljc1YTE5Mi44NCAxOTIuODQgMCAwMDc3Ljc4IDg2LjY0bDEuNzktLjE0YTEwMi44MiAxMDIuODIgMCAwMTMuMTYtMjAuMDJ6Ii8+PC9zdmc+ ""

<!-- https://ionic.io/ionicons link-outline -->
[rl-online-tool]: https://img.shields.io/badge/{{readme.layout.onlineToolUrl.replace(" ", "%20")}}-F94144?style={{tagBadgeStyle}}&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+ ""

<!-- https://ionic.io/ionicons book-outline -->
[rl-official-docs]: https://img.shields.io/badge/{{readme.layout.officialDocsUrl.replace(" ", "%20")}}-277DA1?style={{tagBadgeStyle}}&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4= ""

<!-- https://ionic.io/ionicons information-circle-outline -->
[rl-badge-introduction]: https://img.shields.io/badge/{{readme.layout.badgeIntroduction.replace(" ", "%20")}}-F9C74F?style={{guideBadgeStyle}}&labelColor=F3722C&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI0OCA2NEMxNDYuMzkgNjQgNjQgMTQ2LjM5IDY0IDI0OHM4Mi4zOSAxODQgMTg0IDE4NCAxODQtODIuMzkgMTg0LTE4NFMzNDkuNjEgNjQgMjQ4IDY0eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMzIiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzMiIgZD0iTTIyMCAyMjBoMzJ2MTE2Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIzMiIgZD0iTTIwOCAzNDBoODgiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQ4IDEzMGEyNiAyNiAwIDEwMjYgMjYgMjYgMjYgMCAwMC0yNi0yNnoiLz48L3N2Zz4= ""

<!-- https://ionic.io/ionicons caret-forward-outline -->
[rl-badge-params]: https://img.shields.io/badge/{{readme.layout.badgeParams.replace(" ", "%20")}}-F9C74F?style={{guideBadgeStyle}}&labelColor=F3722C&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5MC4wNiA0MTRsMTYzLjEyLTEzOS43OGEyNCAyNCAwIDAwMC0zNi40NEwxOTAuMDYgOThjLTE1LjU3LTEzLjM0LTM5LjYyLTIuMjgtMzkuNjIgMTguMjJ2Mjc5LjZjMCAyMC41IDI0LjA1IDMxLjU2IDM5LjYyIDE4LjE4eiIvPjwvc3ZnPg== ""

<!-- https://ionic.io/ionicons caret-forward-outline -->
[rl-uses-examples]: https://img.shields.io/badge/-{{readme.layout.usesExamples.replace(" ", "%20")}}-F9C74F?style={{guideBadgeStyle}}&labelColor=F3722C&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5MC4wNiA0MTRsMTYzLjEyLTEzOS43OGEyNCAyNCAwIDAwMC0zNi40NEwxOTAuMDYgOThjLTE1LjU3LTEzLjM0LTM5LjYyLTIuMjgtMzkuNjIgMTguMjJ2Mjc5LjZjMCAyMC41IDI0LjA1IDMxLjU2IDM5LjYyIDE4LjE4eiIvPjwvc3ZnPg== ""
