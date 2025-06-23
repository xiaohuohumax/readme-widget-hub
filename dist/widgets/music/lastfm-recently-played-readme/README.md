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
      · <a href="README_pt-BR.md">Português</a>
    </b>
  </div>
  <br/>
</div>

## Last.fm Recently Played README

**在你的 README 中展示最近在 Last.fm 上播放的曲目。**

[![ref-repo]](https://github.com/JeffreyCA/lastfm-recently-played-readme)
[![ref-official-doc]](https://github.com/JeffreyCA/lastfm-recently-played-readme?tab=readme-ov-file#customization)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `user` | `string` |  |  | Last.fm 用户名 |  |
| `count` | `string` |  | `5` | 自定义曲目数量 | 范围：`1` 到 `10`。 |
| `width` | `string` |  | `400` | 自定义卡片宽度 | 范围：`300` 到 `1000`。 |
| `loved` | `boolean` |  | `false` | 是否显示喜欢的曲目心形指示器 | 可选值：`true` `false`。 |
| `show_user` | `string` |  | `never` | 在指定位置显示您的用户名和头像 | 可选值：`never` `always` `header` `footer`。 |
| `header_style` | `string` |  | `normal` | 调整页眉大小或隐藏它 | 可选值：`none` `compact` `normal` `compact_stats` `normal_stats` `compact_stats_only` `normal_stats_only`。 |
| `footer_style` | `string` |  | `normal` | 调整页脚大小或隐藏它 | 可选值：`none` `wave` `compact` `normal` `compact_stats` `normal_stats`。 |
| `border_radius` | `number` |  | `10` | 卡片圆角半径 | 范围：`0` 到 `100`。 |
| `loved_style` | `number` |  | `1` | 自定义喜爱歌曲的指示器位置 | 可选值：`1` `2` `3` `4`。 |
| `bg_color` | `string` |  | `212121` | 自定义卡片背景颜色 | 格式：`RGB/A` `HEX`，例如：`FF0000`。 |
| `maxage` | `number` |  | `120` | 缓存时长 | 单位：秒，范围：`60` 到 `3600`。 |

</details>

```txt
https://lastfm-recently-played.vercel.app/api
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

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

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
