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

## GitHub Readme Profile

**生成你的 SVG 格式 GitHub 统计个人资料。**

[![ref-repo]](https://github.com/FajarKim/github-readme-profile)
[![ref-online-tool]](https://gh-readme-profile-generator.vercel.app/)
[![ref-official-doc]](https://github.com/FajarKim/github-readme-profile)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `username` | `string` | `true` |  | 用户名 | Example: `FajarKim`. |
| `title_color` | `string` |  | `2f80ed` | 卡片标题颜色 | 格式：`HEX` 例如：`FF0000`。 |
| `text_color` | `string` |  | `434d58` | 正文颜色 | 格式：`HEX` 例如：`FF0000`。 |
| `icon_color` | `string` |  | `4c71f2` | 图标颜色 | 格式：`HEX` 例如：`FF0000`。 |
| `border_color` | `string` |  | `e4e2e2` | 卡片颜色 | 格式：`HEX` 例如：`FF0000`。当启用 `hide_border` 时不适用。 |
| `bg_color` | `string` |  | `fffefe` | Card's background color. | 格式：`HEX`, `gradient(angle,start,end)` 例如：`FF0000`, `30,E96443,904E95`。 |
| `stroke_color` | `string` |  | `e4e2e2` | 头像边框颜色 | 格式：`HEX` 例如：`FF0000`。当 `hide_stroke` 开启时不适用。 |
| `username_color` | `string` |  | `434d58` | 用户名颜色 | 格式：`HEX` 例如：`FF0000`。 |
| `theme` | `string` |  | `default` | 主题 [全部可用主题](https://github.com/FajarKim/github-readme-profile/tree/master/themes) | 可选值：`default`,, `transparent`, `dark` or `highcontrast`。 |
| `title` | `string` |  |  | 卡片的自定义标题文本 | 使用前，请使用 [URL Encoder](https://www.urlencoder.org/) 等工具将文本编码为 URL 格式。 |
| `locate` | `string` |  | `en` | 语言 | 可选值：`en`, `ar`, `fr`, `id`, `ja` or `ko`。 |
| `border_width` | `number` |  | `1` | 手动设置边框的宽度 |  |
| `border_radius` | `number` |  | `4.5` | 卡片的圆角处理 |  |
| `hide` | `string` |  |  | 隐藏指定的 [统计项](https://github.com/FajarKim/github-readme-profile#hiding-individual-stats) | 示例：`&hide=repos,stars,forks,commits,prs,prs_merged,issues,contributed`. |
| `show` | `string` |  |  | 显示额外的 [统计项](https://github.com/FajarKim/github-readme-profile?tab=readme-ov-file#showing-additional-individual-stats) | 示例：`&show=reviews,issues_closed,discussions_started,discussions_answered`. |
| `format` | `string` |  | `svg` | 输出格式卡片选项 | 可选值：`svg`, `png`, `json`, or `xml`。 |
| `disabled_animations` | `boolean` |  | `false` | 禁用卡片中的所有动画效果 | 可选值：`false` or `true`。 |
| `hide_border` | `string` |  | `false` | 隐藏卡片边框 | 可选值：`false` or `true`。 |
| `hide_stroke` | `boolean` |  | `false` | 隐藏卡片中图像的轮廓 | 可选值：`false` or `true`。 |
| `revert` | `boolean` |  | `false` | 反转显示顺序，将统计信息置于左侧，图片置于右侧。 | 可选值：`false` or `true`。 |
| `photo_quality` | `number` |  | `15` | 个人资料图片的质量 | 以百分比表示（1-100）。 |
| `photo_resize` | `number` |  | `150` | 将个人资料图片调整为特定宽度 | 以像素为单位。允许的最小值为 10px |

</details>

```txt
https://gh-readme-profile.vercel.app/api{?username,title_color,text_color,icon_color,border_color,bg_color,stroke_color,username_color,theme,title,locate,border_width,border_radius,hide,show,format,disabled_animations,hide_border,hide_stroke,revert,photo_quality,photo_resize}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

#### 葡萄牙语卡片

```markdown
<!-- FajarKim GitHub Readme Profile -->
![GitHub Readme Profile](https://gh-readme-profile.vercel.app/api?username=FajarKim&theme=iceberg&locale=pt-BR&hide=forks,prs&show=reviews,issues_closed,discussions_started,discussions_answered)
```

<div>
  <img src="https://gh-readme-profile.vercel.app/api?username=FajarKim&#38;theme=iceberg&#38;locale=pt-BR&#38;hide=forks,prs&#38;show=reviews,issues_closed,discussions_started,discussions_answered" alt="GitHub Readme Profile" />
</div>

#### 英语卡片

```markdown
<!-- FajarKim GitHub Readme Profile -->
![GitHub Readme Profile](https://gh-readme-profile.vercel.app/api?username=FajarKim&theme=duskfox&hide=commits,prs,prs_merged,issues,contributed)
```

<div>
  <img src="https://gh-readme-profile.vercel.app/api?username=FajarKim&#38;theme=duskfox&#38;hide=commits,prs,prs_merged,issues,contributed" alt="GitHub Readme Profile" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/在线工具-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
