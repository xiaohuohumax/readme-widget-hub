<a name="readme-top"></a>

<div align="center">
  <div>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=160&section=header">
  </div>
  <a href="https://github.com/xiaohuohumax/badge-collection">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&height=68&lines=%F0%9F%8E%96%EF%B8%8FBadge+Collection%F0%9F%8E%96%EF%B8%8F"/>
  </a>
  <p><b>Here&#39;s a curated list of badges used in trending GitHub projects, along with online tools to create them.</b></p>
  <div>
    <b>
       <a href="/README_en-US.md">Home</a>
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

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- DenverCoder1 -->
![GitHub Streak](https://streak-stats.demolab.com/?user=DenverCoder1&theme=dark&hide_border=true)
```

<div>
  <img src="https://streak-stats.demolab.com/?user=DenverCoder1&#38;theme=dark&#38;hide_border=true" alt="GitHub Streak" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/Path%20Params-526E86

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

<!-- https://ionic.io/ionicons people-circle-outline -->

[ref-need-register]: https://img.shields.io/badge/Need%20Register-E37945?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI1NiA0NjRjLTExNC42OSAwLTIwOC05My4zMS0yMDgtMjA4UzE0MS4zMSA0OCAyNTYgNDhzMjA4IDkzLjMxIDIwOCAyMDgtOTMuMzEgMjA4LTIwOCAyMDh6bTAtMzg0Yy05NyAwLTE3NiA3OS0xNzYgMTc2czc5IDE3NiAxNzYgMTc2IDE3Ni03OC45NSAxNzYtMTc2UzM1My4wNSA4MCAyNTYgODB6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMyMy42NyAyOTJjLTE3LjQgMC0zNC4yMS03LjcyLTQ3LjM0LTIxLjczYTgzLjc2IDgzLjc2IDAgMDEtMjItNTEuMzJjLTEuNDctMjAuNyA0Ljg4LTM5Ljc1IDE3Ljg4LTUzLjYyUzMwMy4zOCAxNDQgMzIzLjY3IDE0NGMyMC4xNCAwIDM4LjM3IDcuNjIgNTEuMzMgMjEuNDZzMTkuNDcgMzMgMTggNTMuNTFhODQgODQgMCAwMS0yMiA1MS4zQzM1Ny44NiAyODQuMjggMzQxLjA2IDI5MiAzMjMuNjcgMjkyem01NS44MS03NHpNMTYzLjgyIDI5NS4zNmMtMjkuNzYgMC01NS45My0yNy41MS01OC4zMy02MS4zMy0xLjIzLTE3LjMyIDQuMTUtMzMuMzMgMTUuMTctNDUuMDhzMjYuMjItMTggNDMuMTUtMTggMzIuMTIgNi40NCA0My4wNyAxOC4xNCAxNi41IDI3LjgyIDE1LjI1IDQ1Yy0yLjQ0IDMzLjc3LTI4LjYgNjEuMjctNTguMzEgNjEuMjd6TTQyMC4zNyAzNTUuMjhjLTEuNTktNC43LTUuNDYtOS43MS0xMy4yMi0xNC40Ni0yMy40Ni0xNC4zMy01Mi4zMi0yMS45MS04My40OC0yMS45MS0zMC41NyAwLTYwLjIzIDcuOS04My41MyAyMi4yNS0yNi4yNSAxNi4xNy00My44OSAzOS43NS01MSA2OC4xOC0xLjY4IDYuNjktNC4xMyAxOS4xNC0xLjUxIDI2LjExYTE5Mi4xOCAxOTIuMTggMCAwMDIzMi43NS04MC4xN3pNMTYzLjYzIDQwMS4zN2M3LjA3LTI4LjIxIDIyLjEyLTUxLjczIDQ1LjQ3LTcwLjc1YTggOCAwIDAwLTIuNTktMTMuNzdjLTEyLTMuODMtMjUuNy01Ljg4LTQyLjY5LTUuODgtMjMuODIgMC00OS4xMSA2LjQ1LTY4LjE0IDE4LjE3LTUuNCAzLjMzLTEwLjcgNC42MS0xNC43OCA1Ljc1YTE5Mi44NCAxOTIuODQgMCAwMDc3Ljc4IDg2LjY0bDEuNzktLjE0YTEwMi44MiAxMDIuODIgMCAwMTMuMTYtMjAuMDJ6Ii8+PC9zdmc+

<!-- https://ionic.io/ionicons link-outline -->

[ref-online-tool]: https://img.shields.io/badge/Online%20Tools-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+

<!-- https://ionic.io/ionicons book-outline -->

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=

<!-- https://ionic.io/ionicons image-outline -->

[ref-static-badge]: https://img.shields.io/badge/Static%20Badge-90BE6D?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHJlY3QgeD0iNDgiIHk9IjgwIiB3aWR0aD0iNDE2IiBoZWlnaHQ9IjM1MiIgcng9IjQ4IiByeT0iNDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4Ii8+PGNpcmNsZSBjeD0iMzM2IiBjeT0iMTc2IiByPSIzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MzJweCIvPjxwYXRoIGQ9Ik0zMDQsMzM1Ljc5LDIxMy4zNCwyNDUuM0EzMiwzMiwwLDAsMCwxNjkuNDcsMjQ0TDQ4LDM1MiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgiLz48cGF0aCBkPSJNMjI0LDQzMiwzNDcuMzQsMzA4LjY2YTMyLDMyLDAsMCwxLDQzLjExLTJMNDY0LDM2OCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgiLz48L3N2Zz4=

<!-- https://ionic.io/ionicons key-outline -->

[ref-need-auth]: https://img.shields.io/badge/Need%20Auth-43AA8B?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIxOC4xLDE2Ny4xN2MwLDEzLDAsMjUuNiw0LjEsMzcuNC00My4xLDUwLjYtMTU2LjksMTg0LjMtMTY3LjUsMTk0LjVhMjAuMTcsMjAuMTcsMCwwLDAtNi43LDE1YzAsOC41LDUuMiwxNi43LDkuNiwyMS4zLDYuNiw2LjksMzQuOCwzMyw0MCwyOCwxNS40LTE1LDE4LjUtMTksMjQuOC0yNS4yLDkuNS05LjMtMS0yOC4zLDIuMy0zNnM2LjgtOS4yLDEyLjUtMTAuNCwxNS44LDIuOSwyMy43LDNjOC4zLjEsMTIuOC0zLjQsMTktOS4yLDUtNC42LDguNi04LjksOC43LTE1LjYuMi05LTEyLjgtMjAuOS0zLjEtMzAuNHMyMy43LDYuMiwzNCw1LDIyLjgtMTUuNSwyNC4xLTIxLjYtMTEuNy0yMS44LTkuNy0zMC43Yy43LTMsNi44LTEwLDExLjQtMTFzMjUsNi45LDI5LjYsNS45YzUuNi0xLjIsMTIuMS03LjEsMTcuNC0xMC40LDE1LjUsNi43LDI5LjYsOS40LDQ3LjcsOS40LDY4LjUsMCwxMjQtNTMuNCwxMjQtMTE5LjJTNDA4LjUsNDgsMzQwLDQ4LDIxOC4xLDEwMS4zNywyMTguMSwxNjcuMTdaTTQwMCwxNDRhMzIsMzIsMCwxLDEtMzItMzJBMzIsMzIsMCwwLDEsNDAwLDE0NFoiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4Ii8+PC9zdmc+
