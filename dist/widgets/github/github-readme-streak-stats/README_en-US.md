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

## Github Readme Streak Stats

**Display your total contributions, current streak, and longest streak on your GitHub profile README.**

[![ref-repo]](https://github.com/DenverCoder1/github-readme-streak-stats)
[![ref-online-tool]](https://streak-stats.demolab.com/demo/)
[![ref-official-doc]](https://github.com/DenverCoder1/github-readme-streak-stats?tab=readme-ov-file#-options)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `user` | `string` | `true` |  | GitHub username |  |
| `theme` | `string` |  | `default` | The theme to apply | Supported: `default` `dark` `highcontrast` `transparent` `radical` and more, please refer to [themes](https://github.com/DenverCoder1/github-readme-streak-stats/blob/main/docs/themes.md). |
| `hide_border` | `boolean` |  | `false` | Make the border transparent |  |
| `border_radius` | `number` |  | `4.5` | Set the roundness of the edges | Between: `0` (sharp corners) to 248 (ellipse). |
| `background` | `string` |  |  | Background color | Format: `angle,color1,color2,...` for example: `180,#fff,#000`, color format: `HEX` or `CSS color` for example: `FF0000`. |
| `border` | `string` |  |  | Border color | Format: `HEX` or `CSS color` for example: `FF0000`. |
| `stroke` | `string` |  |  | Stroke line color between sections | Format: `HEX` or `CSS color` for example: `FF0000`. |
| `ring` | `string` |  |  | Color of the ring around the current streak | Format: `HEX` or `CSS color` for example: `FF0000`. |
| `fire` | `string` |  |  | Color of the fire in the ring | Format: `HEX` or `CSS color` for example: `FF0000`. |
| `currStreakNum` | `string` |  |  | Current streak number | Format: `HEX` or `CSS color` for example: `FF0000`. |
| `sideNums` | `string` |  |  | Total and longest streak numbers | Format: `HEX` or `CSS color` for example: `FF0000`. |
| `currStreakLabel` | `string` |  |  | Current streak label | Format: `HEX` or `CSS color` for example: `FF0000`. |
| `sideLabels` | `string` |  |  | Total and longest streak labels | Format: `HEX` or `CSS color` for example: `FF0000`. |
| `dates` | `string` |  |  | Date range text color | Format: `HEX` or `CSS color` for example: `FF0000`. |
| `excludeDaysLabel` | `string` |  |  | Excluded days of the week text color | Format: `HEX` or `CSS color` for example: `FF0000`. |
| `date_format` | `string` |  |  | Date format pattern or empty for locale format | Format reference: [PHP's date function](https://www.php.net/manual/zh/datetime.format.php#refsect1-datetime.format-parameters)，示例：[example](https://www.php.net/manual/zh/datetime.format.php#refsect1-datetime.format-parameters). |
| `locale` | `string` |  | `en` | Locale for labels and numbers | Format reference: [Locales](https://github.com/DenverCoder1/github-readme-streak-stats?tab=readme-ov-file#-locales). |
| `short_numbers` | `boolean` |  |  | Use short numbers |  |
| `type` | `string` |  | `svg` | Output format | Supported:`svg` `json` `png`. |
| `mode` | `string` |  | `daily` | Streak mode | Supported: `daily` `weekly`. |
| `exclude_days` | `string` |  |  | List of days of the week to exclude from streaks | Supported: `Sun` `Mon` `Tue` `Wed` `Thu` `Fri` `Sat` separate values with `,`. |
| `disable_animations` | `boolean` |  | `false` | Disable SVG animations |  |
| `card_width` | `number` |  | `495` | Width of the card in pixels | Unit: pixels, minimum width is 100px per column. |
| `card_height` | `number` |  | `195` | Height of the card in pixels | Unit: pixels, minimum height is 170px. |
| `hide_total_contributions` | `boolean` |  | `false` | Hide the total contributions |  |
| `hide_current_streak` | `boolean` |  | `false` | Hide the current streak |  |
| `hide_longest_streak` | `boolean` |  | `false` | Hide the longest streak |  |
| `starting_year` | `number` |  |  | Starting year of contributions |  |

</details>

```txt
https://streak-stats.demolab.com/{?user,theme,hide_border,border_radius,background,border,stroke,ring,fire,currStreakNum,sideNums,currStreakLabel,sideLabels,dates,excludeDaysLabel,date_format,locale,short_numbers,type,mode,exclude_days,disable_animations,card_width,card_height,hide_total_contributions,hide_current_streak,hide_longest_streak,starting_year}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- DenverCoder1 -->
![GitHub Streak](https://streak-stats.demolab.com/?user=DenverCoder1&theme=dark&hide_border=true)
```

<div>
  <img src="https://streak-stats.demolab.com/?user=DenverCoder1&#38;theme=dark&#38;hide_border=true" alt="GitHub Streak" />
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
