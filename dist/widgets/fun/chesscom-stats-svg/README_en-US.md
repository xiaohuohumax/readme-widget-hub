<a name="readme-top"></a>

<div align="center">
  <div>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=160&section=header">
  </div>
  <a href="https://github.com/xiaohuohumax/readme-widget-hub">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&width=416&height=68&lines=%F0%9F%8E%96%EF%B8%8FReadme+Widget+Hub%F0%9F%8E%96%EF%B8%8F"/>
  </a>
  <p><b>Use beautiful, configurable badges and status cards to make your README more professional and efficient!</b></p>
  <div>
    <b>
       <a href="/README_en-US.md">Home</a>
      · <a href="README_pt-BR.md">Português</a>
      · <a href="README.md">中文</a>
    </b>
  </div>
  <br/>
</div>

## Chess.com Stats SVG Generator

**This project is a web service that dynamically generates SVG images displaying chess statistics for a given Chess.com user.**

[![ref-repo]](https://github.com/Prathamesh-B/chesscom-stats-svg)
[![ref-online-tool]](https://www.chess.com)
[![ref-official-doc]](https://github.com/Prathamesh-B/chesscom-stats-svg)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `username` | `string` |  |  | Username registered in Chess.com website | Example: `PrathamRex` |
| `theme` | `string` |  | `default` | Theme color | Supported: `default`, `light`, `dark`, `graywhite`. |
| `borderRadius` | `number` |  | `10` | Border radius |  |
| `disableAnimations` | `boolean` |  | `true` | Disable animations | Supported: `true` or `false`. |

</details>

```txt
http://your-vercel-url/stats{?username,theme}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

#### Default theme

```markdown
<!-- Chess.com Stats SVG Generator -->
![Chess.com Stats with default theme](https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&theme=default)
```

<div>
  <img src="https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&#38;theme=default" alt="Default theme" />
</div>

#### Dark theme

```markdown
<!-- PrathamRex -->
![Chess.com Stats with dark theme](https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&theme=dark)
```

<div>
  <img src="https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&#38;theme=dark" alt="Dark theme" />
</div>

#### Graywhite theme

```markdown
<!-- Chess.com Stats SVG Generator -->
![Chess.com Stats with graywhite theme](https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&theme=graywhite)
```

<div>
  <img src="https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&#38;theme=graywhite" alt="Graywhite theme" />
</div>

#### Light theme

```markdown
<!-- Chess.com Stats SVG Generator -->
![Chess.com Stats with light theme](https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&theme=light)
```

<div>
  <img src="https://chesscom-stats-svg.vercel.app/stats?username=PrathamRex&#38;theme=light" alt="Light theme" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-action-outputs]: https://img.shields.io/badge/Action%20Outputs-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/Online%20Tools-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
