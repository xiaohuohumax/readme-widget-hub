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

## Last.fm Recently Played README

**Display your recent Last.fm scrobbles on your GitHub profile README.**

[![ref-repo]](https://github.com/JeffreyCA/lastfm-recently-played-readme)
[![ref-official-doc]](https://github.com/JeffreyCA/lastfm-recently-played-readme?tab=readme-ov-file#customization)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `user` | `string` |  |  | Last.fm username |  |
| `count` | `string` |  | `5` | Custom track count | Range: `1` to `10`. |
| `width` | `string` |  | `400` | Custom track count | Range: `300` to `1000`. |
| `loved` | `boolean` |  | `false` | Show a heart indicator for loved tracks | Supported: `true` `false`. |
| `show_user` | `string` |  | `never` | Show your username and profile picture in the specified location | Supported: `never` `always` `header` `footer`. |
| `header_style` | `string` |  | `normal` | Adjust the size of the header or hide it | Supported: `none` `compact` `normal` `compact_stats` `normal_stats` `compact_stats_only` `normal_stats_only`. |
| `footer_style` | `string` |  | `normal` | Adjust the size of the footer or hide it | Supported: `none` `wave` `compact` `normal` `compact_stats` `normal_stats`. |
| `border_radius` | `number` |  | `10` | Adjust the radius of the card | Range: `0` to `100`. |
| `loved_style` | `number` |  | `1` | Customize the indicator placement for loved tracks | Supported: `1` `2` `3` `4`. |
| `bg_color` | `string` |  | `212121` | Customize the background color of the card | Format: `RGB/A` `HEX`, e.g. `FF0000`. |
| `maxage` | `number` |  | `120` | Cache duration | Unit: seconds, Range: `60` to `3600`. |

</details>

```txt
https://lastfm-recently-played.vercel.app/api
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- JeffreyCA01 -->
![Last.fm](https://lastfm-recently-played.vercel.app/api?user=JeffreyCA01)
```

<div>
  <img src="https://lastfm-recently-played.vercel.app/api?user=JeffreyCA01" alt="Last.fm" />
</div>

```markdown
<!-- JeffreyCA01 -->
![Last.fm](https://lastfm-recently-played.vercel.app/api?user=JeffreyCA01&width=300&count=2&header_style=none)
```

<div>
  <img src="https://lastfm-recently-played.vercel.app/api?user=JeffreyCA01&#38;width=300&#38;count=2&#38;header_style=none" alt="Last.fm" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-action-outputs]: https://img.shields.io/badge/Action%20Outputs-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
