<a name="readme-top"></a>

![Capsule-Render Header](https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=160&section=header)

<div align="center">
  <a href="https://github.com/xiaohuohumax/badge-collection">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&height=68&lines=%F0%9F%8E%96%EF%B8%8FBadge+Collection%F0%9F%8E%96%EF%B8%8F"/>
  </a>
  <p>
    <b>这是一个徽章收集仓库：收集了一些 Github 上热门项目使用过的徽章，以及一些徽章在线制作工具链接。</b>
  </p>
  <div>
    <a href="https://github.com/xiaohuohumax/badge-collection?tab=MIT-1-ov-file#readme"><img src="https://img.shields.io/github/license/xiaohuohumax/badge-collection" /></a>
    <a href="https://github.com/xiaohuohumax/badge-collection/pulls"><img src="https://img.shields.io/github/issues-pr/xiaohuohumax/badge-collection" /></a>
    <a href="https://github.com/xiaohuohumax/badge-collection/issues"><img src="https://img.shields.io/github/issues/xiaohuohumax/badge-collection" /></a>
    <a href="https://github.com/xiaohuohumax/badge-collection"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/xiaohuohumax/badge-collection" /></a>
    <a href="https://github.com/xiaohuohumax/badge-collection"><img src="https://img.shields.io/badge/badge_count-{{badges.length}}-84AD64" /></a>
    <a href="https://github.com/xiaohuohumax/badge-collection"><img src="https://img.shields.io/github/stars/xiaohuohumax/badge-collection" /></a>
  </div>
  <div>『<a href="#-如何使用">使用</a>』『<a href="#-如何贡献徽章">贡献</a>』『<a href="#-感谢所有贡献者">感谢</a>』</div>
  <br/>
</div>

## 🎖️ 徽章集合

{{each badges}}
### {{@$value.title}}

{{if $value.alert}}
> [!{{$value.alert?.type || "Tip"}}]
> {{@$value.alert.message}}
{{/if}}

![rl-badge-introduction]

**{{@$value.description}}**

{{if $value.tags?.repoUrl}}[![rl-repo]]({{@$value.tags?.repoUrl}})
{{/if}}{{if $value.tags?.onlineToolUrl}}[![rl-online-tool]]({{@$value.tags?.onlineToolUrl}})
{{/if}}{{if $value.tags?.officialDocsUrl}}[![rl-official-docs]]({{@$value.tags?.officialDocsUrl}})
{{/if}}{{if $value.tags?.needLogin}}![rl-need-login]{{/if}}

![rl-badge-params]

<details>
  <summary>点击展开/收起详细参数</summary><p></p>

| 参数名 | 类型 | 默认值 | 描述 | 补充说明 |
| ------ | :--- | :----- | :--- | :------- |{{if $value.rule.params}}
| ![rl-link-params] | | | | |{{each $value.rule.params}}
| `{{$value.name}}` | {{$value.type}} | {{if $value.default}}`{{$value.default}}`{{/if}} | {{@$value.description}} | {{@$value.extDescription || ""}} |{{/each}}{{/if}}{{if $value.rule.query}}
| ![rl-link-query] | | | | |{{each $value.rule.query}}
| `{{$value.name}}` | {{$value.type}} | {{if $value.default}}`{{$value.default}}`{{/if}} | {{@$value.description}} | {{@$value.extDescription || ""}} |{{/each}}{{/if}}

</details>

```markdown{{each $value.rule.URITemplates}}
![Alt]({{@$value}}){{/each}}
```

![rl-uses-examples]

{{each $value.useExamples}}
```markdown
{{if $value.explain.annotate}}<!-- {{@$value.explain.annotate}} -->
{{/if}}![{{$value.explain.alt || 'Alt'}}]({{@$value.explain.src}})
```

{{each $value.images}}![{{$value.alt}}]({{@$value.src}})
{{/each}}

{{/each}}

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

![rl-line]
{{/each}}

## 📖 如何使用

```shell
# 运行服务，预览徽章
npm run dev
# 构建 README.md
npm run build
# 抓取热门项目中 README.md 中的图片
npm run spider
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

## ✍ 如何贡献徽章

> [!Warning]
> 请不要直接修改 [README.md](./README.md) 文件，因为这个文件是通过脚本自动生成的，修改后并不会生效。

1. Fork 本仓库
2. 安装依赖：`npm install`，运行预览 `README.md` 的服务：`npm run dev`（支持热更新）
3. 在 [badge](./badges/) 文件夹下增徽章信息文件，格式参考：[badges/template.json](./badges/template.json)
4. 确认预览效果无误后，提交 PR 到本仓库（PS：提交请使用 `npm run commit` 然后选择 `docs`）
5. 等待合并，合并后会自动构建 [README.md](./README.md)

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

## 💖 感谢所有贡献者

[![Contributors](https://contrib.rocks/image?repo=xiaohuohumax/badge-collection)](https://github.com/xiaohuohumax/badge-collection/contributors)

![Capsule-Render Footer](https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer)

<!-- reference links -->

[rl-link-params]: https://img.shields.io/badge/路径参数-526E86 ""
[rl-link-query]: https://img.shields.io/badge/查询参数-526E86 ""
[rl-line]: ./image/line.png ""
[rl-repo]: https://img.shields.io/badge/项目地址-555555?style=flat-square&logo=github ""

<!-- https://ionic.io/ionicons people-circle-outline -->
[rl-need-login]: https://img.shields.io/badge/需要登陆-E37945?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI1NiA0NjRjLTExNC42OSAwLTIwOC05My4zMS0yMDgtMjA4UzE0MS4zMSA0OCAyNTYgNDhzMjA4IDkzLjMxIDIwOCAyMDgtOTMuMzEgMjA4LTIwOCAyMDh6bTAtMzg0Yy05NyAwLTE3NiA3OS0xNzYgMTc2czc5IDE3NiAxNzYgMTc2IDE3Ni03OC45NSAxNzYtMTc2UzM1My4wNSA4MCAyNTYgODB6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMyMy42NyAyOTJjLTE3LjQgMC0zNC4yMS03LjcyLTQ3LjM0LTIxLjczYTgzLjc2IDgzLjc2IDAgMDEtMjItNTEuMzJjLTEuNDctMjAuNyA0Ljg4LTM5Ljc1IDE3Ljg4LTUzLjYyUzMwMy4zOCAxNDQgMzIzLjY3IDE0NGMyMC4xNCAwIDM4LjM3IDcuNjIgNTEuMzMgMjEuNDZzMTkuNDcgMzMgMTggNTMuNTFhODQgODQgMCAwMS0yMiA1MS4zQzM1Ny44NiAyODQuMjggMzQxLjA2IDI5MiAzMjMuNjcgMjkyem01NS44MS03NHpNMTYzLjgyIDI5NS4zNmMtMjkuNzYgMC01NS45My0yNy41MS01OC4zMy02MS4zMy0xLjIzLTE3LjMyIDQuMTUtMzMuMzMgMTUuMTctNDUuMDhzMjYuMjItMTggNDMuMTUtMTggMzIuMTIgNi40NCA0My4wNyAxOC4xNCAxNi41IDI3LjgyIDE1LjI1IDQ1Yy0yLjQ0IDMzLjc3LTI4LjYgNjEuMjctNTguMzEgNjEuMjd6TTQyMC4zNyAzNTUuMjhjLTEuNTktNC43LTUuNDYtOS43MS0xMy4yMi0xNC40Ni0yMy40Ni0xNC4zMy01Mi4zMi0yMS45MS04My40OC0yMS45MS0zMC41NyAwLTYwLjIzIDcuOS04My41MyAyMi4yNS0yNi4yNSAxNi4xNy00My44OSAzOS43NS01MSA2OC4xOC0xLjY4IDYuNjktNC4xMyAxOS4xNC0xLjUxIDI2LjExYTE5Mi4xOCAxOTIuMTggMCAwMDIzMi43NS04MC4xN3pNMTYzLjYzIDQwMS4zN2M3LjA3LTI4LjIxIDIyLjEyLTUxLjczIDQ1LjQ3LTcwLjc1YTggOCAwIDAwLTIuNTktMTMuNzdjLTEyLTMuODMtMjUuNy01Ljg4LTQyLjY5LTUuODgtMjMuODIgMC00OS4xMSA2LjQ1LTY4LjE0IDE4LjE3LTUuNCAzLjMzLTEwLjcgNC42MS0xNC43OCA1Ljc1YTE5Mi44NCAxOTIuODQgMCAwMDc3Ljc4IDg2LjY0bDEuNzktLjE0YTEwMi44MiAxMDIuODIgMCAwMTMuMTYtMjAuMDJ6Ii8+PC9zdmc+ ""

<!-- https://ionic.io/ionicons link-outline -->
[rl-online-tool]: https://img.shields.io/badge/在线工具-F94144?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+ ""

<!-- https://ionic.io/ionicons book-outline -->
[rl-official-docs]: https://img.shields.io/badge/官方文档-277DA1?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4= ""

<!-- https://ionic.io/ionicons information-circle-outline -->
[rl-badge-introduction]: https://img.shields.io/badge/『徽章介绍』-F9C74F?style=for-the-badge&labelColor=F3722C&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI0OCA2NEMxNDYuMzkgNjQgNjQgMTQ2LjM5IDY0IDI0OHM4Mi4zOSAxODQgMTg0IDE4NCAxODQtODIuMzkgMTg0LTE4NFMzNDkuNjEgNjQgMjQ4IDY0eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMzIiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzMiIgZD0iTTIyMCAyMjBoMzJ2MTE2Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIzMiIgZD0iTTIwOCAzNDBoODgiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQ4IDEzMGEyNiAyNiAwIDEwMjYgMjYgMjYgMjYgMCAwMC0yNi0yNnoiLz48L3N2Zz4= ""

<!-- https://ionic.io/ionicons caret-forward-outline -->
[rl-badge-params]: https://img.shields.io/badge/『徽章参数』-F9C74F?style=for-the-badge&labelColor=F3722C&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5MC4wNiA0MTRsMTYzLjEyLTEzOS43OGEyNCAyNCAwIDAwMC0zNi40NEwxOTAuMDYgOThjLTE1LjU3LTEzLjM0LTM5LjYyLTIuMjgtMzkuNjIgMTguMjJ2Mjc5LjZjMCAyMC41IDI0LjA1IDMxLjU2IDM5LjYyIDE4LjE4eiIvPjwvc3ZnPg== ""

<!-- https://ionic.io/ionicons caret-forward-outline -->
[rl-uses-examples]: https://img.shields.io/badge/-『使用示例』-F9C74F?style=for-the-badge&labelColor=F3722C&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5MC4wNiA0MTRsMTYzLjEyLTEzOS43OGEyNCAyNCAwIDAwMC0zNi40NEwxOTAuMDYgOThjLTE1LjU3LTEzLjM0LTM5LjYyLTIuMjgtMzkuNjIgMTguMjJ2Mjc5LjZjMCAyMC41IDI0LjA1IDMxLjU2IDM5LjYyIDE4LjE4eiIvPjwvc3ZnPg== ""
