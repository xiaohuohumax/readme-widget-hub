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

## Chess.com Stats SVG Generator

**该项目是一个网络服务，能够动态生成 SVG 图片，展示特定 Chess.com 用户的棋类统计数据。**

[![ref-repo]](https://github.com/Prathamesh-B/chesscom-stats-svg)
[![ref-online-tool]](https://www.chess.com)
[![ref-official-doc]](https://github.com/Prathamesh-B/chesscom-stats-svg)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `username` | `string` |  |  | Chess.com 网站的用户名 | 示例：`PrathamRex` |
| `theme` | `string` |  | `default` | 主题色 | 可选值：`default`, `light`, `dark`, `graywhite`。 |
| `borderRadius` | `number` |  | `10` | 边框圆角 |  |
| `disableAnimations` | `boolean` |  | `true` | 是否禁用动画 | 可选值：`true` or `false`。 |

</details>

```txt
http://your-vercel-url/stats{?username,theme}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

#### 默认主题

```markdown
<!-- Chess.com Stats SVG Generator -->
![默认主题 Chess.com SVG 状态图生成器](https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&theme=default)
```

<div>
  <img src="https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&#38;theme=default" alt="默认主题" />
</div>

#### 黑暗主题

```markdown
<!-- PrathamRex -->
![暗黑主题 Chess.com SVG 状态图](https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&theme=dark)
```

<div>
  <img src="https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&#38;theme=dark" alt="暗黑主题" />
</div>

#### 灰白主题

```markdown
<!-- Chess.com Stats SVG Generator -->
![灰白主题 Chess.com SVG 状态图](https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&theme=graywhite)
```

<div>
  <img src="https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&#38;theme=graywhite" alt="灰白主题" />
</div>

#### 亮色主题

```markdown
<!-- Chess.com Stats SVG Generator -->
![亮色主题 Chess.com SVG 状态图](https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&theme=light)
```

<div>
  <img src="https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&#38;theme=light" alt="亮色主题" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/在线工具-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
