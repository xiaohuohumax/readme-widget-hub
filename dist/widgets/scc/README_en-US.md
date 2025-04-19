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

## Sloc Cloc and Code

**scc is a very fast accurate code counter with complexity calculations and COCOMO estimates written in pure Go.**

[![ref-repo]](https://github.com/boyter/scc/)
[![ref-official-doc]](https://github.com/boyter/scc/?tab=readme-ov-file#badges-beta)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `provider` | `string` | `true` |  | Provider | Supported: `github`. |
| `user` | `string` | `true` |  | Username |  |
| `repo` | `string` | `true` |  | Repository name |  |
| ![ref-querys] | | | | | |
| `category` | `string` |  | `code` | Category | Supported: `code` `blanks` `lines` `comments` `cocomo`. |
| `avg-wage` | `number` |  | `56286` | Average wage | Value must be a positive integer, otherwise it will be restored to the default value `56286`. |
| `lower` | `boolean` |  |  | Lowercase title text |  |
| `font-color` | `string` |  |  | Font color | Supported: `HEX`, e.g. `FF0000`. |
| `font-shadow-color` | `string` |  |  | Font shadow color | Supported: `HEX`, e.g. `FF0000`. |
| `top-shadow-accent-color` | `string` |  |  | Top shadow accent color | Supported: `HEX`, e.g. `FF0000`. |
| `title-bg-color` | `string` |  |  | Title background color | Supported: `HEX`, e.g. `FF0000`. |
| `badge-bg-color` | `string` |  |  | Badge background color | Supported: `HEX`, e.g. `FF0000`. |

</details>

```txt
https://sloc.xyz/{provider}/{user}/{repo}{?category,avg-wage,lower,font-color,font-shadow-color,top-shadow-accent-color,title-bg-color,badge-bg-color}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- xiaohuohumax/readme-widget-hub -->
![Total lines](https://sloc.xyz/github/xiaohuohumax/readme-widget-hub)
```

<div>
  <img src="https://sloc.xyz/github/xiaohuohumax/readme-widget-hub" alt="Total lines" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/Path%20Params-526E86

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-action-outputs]: https://img.shields.io/badge/Action%20Outputs-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
