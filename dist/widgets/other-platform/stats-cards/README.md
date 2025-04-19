<a name="readme-top"></a>

<div align="center">
  <div>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=160&section=header">
  </div>
  <a href="https://github.com/xiaohuohumax/readme-widget-hub">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&width=416&height=68&lines=%F0%9F%8E%96%EF%B8%8FReadme+Widget+Hub%F0%9F%8E%96%EF%B8%8F"/>
  </a>
  <p><b>用美观、可配置的徽章与状态卡片，让你的 README 更专业、更高效！</b></p>
  <div>
    <b>
       <a href="/README.md">首页</a>
      · <a href="README_en-US.md">English</a>
    </b>
  </div>
  <br/>
</div>

## Stats Cards

**在 README 中展示网站数据（B站、知乎、GitHub、CSDN、LeetCode等），也可用于网站状态监控。**

[![ref-repo]](https://github.com/songquanpeng/stats-cards)
[![ref-official-doc]](https://github.com/songquanpeng/stats-cards#readme)

### 参数

#### 网站监控

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `url` | `string` | `true` |  | 监控目标网站地址 |  |
| `logo` | `string` |  |  | 徽章 Logo | 参考 [shield.io](https://shields.io/docs/logos)。 |
| `style` | `string` |  | `flat` | 徽章样式 | 可选值：`flat` `flat-square` `for-the-badge` `plastic` `social`。 |

</details>

```txt
https://stats.justsong.cn/api/website/{?url,logo,style}
```

#### 网站数据

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `platform` | `string` | `true` |  | 数据来源平台 | 可选值：`github` `zhihu` `bilibili` `leetcode` `juejin` `csdn` `nowcoder` `steam`。 |
| ![ref-querys] | | | | | |
| `theme` | `string` |  | `light` | 主题 | 可选值：`light` `dark` `dark2` `radical` 更多主题参考 [theme.js](https://github.com/songquanpeng/stats-cards/blob/master/common/theme.js)。 |
| `username` | `string` | `true` |  | 用户名 | 适用平台: `github` `zhihu` `leetcode`。 |
| `id` | `string` | `true` |  | ID | 适用平台: `bilibili` `juejin` `csdn` `nowcoder`。 |
| `lang` | `string` |  | `en-US` | 语言 | 可选值：`en-US` `zh-CN`。 |
| `cn` | `boolean` |  | `false` | LeetCode 中文站 | 适用平台: `leetcode`。 |
| `cn_username` | `string` |  |  | LeetCode 中文站用户名 | 适用平台: `leetcode`，同时显示中英双站数据：同时配置`username` 和 `cn_username`即可。 |

</details>

```txt
https://stats.justsong.cn/api/{platform}{?username,id,lang,cn,cn_username,theme}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
![GitHub 状态](https://stats.justsong.cn/api/website/?url=https://github.com/&style=flat&logo=github)
```

<div>
  <img src="https://stats.justsong.cn/api/website/?url=https://github.com/&#38;style=flat&#38;logo=github" alt="GitHub 状态" />
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

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/路径参数-526E86

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
