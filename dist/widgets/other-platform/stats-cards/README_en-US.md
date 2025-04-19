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

## Stats Cards

**Show website stats (Bilibili, Zhihu, GitHub, CSDN, LeetCode, etc.) in README, or use it for website status monitoring.**

[![ref-repo]](https://github.com/songquanpeng/stats-cards)
[![ref-official-doc]](https://github.com/songquanpeng/stats-cards#readme)

### Parameters

#### Website monitoring

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `url` | `string` | `true` |  | The URL of the website to be monitored |  |
| `logo` | `string` |  |  | Badge logo | Refer to [shields.io](https://shields.io/) for more information. |
| `style` | `string` |  | `flat` | Badge style | Supported: `flat` `flat-square` `for-the-badge` `plastic` `social`. |

</details>

```txt
https://stats.justsong.cn/api/website/{?url,logo,style}
```

#### Website data

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `platform` | `string` | `true` |  | Data source platform | Supported: `github` `zhihu` `bilibili` `leetcode` `juejin` `csdn` `nowcoder` `steam`. |
| ![ref-querys] | | | | | |
| `theme` | `string` |  | `light` | Theme | Supported: `light` `dark` `dark2` `radical`. More themes refer to [theme.js](https://github.com/songquanpeng/stats-cards/blob/master/common/theme.js). |
| `username` | `string` | `true` |  | Username | Applicable platforms: `github` `zhihu` `leetcode`. |
| `id` | `string` | `true` |  | ID | Applicable platforms: `bilibili` `juejin` `csdn` `nowcoder`. |
| `lang` | `string` |  | `en-US` | Language | Supported: `en-US` `zh-CN`. |
| `cn` | `boolean` |  | `false` | LeetCode Chinese Site | Applicable platforms: `leetcode`. |
| `cn_username` | `string` |  |  | LeetCode Chinese Site Username | Applicable platforms: `leetcode`, display both English and Chinese data: set `username` and `cn_username` at the same time. |

</details>

```txt
https://stats.justsong.cn/api/{platform}{?username,id,lang,cn,cn_username,theme}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
![GitHub Status](https://stats.justsong.cn/api/website/?url=https://github.com/&style=flat&logo=github)
```

<div>
  <img src="https://stats.justsong.cn/api/website/?url=https://github.com/&#38;style=flat&#38;logo=github" alt="GitHub Status" />
</div>

```markdown
<!-- 掘金酱 -->
![掘金酱的掘金数据](https://stats.justsong.cn/api/juejin?id=1556564194374926&lang=zh-CN&theme=dark)
```

<div>
  <img src="https://stats.justsong.cn/api/juejin?id=1556564194374926&#38;lang=zh-CN&#38;theme=dark" alt="掘金酱的掘金数据" />
</div>

```markdown
<!-- quanpeng -->
![quanpeng](https://stats.justsong.cn/api/leetcode/?username=quanpeng&cn_username=quanpeng&theme=dark)
```

<div>
  <img src="https://stats.justsong.cn/api/leetcode/?username=quanpeng&#38;cn_username=quanpeng&#38;theme=dark" alt="quanpeng" />
</div>

```markdown
<!-- 红警魔鬼蓝天 -->
![蓝天的 B 站数据](https://stats.justsong.cn/api/bilibili/?id=483246073&lang=zh-CN&theme=dark)
```

<div>
  <img src="https://stats.justsong.cn/api/bilibili/?id=483246073&#38;lang=zh-CN&#38;theme=dark" alt="蓝天的 B 站数据" />
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
