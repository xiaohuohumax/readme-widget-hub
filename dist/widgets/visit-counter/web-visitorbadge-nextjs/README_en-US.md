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
      · <a href="README.md">中文</a>
    </b>
  </div>
  <br/>
</div>

## Visitor Badge

**Create a visitor badge that you can use on any website or GitHub profile.**

[![ref-repo]](https://github.com/estruyf/web-visitorbadge-nextjs)
[![ref-online-tool]](https://visitorbadge.io/)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `type` | `string` | `true` |  | Badge type | Supported: `visitors` (total), `daily` (single day), `combined` (two combined). |
| ![ref-querys] | | | | | |
| `path` | `string` | `true` |  | Statistics path | URL or username/repository to uniquely identify the link or string for statistics. |
| `label` | `string` |  |  | Badge label |  |
| `labelColor` | `string` |  | `#555555` | Badge label background color | Supported: `HEX`, for example: `#FF0000`. |
| `countColor` | `string` |  | `#263759` | Badge count background color | Supported: `HEX`, for example: `#FF0000`. |
| `style` | `string` |  | `default` | Badge style | Supported: `default`, `flat`, `flat-square`, `plastic`. |
| `labelStyle` | `string` |  | `upper` | Badge label case | Supported: `upper` (uppercase) `lower` (lowercase). |

</details>

```txt
https://api.visitorbadge.io/api/{type}{?path,label,labelColor,countColor,style,labelStyle}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- xiaohuohumax/readme-widget-hub -->
![Visitors](https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2Fxiaohuohumax%2Freadme-widget-hub&label=VISITORS&countColor=%23f3722c)
```

<div>
  <img src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2Fxiaohuohumax%2Freadme-widget-hub&#38;label=VISITORS&#38;countColor=%23f3722c" alt="Visitors" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/Path%20Params-526E86

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-action-outputs]: https://img.shields.io/badge/Action%20Outputs-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/Online%20Tools-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+
