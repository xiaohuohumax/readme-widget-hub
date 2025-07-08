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

## GitHub Readme Profile

**Generate your Stats GitHub Profile in SVG.**

[![ref-repo]](https://github.com/FajarKim/github-readme-profile)
[![ref-online-tool]](https://gh-readme-profile-generator.vercel.app/)
[![ref-official-doc]](https://github.com/FajarKim/github-readme-profile)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `username` | `string` | `true` |  | Username registered in GitHub. | Example: `FajarKim`. |
| `title_color` | `string` |  | `2f80ed` | Card's title color | Format: `HEX` e.g. `FF0000`. |
| `text_color` | `string` |  | `434d58` | Body text color | Format: `HEX` e.g. `FF0000`. |
| `icon_color` | `string` |  | `4c71f2` | Icons color | Format: `HEX` e.g. `FF0000`. |
| `border_color` | `string` |  | `e4e2e2` | Card's border color | Format: `HEX` e.g. `FF0000`.Does not apply when `hide_border` is enabled. |
| `bg_color` | `string` |  | `fffefe` | Card's background color. | Format: `HEX`, `gradient(angle,start,end)` e.g. `FF0000`, `30,E96443,904E95`. |
| `stroke_color` | `string` |  | `e4e2e2` | Profile image border color | Format: `HEX` e.g. `FF0000`. Does not apply when `hide_stroke` is enabled. |
| `username_color` | `string` |  | `434d58` | Username text color | Format: `HEX` e.g. `FF0000`. |
| `theme` | `string` |  | `default` | Name of the theme, choose from [all available themes](https://github.com/FajarKim/github-readme-profile/tree/master/themes) | Supported: `default`, `transparent`, `dark` or `highcontrast`. |
| `title` | `string` |  |  | Custom title text for the card | Before use, encode the text to URL format using a tool like [URL Encoder](https://www.urlencoder.org/). |
| `locate` | `string` |  | `en` | Locate (language) | Supported: `en`, `ar`, `fr`, `id`, `ja` or `ko`. |
| `border_width` | `number` |  | `1` | Sets the border's width manually |  |
| `border_radius` | `number` |  | `4.5` | Corner rounding on the card |  |
| `hide` | `string` |  |  | Hides the [specified items](https://github.com/FajarKim/github-readme-profile#hiding-individual-stats) from stats | Example: `&hide=repos,stars,forks,commits,prs,prs_merged,issues,contributed`. |
| `show` | `string` |  |  | Shows [additional items](https://github.com/FajarKim/github-readme-profile?tab=readme-ov-file#showing-additional-individual-stats) on stats card | Example: `&show=reviews,issues_closed,discussions_started,discussions_answered`. |
| `format` | `string` |  | `svg` | 输出格式卡片选项 | Supported: `svg`, `png`, `json`, or `xml`. |
| `disabled_animations` | `boolean` |  | `false` | Disables all animations in the card | Supported:`false` or `true`. |
| `hide_border` | `string` |  | `false` | Hides the card's border | Supported: `false` or `true`. |
| `hide_stroke` | `boolean` |  | `false` | Hides the image's profile stroke in the card | Supported: `false` or `true`. |
| `revert` | `boolean` |  | `false` | Inverts the display order, positioning stats to the left and the image to the right. | Supported: `false` or `true`. |
| `photo_quality` | `number` |  | `15` | Quality of the profile image | Repesentada pela porcentagem (1-100). |
| `photo_resize` | `number` |  | `150` | Resize the profile image to a specific width | In pixels. Minimum allowed value is 10px. |

</details>

```txt
https://gh-readme-profile.vercel.app/api{?username,title_color,text_color,icon_color,border_color,bg_color,stroke_color,username_color,theme,title,locate,border_width,border_radius,hide,show,format,disabled_animations,hide_border,hide_stroke,revert,photo_quality,photo_resize}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

#### Card in Portuguese

```markdown
<!-- FajarKim GitHub Readme Profile -->
![GitHub Readme Profile](https://gh-readme-profile.vercel.app/api?username=FajarKim&theme=iceberg&locale=pt-BR&hide=forks,prs&show=reviews,issues_closed,discussions_started,discussions_answered)
```

<div>
  <img src="https://gh-readme-profile.vercel.app/api?username=FajarKim&#38;theme=iceberg&#38;locale=pt-BR&#38;hide=forks,prs&#38;show=reviews,issues_closed,discussions_started,discussions_answered" alt="GitHub Readme Profile" />
</div>

#### Card in English

```markdown
<!-- FajarKim GitHub Readme Profile -->
![GitHub Readme Profile](https://gh-readme-profile.vercel.app/api?username=FajarKim&theme=duskfox&hide=commits,prs,prs_merged,issues,contributed)
```

<div>
  <img src="https://gh-readme-profile.vercel.app/api?username=FajarKim&#38;theme=duskfox&#38;hide=commits,prs,prs_merged,issues,contributed" alt="GitHub Readme Profile" />
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
