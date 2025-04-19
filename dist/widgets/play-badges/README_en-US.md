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

## PlayBadges

**Show off your Play Store™ app's downloads and ratings in your repo.**

[![ref-repo]](https://github.com/pavi2410/PlayBadges)
[![ref-official-doc]](https://github.com/pavi2410/PlayBadges?tab=readme-ov-file#usage)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `type` | `string` | `true` |  | Card type | Supported: `full` `downloads` `ratings`. |
| ![ref-querys] | | | | | |
| `id` | `string` | `true` |  | Package name |  |
| `pretty` | `boolean` |  |  | Shows the numbers prettily | Prettify: Adds unit symbols to the numbers, such as: `100K`, note: `&pretty` means enable, and remove it means disable. |
| `country` | `string` |  | `us` | Country code |  |

</details>

```txt
https://PlayBadges.pavi2410.me/badge/{type}{?id}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- pavi2410 -->
![Play Store App](https://PlayBadges.pavi2410.me/badge/full?id=appinventor.ai_pavitragolchha.VR)
```

<div>
  <img src="https://PlayBadges.pavi2410.me/badge/full?id=appinventor.ai_pavitragolchha.VR" alt="Play Store App" />
</div>

```markdown
<!-- pavi2410 -->
![Play Store App Downloads](https://PlayBadges.pavi2410.me/badge/downloads?id=appinventor.ai_pavitragolchha.VR&pretty)
```

<div>
  <img src="https://PlayBadges.pavi2410.me/badge/downloads?id=appinventor.ai_pavitragolchha.VR&#38;pretty" alt="Play Store App Downloads" />
</div>

```markdown
<!-- pavi2410 -->
![Play Store App Ratings](https://PlayBadges.pavi2410.me/badge/ratings?id=appinventor.ai_pavitragolchha.VR)
```

<div>
  <img src="https://PlayBadges.pavi2410.me/badge/ratings?id=appinventor.ai_pavitragolchha.VR" alt="Play Store App Ratings" />
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
