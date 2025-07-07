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

## Badgen

**Fast badge generating service.**

[![ref-repo]](https://github.com/badgen/badgen.net)
[![ref-online-tool]](https://badgen.net/)
[![ref-official-doc]](https://badgen.net/help)

> [!Tip]
> Due to the large number of badge types supported by this project and its powerful features, here is a brief introduction to static badges only. For other badge types, please refer to the official documentation.

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `badge` | `string` | `true` |  | Badge type | Supported: `/static` `/github` `/gitlab` `/https`, etc. More types please refer to the official documentation. |
| `subject` | `string` | `true` |  | Badge subject | For example, when using `/static` badge, `subject` represents the label on the left side of the badge. |
| `status` | `string` | `true` |  | Badge status | For example, `/static/Swift/4.2/orange` `status=4.2`. |
| `color` | `string` | `true` |  | Badge color | Supported formats: `RGB` `CSS color`. |
| ![ref-querys] | | | | | |
| `color` | `string` |  |  | Override default badge color |  |
| `icon` | `string` |  |  | Badge icon | Support external icon URL. |
| `label` | `string` |  |  | Badge label |  |
| `labelColor` | `string` |  |  | Badge label color |  |
| `scale` | `number` |  | `1` | Badge scale |  |
| `cache` | `number` |  | `86400` | Cache time | Unit: seconds. |

</details>

```txt
https://badgen.net/{badge}/{subject}/{status}/{color}{?color,icon,label,labelColor,scale,cache}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- badgen/badgen.net -->
![Swift Version](https://badgen.net/static/Swift/4.2/orange)
```

<div>
  <img src="https://badgen.net/static/Swift/4.2/orange" alt="Swift Version" />
</div>

```markdown
![Color Badge](https://badgen.net/badge/color/F94144/F94144?label=)
```

<div>
  <img src="https://badgen.net/badge/color/F94144/F94144?label=" alt="Color Badge F94144" />
  <img src="https://badgen.net/badge/color/F3722C/F3722C?label=" alt="Color Badge F3722C" />
  <img src="https://badgen.net/badge/color/F8961E/F8961E?label=" alt="Color Badge F8961E" />
  <img src="https://badgen.net/badge/color/F9844A/F9844A?label=" alt="Color Badge F9844A" />
  <img src="https://badgen.net/badge/color/F9C74F/F9C74F?label=" alt="Color Badge F9C74F" />
  <img src="https://badgen.net/badge/color/90BE6D/90BE6D?label=" alt="Color Badge 90BE6D" />
  <img src="https://badgen.net/badge/color/43AA8B/43AA8B?label=" alt="Color Badge 43AA8B" />
  <img src="https://badgen.net/badge/color/4D908E/4D908E?label=" alt="Color Badge 4D908E" />
  <img src="https://badgen.net/badge/color/577590/577590?label=" alt="Color Badge 577590" />
  <img src="https://badgen.net/badge/color/555555/555555?label=" alt="Color Badge 555555" />
  <img src="https://badgen.net/badge/color/277DA1/277DA1?label=" alt="Color Badge 277DA1" />
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

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
