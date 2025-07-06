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

## GitHub Readme Stats

**Get dynamically generated GitHub stats on your READMEs!**

[![ref-repo]](https://github.com/anuraghazra/github-readme-stats)
[![ref-official-doc]](https://github.com/anuraghazra/github-readme-stats?tab=readme-ov-file#features-)

> [!Tip]
> Due to the many card types supported by this project and its powerful features, here is a simple introduction to the GitHub status card. For other card types, please refer to the official documentation.

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `username` | `string` |  |  | GitHub username |  |
| `title_color` | `string` |  | `2F80ED` | Card's title color | Supported: `HEX`, e.g. `FF0000`. |
| `text_color` | `string` |  | `434D58` | Body text color | Supported: `HEX`, e.g. `FF0000`. |
| `icon_color` | `string` |  | `4C71F2` | Icons color if available | Supported: `HEX`, e.g. `FF0000`. |
| `border_color` | `string` |  | `E4E2E2` | Card's border color | Supported: `HEX`, e.g. `FF0000`. does not apply when `hide_border` is enabled. |
| `hide_border` | `boolean` |  | `false` | Hides the card's border |  |
| `theme` | `string` |  |  | Name of the theme | Supported: `dark` `radical` `merko` `gruvbox` `tokyonight` `onedark` `cobalt` `synthwave` `highcontrast` `dracula` `transparent`. |
| `cache_seconds` | `number` |  | `21600` | Sets the cache header manually | Unit: seconds, range: `21600` to `86400`. |
| `locale` | `string` |  | `en` | Sets the language in the card | Language reference: [locales](https://github.com/anuraghazra/github-readme-stats?tab=readme-ov-file#available-locales). |
| `border_radius` | `number` |  | `4.5` | Corner rounding on the card |  |
| `hide` | `string` |  |  | Hides the [specified items](https://github.com/anuraghazra/github-readme-stats#hiding-individual-stats) from stats | Data types are separated by `,`. |
| `show` | `string` |  |  | Shows [additional items](https://github.com/anuraghazra/github-readme-stats#showing-additional-individual-stats) on stats card | Data types are separated by `,`. |
| `show_icons` | `boolean` |  | `true` | To enable icons |  |
| `bg_color` | `string` |  |  | Card's background color | Background color supports gradients, format: `deg,color1,color2,color3,...`. |

</details>

```txt
https://github-readme-stats.vercel.app/api{?username,title_color,text_color,icon_color,border_color,hide_border,theme,cache_seconds,locale,border_radius,hide,show,show_icons,bg_color}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- anuraghazra -->
![GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra)
```

<div>
  <img src="https://github-readme-stats.vercel.app/api?username=anuraghazra" alt="GitHub stats" />
</div>

```markdown
<!-- anuraghazra -->
![GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&locale=cn&theme=dark&hide_border=true)
```

<div>
  <img src="https://github-readme-stats.vercel.app/api?username=anuraghazra&#38;locale=cn&#38;theme=dark&#38;hide_border=true" alt="GitHub stats" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-action-outputs]: https://img.shields.io/badge/Action%20Outputs-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
