<a name="readme-top"></a>

<div align="center">
  <div>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=160&section=header">
  </div>
  <a href="https://github.com/xiaohuohumax/badge-collection">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&height=68&lines=%F0%9F%8E%96%EF%B8%8FBadge+Collection%F0%9F%8E%96%EF%B8%8F"/>
  </a>
  <p><b>这里收集了一些 Github 上热门项目使用过的徽章，以及一些在线制作工具。</b></p>
  <div>
    <b>
       <a href="/README.md">首页</a>
      · <a href="README_en-US.md">English</a>
    </b>
  </div>
  <br/>
</div>

## Shields.io

**Shields.io 是一个提供简洁、一致和易读的 SVG 和位图格式徽章的服务，可以轻松地包含在 GitHub 的 README 文件或任何其他网页中。**

[![ref-repo]](https://github.com/badges/shields)
[![ref-online-tool]](https://shields.io/badges)
[![ref-official-doc]](https://shields.io/badges)

> [!Tip]
> 由于此项目支持的徽章种类非常多，且功能强大，这里只简单介绍－静态徽章，其他徽章使用方式还请移步官方文档。

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `badgeContent` | `string` | `true` |  | 徽章内容 | 格式：`标签-消息-消息背景颜色`。 |
| ![ref-querys] | | | | | |
| `style` | `string` |  | `flat` | 徽章整体风格 | 可选值：`flat` `flat-square` `plastic` `for-the-badge` `social`。 |
| `logo` | `string` |  |  | Logo 图标名称 | 支持 Base64，[slugs.md](https://github.com/simple-icons/simple-icons/blob/master/slugs.md)，[Simple Icons](https://simpleicons.org/)。 |
| `logoColor` | `string` |  |  | Logo 颜色 | 支持格式：`HEX` `RGB` `RGBA` `HSL` `HSLA` `CSS颜色`，适用于 simple-icons 库中的标志，但不适用于自定义标志。 |
| `logoSize` | `string` |  |  | Logo 自适应大小 | 可选值：`auto`。 |
| `label` | `string` |  |  | 左侧标签文字 | 覆盖 `badgeContent` 中 `标签` 部分。 |
| `labelColor` | `string` |  |  | 左侧标签背景颜色 | 支持格式：`HEX` `RGB` `RGBA` `HSL` `HSLA` `CSS颜色`，适用于 simple-icons 库中的标志，但不适用于自定义标志。 |
| `color` | `string` |  |  | 右侧消息背景颜色 | 覆盖 `badgeContent` 中 `消息背景颜色` 部分, 支持格式：同上 `logoColor`。 |
| `cacheSeconds` | `string` |  | `3600` | HTTP 缓存有效期 | 单位：秒，规则应用于推断每个徽标的默认值，任何低于默认值的指定都将被忽略。 |
| `link` | `string` |  |  | 指定点击徽标左侧/右侧应执行的操作 | 注意：这仅在将徽标集成到 `&lt;object>` HTML 标签时有效，但不适用于 `<img>` 标签或标记语言。 |

</details>

```txt
https://img.shields.io/badge/{badgeContent}{?style,logo,logoColor,logoSize,label,labelColor,color,cacheSeconds,link}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
<!-- badges/shields -->
![静态徽章](https://img.shields.io/badge/badges/shields-555555?logo=github)
```

<div>
  <img src="https://img.shields.io/badge/badges/shields-555555?logo=github" alt="静态徽章" width="" height="" />
</div>

```markdown
![颜色徽章](https://img.shields.io/badge/F94144-F94144)
```

<div>
  <img src="https://img.shields.io/badge/F94144-F94144" alt="Color Badge F94144" width="" height="" />
  <img src="https://img.shields.io/badge/F3722C-F3722C" alt="Color Badge F3722C" width="" height="" />
  <img src="https://img.shields.io/badge/F8961E-F8961E" alt="Color Badge F8961E" width="" height="" />
  <img src="https://img.shields.io/badge/F9844A-F9844A" alt="Color Badge F9844A" width="" height="" />
  <img src="https://img.shields.io/badge/F9C74F-F9C74F" alt="Color Badge F9C74F" width="" height="" />
  <img src="https://img.shields.io/badge/90BE6D-90BE6D" alt="Color Badge 90BE6D" width="" height="" />
  <img src="https://img.shields.io/badge/43AA8B-43AA8B" alt="Color Badge 43AA8B" width="" height="" />
  <img src="https://img.shields.io/badge/4D908E-4D908E" alt="Color Badge 4D908E" width="" height="" />
  <img src="https://img.shields.io/badge/577590-577590" alt="Color Badge 577590" width="" height="" />
  <img src="https://img.shields.io/badge/555555-555555" alt="Color Badge 555555" width="" height="" />
  <img src="https://img.shields.io/badge/277DA1-277DA1" alt="Color Badge 277DA1" width="" height="" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/路径参数-526E86

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

<!-- https://ionic.io/ionicons people-circle-outline -->

[ref-need-register]: https://img.shields.io/badge/需要注册-E37945?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI1NiA0NjRjLTExNC42OSAwLTIwOC05My4zMS0yMDgtMjA4UzE0MS4zMSA0OCAyNTYgNDhzMjA4IDkzLjMxIDIwOCAyMDgtOTMuMzEgMjA4LTIwOCAyMDh6bTAtMzg0Yy05NyAwLTE3NiA3OS0xNzYgMTc2czc5IDE3NiAxNzYgMTc2IDE3Ni03OC45NSAxNzYtMTc2UzM1My4wNSA4MCAyNTYgODB6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMyMy42NyAyOTJjLTE3LjQgMC0zNC4yMS03LjcyLTQ3LjM0LTIxLjczYTgzLjc2IDgzLjc2IDAgMDEtMjItNTEuMzJjLTEuNDctMjAuNyA0Ljg4LTM5Ljc1IDE3Ljg4LTUzLjYyUzMwMy4zOCAxNDQgMzIzLjY3IDE0NGMyMC4xNCAwIDM4LjM3IDcuNjIgNTEuMzMgMjEuNDZzMTkuNDcgMzMgMTggNTMuNTFhODQgODQgMCAwMS0yMiA1MS4zQzM1Ny44NiAyODQuMjggMzQxLjA2IDI5MiAzMjMuNjcgMjkyem01NS44MS03NHpNMTYzLjgyIDI5NS4zNmMtMjkuNzYgMC01NS45My0yNy41MS01OC4zMy02MS4zMy0xLjIzLTE3LjMyIDQuMTUtMzMuMzMgMTUuMTctNDUuMDhzMjYuMjItMTggNDMuMTUtMTggMzIuMTIgNi40NCA0My4wNyAxOC4xNCAxNi41IDI3LjgyIDE1LjI1IDQ1Yy0yLjQ0IDMzLjc3LTI4LjYgNjEuMjctNTguMzEgNjEuMjd6TTQyMC4zNyAzNTUuMjhjLTEuNTktNC43LTUuNDYtOS43MS0xMy4yMi0xNC40Ni0yMy40Ni0xNC4zMy01Mi4zMi0yMS45MS04My40OC0yMS45MS0zMC41NyAwLTYwLjIzIDcuOS04My41MyAyMi4yNS0yNi4yNSAxNi4xNy00My44OSAzOS43NS01MSA2OC4xOC0xLjY4IDYuNjktNC4xMyAxOS4xNC0xLjUxIDI2LjExYTE5Mi4xOCAxOTIuMTggMCAwMDIzMi43NS04MC4xN3pNMTYzLjYzIDQwMS4zN2M3LjA3LTI4LjIxIDIyLjEyLTUxLjczIDQ1LjQ3LTcwLjc1YTggOCAwIDAwLTIuNTktMTMuNzdjLTEyLTMuODMtMjUuNy01Ljg4LTQyLjY5LTUuODgtMjMuODIgMC00OS4xMSA2LjQ1LTY4LjE0IDE4LjE3LTUuNCAzLjMzLTEwLjcgNC42MS0xNC43OCA1Ljc1YTE5Mi44NCAxOTIuODQgMCAwMDc3Ljc4IDg2LjY0bDEuNzktLjE0YTEwMi44MiAxMDIuODIgMCAwMTMuMTYtMjAuMDJ6Ii8+PC9zdmc+

<!-- https://ionic.io/ionicons link-outline -->

[ref-online-tool]: https://img.shields.io/badge/在线工具-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+

<!-- https://ionic.io/ionicons book-outline -->

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=

<!-- https://ionic.io/ionicons image-outline -->

[ref-static-badge]: https://img.shields.io/badge/静态徽章-90BE6D?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHJlY3QgeD0iNDgiIHk9IjgwIiB3aWR0aD0iNDE2IiBoZWlnaHQ9IjM1MiIgcng9IjQ4IiByeT0iNDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4Ii8+PGNpcmNsZSBjeD0iMzM2IiBjeT0iMTc2IiByPSIzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MzJweCIvPjxwYXRoIGQ9Ik0zMDQsMzM1Ljc5LDIxMy4zNCwyNDUuM0EzMiwzMiwwLDAsMCwxNjkuNDcsMjQ0TDQ4LDM1MiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgiLz48cGF0aCBkPSJNMjI0LDQzMiwzNDcuMzQsMzA4LjY2YTMyLDMyLDAsMCwxLDQzLjExLTJMNDY0LDM2OCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgiLz48L3N2Zz4=

<!-- https://ionic.io/ionicons key-outline -->

[ref-need-auth]: https://img.shields.io/badge/需要授权-43AA8B?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIxOC4xLDE2Ny4xN2MwLDEzLDAsMjUuNiw0LjEsMzcuNC00My4xLDUwLjYtMTU2LjksMTg0LjMtMTY3LjUsMTk0LjVhMjAuMTcsMjAuMTcsMCwwLDAtNi43LDE1YzAsOC41LDUuMiwxNi43LDkuNiwyMS4zLDYuNiw2LjksMzQuOCwzMyw0MCwyOCwxNS40LTE1LDE4LjUtMTksMjQuOC0yNS4yLDkuNS05LjMtMS0yOC4zLDIuMy0zNnM2LjgtOS4yLDEyLjUtMTAuNCwxNS44LDIuOSwyMy43LDNjOC4zLjEsMTIuOC0zLjQsMTktOS4yLDUtNC42LDguNi04LjksOC43LTE1LjYuMi05LTEyLjgtMjAuOS0zLjEtMzAuNHMyMy43LDYuMiwzNCw1LDIyLjgtMTUuNSwyNC4xLTIxLjYtMTEuNy0yMS44LTkuNy0zMC43Yy43LTMsNi44LTEwLDExLjQtMTFzMjUsNi45LDI5LjYsNS45YzUuNi0xLjIsMTIuMS03LjEsMTcuNC0xMC40LDE1LjUsNi43LDI5LjYsOS40LDQ3LjcsOS40LDY4LjUsMCwxMjQtNTMuNCwxMjQtMTE5LjJTNDA4LjUsNDgsMzQwLDQ4LDIxOC4xLDEwMS4zNywyMTguMSwxNjcuMTdaTTQwMCwxNDRhMzIsMzIsMCwxLDEtMzItMzJBMzIsMzIsMCwwLDEsNDAwLDE0NFoiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4Ii8+PC9zdmc+
