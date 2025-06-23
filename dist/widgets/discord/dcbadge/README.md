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

## Discord Markdown Badge

**可自定义的徽章，用于展示您的 Discord 账号、服务器邀请或机器人账号。**

[![ref-repo]](https://github.com/gitlimes/dcbadge)
[![ref-official-doc]](https://github.com/gitlimes/dcbadge?tab=readme-ov-file#set-up)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `type` | `string` | `true` |  | 徽章类型 | 可选值：`server` `shield`。 |
| `id` | `string` | `true` |  | ID | 用户 ID、机器人 ID、服务器邀请链接等。 |
| ![ref-querys] | | | | | |
| `style` | `string` |  | `for-the-badge` | 徽章整体风格 | 可选值：`flat` `flat-square` `plastic` `for-the-badge` `social`。 |
| `theme` | `string` |  |  | 徽章主题 | 可选值：`default-inverted` `clean` `clean-inverted` `discord` `discord-inverted` `full-presence` `gray` `blurple`。 |
| `compact` | `boolean` |  | `false` | 是否使用紧凑徽章 |  |
| `logoColor` | `string` |  |  | 图标颜色 | 可选值：`presence`（根据徽标的显示情况更改颜色）`CSS 颜色值` `HEX`。 |
| `bot` | `boolean` |  | `false` | 是否为机器人 |  |

</details>

```txt
https://dcbadge.limes.pink/api/{type}/{id}{?style,theme,compact,logoColor,bot}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
![用户](https://dcbadge.limes.pink/api/shield/406125028065804289)
```

<div>
  <img src="https://dcbadge.limes.pink/api/shield/406125028065804289" alt="用户" />
</div>

```markdown
![服务器](https://dcbadge.limes.pink/api/server/zkspfFwqDg)
```

<div>
  <img src="https://dcbadge.limes.pink/api/server/zkspfFwqDg" alt="服务器" />
</div>

```markdown
![机器人](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true)
```

<div>
  <img src="https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true" alt="机器人" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/路径参数-526E86

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
