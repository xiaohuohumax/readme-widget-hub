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

## Codewars Readme Stats

**Display your Codewars stats at your GitHub Readme profile!**

[![ref-repo]](https://github.com/DiniFarb/codewars_readme_stats)
[![ref-official-doc]](https://github.com/DiniFarb/codewars_readme_stats)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `user` | `string` | `true` |  | Codewars username. |  |
| `name` | `boolean` |  |  | Displays the nickname instead of the username. |  |
| `top_languages` | `boolean` |  |  | Extens the card with 3 icons of the top trained languages. |  |
| `stroke` | `string` |  |  | Sets a border with the passed in color around the card. | Support: web color name, hexadecimal color value, rgb value. |
| `theme` | `string` |  |  | Sets a theme for the card. | Support: `dark` `light`. |
| `hide_clan` | `boolean` |  |  | Removes the clan name from the card. |  |
| `cache-control` | `number` |  |  | Changes the cache-control http header value. |  |
| `animation` | `boolean` |  |  | Can be used to disable the animations. |  |

</details>

```txt
https://github.r2v.ch/codewars{?user,name,top_languages,stroke,theme,hide_clan,cache_control,animation}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

#### Basic card

```markdown
<!-- dinifarb -->
![Codewars Readme Stats](https://github.r2v.ch/codewars?user=dinifarb)
```

<div>
  <img src="https://github.r2v.ch/codewars?user=dinifarb" alt="Codewars Readme Stats" />
</div>

#### Theme light, stroke and cache control

```markdown
<!-- dinifarb -->
![Codewars Readme Stats](https://github.r2v.ch/codewars?user=dinifarb&top_languages=false&stroke=%23BB432C&theme=light&cache_control=86400)
```

<div>
  <img src="https://github.r2v.ch/codewars?user=dinifarb&#38;top_languages=false&#38;stroke=%23BB432C&#38;theme=light&#38;cache_control=86400" alt="Codewars Readme Stats" />
</div>

#### Card with top language, stroke and theme

```markdown
<!-- dinifarb -->
![Codewars Readme Stats](https://github.r2v.ch/codewars?user=dinifarb&name=true&top_languages=true&stroke=%23b362ff&theme=purple_dark)
```

<div>
  <img src="https://github.r2v.ch/codewars?user=dinifarb&#38;name=true&#38;top_languages=true&#38;stroke=%23b362ff&#38;theme=purple_dark" alt="Codewars Readme Stats" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-action-outputs]: https://img.shields.io/badge/Action%20Outputs-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
