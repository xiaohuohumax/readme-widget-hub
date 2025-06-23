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

## Discord Markdown Badge

**A customizable badge that shows your Discord account, a server invite, or a bot account.**

[![ref-repo]](https://github.com/gitlimes/dcbadge)
[![ref-official-doc]](https://github.com/gitlimes/dcbadge?tab=readme-ov-file#set-up)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `type` | `string` | `true` |  | Badge type | Supported: `server` `shield`. |
| `id` | `string` | `true` |  | ID | User ID, Bot ID, Server Invite Link, etc. |
| ![ref-querys] | | | | | |
| `style` | `string` |  | `for-the-badge` | Badge style | Supported: `flat` `flat-square` `plastic` `for-the-badge` `social`. |
| `theme` | `string` |  |  | Badge theme | Supported: `default-inverted` `clean` `clean-inverted` `discord` `discord-inverted` `full-presence` `gray` `blurple`. |
| `compact` | `boolean` |  | `false` | Makes the badge more compact |  |
| `logoColor` | `string` |  |  | Logo color | Supported: `presence` (changes color based on badge display) `CSS color value` `HEX`. |
| `bot` | `boolean` |  | `false` | Whether the account is a bot |  |

</details>

```txt
https://dcbadge.limes.pink/api/{type}/{id}{?style,theme,compact,logoColor,bot}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
![Discord User](https://dcbadge.limes.pink/api/shield/406125028065804289)
```

<div>
  <img src="https://dcbadge.limes.pink/api/shield/406125028065804289" alt="Discord User" />
</div>

```markdown
![Discord Server](https://dcbadge.limes.pink/api/server/zkspfFwqDg)
```

<div>
  <img src="https://dcbadge.limes.pink/api/server/zkspfFwqDg" alt="Discord Server" />
</div>

```markdown
![Discord Bot](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true)
```

<div>
  <img src="https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true" alt="Discord Bot" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/Path%20Params-526E86

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-action-outputs]: https://img.shields.io/badge/Action%20Outputs-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
