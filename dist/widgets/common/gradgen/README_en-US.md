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

## Gradgen

**Gradgen is a simple yet powerful Cloudflare worker that enhances your badges from [badgen.net](https://badgen.net/) with stunning gradients.**

[![ref-repo]](https://github.com/bokub/gradgen)
[![ref-official-doc]](https://github.com/bokub/gradgen?tab=readme-ov-file#usage)

> [!Tip]
> Since this project's badges are based on [badgen.net](https://badgen.net/), the configuration parameters can be directly referred to [badgen.net help](https://badgen.net/help). The following configuration only shows the extended parameters of this project.

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `badgenNetParams` | `any` | `true` |  | [badgen.net Badge path parameters](https://badgen.net/help) | For example: `static/...` (Static badges) `github/...` (Github-related). |
| ![ref-querys] | | | | | |
| `gradient` | `string` |  |  | Gradient | Format: `color1,color2` Color format: `HEX` `CSS color name`. |
| `style` | `string` |  |  | Badge style | Supported: `flat`. |
| `badgenNetQuerys` | `any` |  |  | [badgen.net Badge query parameters](https://badgen.net/help) | For example: `color` (Icon color) `icon` (Icon) etc. |

</details>

```txt
https://gradgen.bokub.workers.dev/{badgenNetParams}{?gradient,badgenNetQuerys
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
![Gradgen](https://gradgen.bokub.workers.dev/github/checks/nodejs/node?gradient=F3722C,F94144&style=flat)
```

<div>
  <img src="https://gradgen.bokub.workers.dev/github/checks/nodejs/node?gradient=F3722C,F94144" alt="Gradgen Default" />
  <img src="https://gradgen.bokub.workers.dev/github/checks/nodejs/node?gradient=F3722C,F94144&#38;style=flat" alt="Gradgen Flat" />
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
