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

## Version Badge

**Generate version badges for various types of projects (Python, Go, npm, PHP, Github, etc.).**

[![ref-online-tool]](https://badge.fury.io/)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `type` | `string` | `true` |  | Badge type | Supported: `js` (npm) `rb` (Ruby) `py` (Python) `go` (Go) `bo` (Bower) `gh` (Github) `nu` (NuGet) `ph` (PHP) `co` (CocoaPods) `pl` (Perl) `pg` (PGXN). |
| `packageName` | `string` | `true` |  | Package name | Escape special characters, such as `/` to `%2F`. |
| `format` | `string` | `true` |  | Format | Supported: `.svg` `.png` `@2x.png`. |
| ![ref-querys] | | | | | |
| `icon` | `string` |  |  | Icon | Fixed prefix: `si%3A` for example: `icon=si%3Agithub`. |
| `icon_color` | `string` |  |  | Icon color | Format: `HEX` for example: `#FF0000`. |

</details>

```txt
https://badge.fury.io/{type}/{packageName}{format}{?icon,icon_color}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- xiaohuohumax/auto-unpack -->
![Pyhton version](https://badge.fury.io/py/auto-unpack.svg)
```

<div>
  <img src="https://badge.fury.io/py/auto-unpack.svg" alt="Pyhton version" />
</div>

```markdown
<!-- xiaohuohumax/vscode-export-profiles -->
![Github repo version](https://badge.fury.io/gh/xiaohuohumax%2Fvscode-export-profiles.svg)
```

<div>
  <img src="https://badge.fury.io/gh/xiaohuohumax%2Fvscode-export-profiles.svg" alt="Github repo version" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/Path%20Params-526E86

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-action-outputs]: https://img.shields.io/badge/Action%20Outputs-526E86

[ref-online-tool]: https://img.shields.io/badge/Online%20Tools-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+
