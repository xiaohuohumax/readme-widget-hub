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

## GitHub Readme Stats

**获取动态生成的 GitHub 统计信息！**

[![ref-repo]](https://github.com/anuraghazra/github-readme-stats)
[![ref-official-doc]](https://github.com/anuraghazra/github-readme-stats?tab=readme-ov-file#features-)

> [!Tip]
> 由于此项目支持的卡片种类非常多，且功能强大，这里只简单介绍－GitHub 状态卡片，其他卡片使用方式还请移步官方文档。

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `username` | `string` |  |  | GitHub 用户名 |  |
| `title_color` | `string` |  | `2F80ED` | 卡片标题颜色 | 支持 HEX 颜色值，如 `FF0000`。 |
| `text_color` | `string` |  | `434D58` | 正文文本颜色 | 支持 HEX 颜色值，如 `FF0000`。 |
| `icon_color` | `string` |  | `4C71F2` | 图标颜色 | 支持 HEX 颜色值，如 `FF0000`。 |
| `border_color` | `string` |  | `E4E2E2` | 卡片边框颜色 | 支持 HEX 颜色值，如 `FF0000`，当启用 `hide_border` 时，不适用。 |
| `hide_border` | `boolean` |  | `false` | 是否隐藏卡片边框 |  |
| `theme` | `string` |  |  | 设置主题 | 可选值：`dark` `radical` `merko` `gruvbox` `tokyonight` `onedark` `cobalt` `synthwave` `highcontrast` `dracula` `transparent`。 |
| `cache_seconds` | `number` |  | `21600` | 卡片缓存时间 | 单位：秒，范围：`21600` 到 `86400`。 |
| `locale` | `string` |  | `en` | 设置语言 | 语言参考：[locales](https://github.com/anuraghazra/github-readme-stats?tab=readme-ov-file#available-locales)。 |
| `border_radius` | `number` |  | `4.5` | 卡片上的圆角处理 |  |
| `hide` | `string` |  |  | 隐藏特定的统计数据 | 数据类型之间用 `,` 分隔。 |
| `show` | `string` |  |  | 显示附加统计信息 | 数据类型之间用 `,` 分隔。 |
| `show_icons` | `boolean` |  | `true` | 是否显示图标 |  |
| `bg_color` | `string` |  |  | 卡片背景色 | 背景色支持渐变，格式：`deg,color1,color2,color3,...`。 |

</details>

```txt
https://github-readme-stats.vercel.app/api{?username,title_color,text_color,icon_color,border_color,hide_border,theme,cache_seconds,locale,border_radius,hide,show,show_icons,bg_color}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
<!-- anuraghazra -->
![GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra)
```

<div>
  <img src="https://github-readme-stats.vercel.app/api?username=anuraghazra" alt="GitHub stats" />
</div>

```markdown
<!-- anuraghazra -->
![GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&locale=cn&theme=dark&hide_border=true)
```

<div>
  <img src="https://github-readme-stats.vercel.app/api?username=anuraghazra&#38;locale=cn&#38;theme=dark&#38;hide_border=true" alt="GitHub stats" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
