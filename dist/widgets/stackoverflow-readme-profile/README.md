<a name="readme-top"></a>

<div align="center">
  <div>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=160&section=header">
  </div>
  <a href="https://github.com/xiaohuohumax/readme-widget-hub">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&width=416&height=68&lines=%F0%9F%8E%96%EF%B8%8FReadme+Widget+Hub%F0%9F%8E%96%EF%B8%8F"/>
  </a>
  <p><b>用美观、可配置的徽章与状态卡片，让你的 README 更专业、更高效！</b></p>
  <div>
    <b>
       <a href="/README.md">首页</a>
      · <a href="README_en-US.md">English</a>
    </b>
  </div>
  <br/>
</div>

## Stackoverflow Readme Profile

**轻松分享你的 Stackoverflow 个人资料到你的 README。**

[![ref-repo]](https://github.com/johannchopin/stackoverflow-readme-profile)
[![ref-online-tool]](https://stackoverflow-readme-profile.vercel.app/)
[![ref-official-doc]](https://github.com/johannchopin/stackoverflow-readme-profile?tab=readme-ov-file#stackoverflow-readme-profile)

### 参数

#### Stackoverflow 个人资料

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `template` | `string` | `true` |  | 显示模板 | 可选值：`profile` `profile-small`。 |
| `userId` | `string` | `true` |  | Stackoverflow 用户 ID |  |
| ![ref-querys] | | | | | |
| `theme` | `string` |  | `default` | 主题 | 可选值：`default` `dark` `cobalt` `monokai` `graywhite` `hotdog`。 |
| `website` | `boolean` |  | `true` | 是否显示网站 URL | 仅当 `template=profile` 时可用，可选值：`true` `false`。 |
| `location` | `boolean` |  | `true` | 是否显示位置 | 仅当 `template=profile` 时可用，可选值：`true` `false`。 |

</details>

```txt
https://stackoverflow-readme-profile.johannchopin.fr/{template}/{userId}{?theme,website,location}
```

#### 标签排行榜

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `tagName` | `string` | `true` |  | 标签名称 |  |
| `userId` | `string` | `true` |  | Stackoverflow 用户 ID |  |
| ![ref-querys] | | | | | |
| `theme` | `string` |  | `default` | 主题 | 可选值：`default` `dark` `cobalt` `monokai` `graywhite` `hotdog`。 |

</details>

```txt
https://stackoverflow-readme-profile.johannchopin.fr/tags-league-ranking/{tagName}/{userId}{?theme}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
<!-- johannchopin -->
![Stackoverflow Profile](https://stackoverflow-readme-profile.johannchopin.fr/profile/8583669?theme=dark)
```

<div>
  <img src="https://stackoverflow-readme-profile.johannchopin.fr/profile/8583669?theme=dark" alt="Stackoverflow Profile" />
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
