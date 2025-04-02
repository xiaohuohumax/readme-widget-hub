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

## Shields.io

**Concise, consistent, and legible badges in SVG and raster format.**

[![ref-repo]](https://github.com/badges/shields)
[![ref-online-tool]](https://shields.io/badges)
[![ref-official-doc]](https://shields.io/badges)

> [!Tip]
> Due to the large number of badge types supported by this project and its powerful functions, here is a simple introduction to static badges. For other badge types, please refer to the official documentation.

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `badgeContent` | `string` | `true` |  | Label, (optional) message, and color. Separated by dashes | Example: `build-passing-brightgreen`. |
| ![ref-querys] | | | | | |
| `style` | `string` |  | `flat` | Badge style | Possible values: `flat` `flat-square` `plastic` `for-the-badge` `social`. |
| `logo` | `string` |  |  | Icon slug from simple-icons | You can click the icon title on [simple-icons](https://simpleicons.org/) to copy the slug or they can be found in the [slugs.md file](https://github.com/simple-icons/simple-icons/blob/master/slugs.md) in the simple-icons repository. [Further](https://shields.io/docs/logos) info. |
| `logoColor` | `string` |  |  | The color of the logo | Supported: `hex`, `rgb`, `rgba`, `hsl`, `hsla` and `css named colors`. Supported for simple-icons logos but not for custom logos. |
| `logoSize` | `string` |  |  | Make icons adaptively resize by setting `auto` | Useful for some wider logos like `amd` and `amg`. Supported for simple-icons logos but not for custom logos. |
| `label` | `string` |  |  | Override the default left-hand-side text | [URL-Encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding) needed for spaces or special characters!. |
| `labelColor` | `string` |  |  | The color of the logo | Supported: `hex`, `rgb`, `rgba`, `hsl`, `hsla` and `css named colors`. Supported for simple-icons logos but not for custom logos. |
| `color` | `string` |  |  | Background color of the right part | Supported: `hex`, `rgb`, `rgba`, `hsl`, `hsla` and `css named colors`. |
| `cacheSeconds` | `string` |  | `3600` | HTTP cache lifetime | Unit: seconds. Rules are applied to infer a default value on a per-badge basis. Any values specified below the default will be ignored. |
| `link` | `string` |  |  | Specify the action to perform when clicking the left/right side of the badge | Note: This only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language. |

</details>

```txt
https://img.shields.io/badge/{badgeContent}{?style,logo,logoColor,logoSize,label,labelColor,color,cacheSeconds,link}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- badges/shields -->
![Static Badge](https://img.shields.io/badge/badges/shields-555555?logo=github)
```

<img src="https://img.shields.io/badge/badges/shields-555555?logo=github" alt="Static Badge" width="" height="" />

```markdown
![Color Badge](https://img.shields.io/badge/F94144-F94144)
```

<img src="https://img.shields.io/badge/F94144-F94144" alt="Color Badge F94144" width="" height="" />
<img src="https://img.shields.io/badge/F3722C-F3722C" alt="Color Badge F3722C" width="" height="" />
<img src="https://img.shields.io/badge/F8961E-F8961E" alt="Color Badge F8961E" width="" height="" />
<img src="https://img.shields.io/badge/F9844A-F9844A" alt="Color Badge F9844A" width="" height="" />
<img src="https://img.shields.io/badge/F9C74F-F9C74F" alt="Color Badge F9C74F" width="" height="" />
<img src="https://img.shields.io/badge/90BE6D-90BE6D" alt="Color Badge 90BE6D" width="" height="" />
<img src="https://img.shields.io/badge/43AA8B-43AA8B" alt="Color Badge 43AA8B" width="" height="" />
<img src="https://img.shields.io/badge/4D908E-4D908E" alt="Color Badge 4D908E" width="" height="" />
<img src="https://img.shields.io/badge/577590-577590" alt="Color Badge 577590" width="" height="" />
<img src="https://img.shields.io/badge/555555-555555" alt="Color Badge 555555" width="" height="" />
<img src="https://img.shields.io/badge/277DA1-277DA1" alt="Color Badge 277DA1" width="" height="" />

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
