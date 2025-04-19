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

## Lanyard Profile Readme

**Discord Presence in your GitHub Profile.**

[![ref-repo]](https://github.com/cnrad/lanyard-profile-readme)
[![ref-online-tool]](https://lanyard.cnrad.dev/)
[![ref-official-doc]](https://github.com/cnrad/lanyard-profile-readme?tab=readme-ov-file#usage)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `discordId` | `string` | `true` |  | Discord User ID |  |
| ![ref-querys] | | | | | |
| `theme` | `string` |  | `dark` | Theme | Supported: `light` `dark`. |
| `bg` | `string` |  |  | Background Color | Format: `HEX`, e.g. `FF0000`. |
| `borderRadius` | `string` |  | `10px` | Border Radius | Format: `CSS width value`, e.g. `10px` `1em`. |
| `animated` | `boolean` |  | `true` | Toggle Animated Avatar | Supported: `true` `false`. |
| `idleMessage` | `string` |  |  | Custom Idle Message |  |
| `showDisplayName` | `boolean` |  | `false` | Show Global Display Name and Username | Supported: `true` `false`. |
| `hideDecoration` | `boolean` |  | `false` | Hide Avatar Decoration | Supported: `true` `false`. |
| `animatedDecoration` | `boolean` |  | `false` | Enable Animated Avatar Decoration | Supported: `true` `false`. |
| `hideStatus` | `boolean` |  | `false` | Hide Status | Supported: `true` `false`. |
| `hideTimestamp` | `boolean` |  | `false` | Hide Elapsed Time | Supported: `true` `false`. |
| `hideBadges` | `boolean` |  | `false` | Hide Badges | Supported: `true` `false`. |
| `hideProfile` | `boolean` |  | `false` | Hide Profile | Supported: `true` `false`. |
| `hideActivity` | `boolean` |  | `false` | Hide Activity | Supported: `true` `false`. |
| `hideSpotify` | `boolean` |  | `false` | Hide Spotify | Supported: `true` `false`. |
| `ignoreAppId` | `string` |  |  | Hide App by ID  | Format: `appId1,appId2,appId3`. |

</details>

```txt
https://lanyard.cnrad.dev/api/{discordId}{?theme,bg,borderRadius,animated,idleMessage,showDisplayName,hideDecoration,animatedDecoration,hideStatus,hideTimestamp,hideBadges,hideProfile,hideActivity,hideSpotify,ignoreAppId}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- cnrad -->
![Discord](https://lanyard.cnrad.dev/api/705665813994012695)
```

<div>
  <img src="https://lanyard.cnrad.dev/api/705665813994012695" alt="Discord" />
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
