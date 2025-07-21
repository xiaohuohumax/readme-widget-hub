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

## Daily Quotes Card

**Inspiring Quotes on your GitHub Profile**

[![ref-repo]](https://github.com/cheehwatang/github-readme-daily-quotes)
[![ref-official-doc]](https://github.com/cheehwatang/github-readme-daily-quotes)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `theme` | `string` |  | `github_dark` | [all available themes](https://github.com/cheehwatang/github-readme-daily-quotes/blob/master/src/app/themes/README.md). |  |
| `font` | `string` |  | `helvetica` | [all available fonts](https://github.com/cheehwatang/github-readme-daily-quotes/blob/master/src/app/fonts/README.md). |  |
| `quote` | `string` |  |  | Customize your quote. |  |
| `author` | `string` |  |  | The name of the quote's author. |  |
| `category` | `string` |  |  | [all available categories](https://github.com/cheehwatang/github-readme-daily-quotes#quotes-from-category). |  |
| `bg_color` | `string` |  | `0d1117` | Card's background color (hex color). |  |
| `quote_color` | `string` |  | `58a6ff` | Quote text color (hex color). |  |
| `author_color` | `string` |  | `c3d1d9` | Author text color (hex color). |  |
| `accent_color` | `string` |  | `1f6feb` | Accent color for the quotation marks and spacer (hex color). |  |
| `border_color` | `string` |  | `e4e2e2` | Card's border color (hex color). |  |
| `border_width` | `number` |  | `1` | Card's border width (in px) (range from 0 - 5). |  |
| `border_radius` | `number` |  | `8` | Card's border radius (in px) (range from 0 - 40). |  |

</details>

```txt
https://readme-daily-quotes.vercel.app/api{?theme,font,quote,author,category,bg_color,quote_color,author_color,accent_color,border_color,border_width,userId}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

#### Light theme and programming category

```markdown
<!-- Github Readme Daily Quotes -->
![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?theme=light&category=programming)
```

<div>
  <img src="https://readme-daily-quotes.vercel.app/api?theme=light&#38;category=programming" alt="Github Readme Daily Quotes" />
</div>

#### Font Garamond and theme Radical

```markdown
![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?font=garamond&theme=radical)
```

<div>
  <img src="https://readme-daily-quotes.vercel.app/api?font=garamond&#38;theme=radical" alt="Github Readme Daily Quotes" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-action-outputs]: https://img.shields.io/badge/Action%20Outputs-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
