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

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- badges/shields -->
![Static Badge](https://img.shields.io/badge/badges/shields-555555?logo=github)
```

<div>
  <img src="https://img.shields.io/badge/badges/shields-555555?logo=github" alt="Static Badge" />
</div>

```markdown
![Color Badge](https://img.shields.io/badge/F94144-F94144)
```

<div>
  <img src="https://img.shields.io/badge/F94144-F94144" alt="Color Badge F94144" />
  <img src="https://img.shields.io/badge/F3722C-F3722C" alt="Color Badge F3722C" />
  <img src="https://img.shields.io/badge/F8961E-F8961E" alt="Color Badge F8961E" />
  <img src="https://img.shields.io/badge/F9844A-F9844A" alt="Color Badge F9844A" />
  <img src="https://img.shields.io/badge/F9C74F-F9C74F" alt="Color Badge F9C74F" />
  <img src="https://img.shields.io/badge/90BE6D-90BE6D" alt="Color Badge 90BE6D" />
  <img src="https://img.shields.io/badge/43AA8B-43AA8B" alt="Color Badge 43AA8B" />
  <img src="https://img.shields.io/badge/4D908E-4D908E" alt="Color Badge 4D908E" />
  <img src="https://img.shields.io/badge/577590-577590" alt="Color Badge 577590" />
  <img src="https://img.shields.io/badge/555555-555555" alt="Color Badge 555555" />
  <img src="https://img.shields.io/badge/277DA1-277DA1" alt="Color Badge 277DA1" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/Path%20Params-526E86

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-action-outputs]: https://img.shields.io/badge/Action%20Outputs-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/Online%20Tools-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
