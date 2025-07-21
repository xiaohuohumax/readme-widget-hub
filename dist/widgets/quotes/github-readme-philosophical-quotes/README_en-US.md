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

## Philosophical Quotes Generator

**The philosophical quotes generator is an API that allows you to add a philosophical quote image to your GitHub README.**

[![ref-repo]](https://github.com/markstanl/github-readme-philosophical-quotes/)
[![ref-online-tool]](https://philosophical-quotes-demo-site.vercel.app/)
[![ref-official-doc]](https://github.com/markstanl/github-readme-philosophical-quotes/)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `author` | `string` |  |  | This parameter allows you to filter the quotes by the name of the philosopher who said the quote. It is case-insensitive. | Example: `&author=Jean-Jacques Rousseau`. |
| `theme` | `string` |  |  | This parameter allows you to filter the quotes by the theme, i.e., the color scheme, [available themes](https://github.com/markstanl/github-readme-philosophical-quotes/blob/express/theme/README.md). |  |
| `daily-quote` | `boolean` |  |  | If you would rather only have the quote generated daily, you can use this parameter. It will only generate a new quote once per day. Any value makes this work. |  |
| `daily-seed` | `string` |  |  | If you don't like your friends to have the same quote as you, use a random seed. | This also shuffles the array, you can check the algorithm that does this in the [shuffle.mjs](https://github.com/markstanl/github-readme-philosophical-quotes/blob/express/methods/shuffle.mjs) file. |
| `quote` | `string` |  |  | This parameter allows you to generate a specific quote. Simply put in the quote you would like to generate. | Example: `&quote=My%20Quote`. |
| `include-ids` | `number` |  |  | This parameter allows you to restrict generation to only include certain ID values. | Example: `&include-ids=1,18,6`. |
| `exclude-ids` | `number` |  |  | This parameter allows you to restrict certain ID values from the generation. | Example: `&exclude-ids=1,2,3`. |

</details>

```txt
https://github-readme-philosophical-quotes.vercel.app/api/generate-image{?theme,author,daily-quote,quote,include-ids,exclude-ids}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

#### Theme yeblu, autor, include id and exclude id

```markdown
<!-- Philosophical Quotes Generator -->
![Philosophical Quotes Generator](https://github-readme-philosophical-quotes.vercel.app/api/generate-image?theme=yeblu&author=Jean-Jacques%20Rousseau&daily-quote=true&include-ids=11&exclude-ids=2)
```

<div>
  <img src="https://github-readme-philosophical-quotes.vercel.app/api/generate-image?theme=yeblu&#38;author=Jean-Jacques%20Rousseau&#38;daily-quote=true&#38;include-ids=11&#38;exclude-ids=2" alt="Theme yeblu, autor, include id and exclude id" />
</div>

#### Theme calm and daily quote

```markdown
<!-- Philosophical Quotes Generator -->
![Philosophical Quotes Generator](https://github-readme-philosophical-quotes.vercel.app/api/generate-image?theme=calm&daily-quote=true)
```

<div>
  <img src="https://github-readme-philosophical-quotes.vercel.app/api/generate-image?theme=calm&#38;daily-quote=true" alt="Theme calm and daily quote" />
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
