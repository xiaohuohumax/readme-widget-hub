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
      · <a href="README_pt-BR.md">Português</a>
    </b>
  </div>
  <br/>
</div>

## Lanyard Profile Readme

**在你的 GitHub 个人资料中显示 Discord 在线状态。**

[![ref-repo]](https://github.com/cnrad/lanyard-profile-readme)
[![ref-online-tool]](https://lanyard.cnrad.dev/)
[![ref-official-doc]](https://github.com/cnrad/lanyard-profile-readme?tab=readme-ov-file#usage)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `discordId` | `string` | `true` |  | Discord 用户 ID |  |
| ![ref-querys] | | | | | |
| `theme` | `string` |  | `dark` | 主题 | 可选值：`light` `dark`。 |
| `bg` | `string` |  |  | 背景颜色 | 格式：`HEX`，例如：`FF0000`。 |
| `borderRadius` | `string` |  | `10px` | 边框半径 | 格式：`CSS 宽度值`，例如：`10px` `1em`。 |
| `animated` | `boolean` |  | `true` | 是否切换动画头像 | 可选值：`true` `false`。 |
| `idleMessage` | `string` |  |  | 自定义空闲消息 |  |
| `showDisplayName` | `boolean` |  | `false` | 是否同时显示全局显示名称和用户名 | 可选值：`true` `false`。 |
| `hideDecoration` | `boolean` |  | `false` | 是否隐藏头像装饰 | 可选值：`true` `false`。 |
| `animatedDecoration` | `boolean` |  | `false` | 是否启用动态头像装饰 | 可选值：`true` `false`。 |
| `hideStatus` | `boolean` |  | `false` | 是否隐藏状态 | 可选值：`true` `false`。 |
| `hideTimestamp` | `boolean` |  | `false` | 是否隐藏已过时间 | 可选值：`true` `false`。 |
| `hideBadges` | `boolean` |  | `false` | 是否隐藏徽章 | 可选值：`true` `false`。 |
| `hideProfile` | `boolean` |  | `false` | 是否隐藏资料 | 可选值：`true` `false`。 |
| `hideActivity` | `boolean` |  | `false` | 是否隐藏活动 | 可选值：`true` `false`。 |
| `hideSpotify` | `boolean` |  | `false` | 是否隐藏 Spotify | 可选值：`true` `false`。 |
| `ignoreAppId` | `string` |  |  | 通过 App ID 隐藏部分应用 | 格式：`appId1,appId2,appId3`。 |

</details>

```txt
https://lanyard.cnrad.dev/api/{discordId}{?theme,bg,borderRadius,animated,idleMessage,showDisplayName,hideDecoration,animatedDecoration,hideStatus,hideTimestamp,hideBadges,hideProfile,hideActivity,hideSpotify,ignoreAppId}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
<!-- cnrad -->
![Discord](https://lanyard.cnrad.dev/api/705665813994012695)
```

<div>
  <img src="https://lanyard.cnrad.dev/api/705665813994012695" alt="Discord" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/路径参数-526E86

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/在线工具-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
