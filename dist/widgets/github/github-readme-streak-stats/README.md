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

## Github Readme Streak Stats

**显示你的总贡献数、当前连续贡献天数、最长连续贡献天数等信息。**

[![ref-repo]](https://github.com/DenverCoder1/github-readme-streak-stats)
[![ref-online-tool]](https://streak-stats.demolab.com/demo/)
[![ref-official-doc]](https://github.com/DenverCoder1/github-readme-streak-stats?tab=readme-ov-file#-options)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `user` | `string` | `true` |  | GitHub 用户名 |  |
| `theme` | `string` |  | `default` | 主题 | 可选值：`default` `dark` `highcontrast` `transparent` `radical` 等，更多主题请参考 [themes](https://github.com/DenverCoder1/github-readme-streak-stats/blob/main/docs/themes.md)。 |
| `hide_border` | `boolean` |  | `false` | 是否使用透明边框 |  |
| `border_radius` | `number` |  | `4.5` | 设置边缘的圆滑度 | 范围：`0`（锐角） 到 `248`（椭圆）。 |
| `background` | `string` |  |  | 背景颜色 | 格式：`angle,color1,color2,...` 例如：`180,#fff,#000`，颜色格式：`HEX` `CSS 颜色` 例如：`FF0000`。 |
| `border` | `string` |  |  | 边框颜色 | 格式：`HEX` `CSS 颜色` 例如：`FF0000`。 |
| `stroke` | `string` |  |  | 段落之间的描边颜色 | 格式：`HEX` `CSS 颜色` 例如：`FF0000`。 |
| `ring` | `string` |  |  | 当前连续贡献环的颜色 | 格式：`HEX` `CSS 颜色` 例如：`FF0000`。 |
| `fire` | `string` |  |  | 火焰的颜色 | 格式：`HEX` `CSS 颜色` 例如：`FF0000`。 |
| `currStreakNum` | `string` |  |  | 当前连续天数颜色 | 格式：`HEX` `CSS 颜色` 例如：`FF0000`。 |
| `sideNums` | `string` |  |  | 总连续贡献数和最长连续贡献数 | 格式：`HEX` `CSS 颜色` 例如：`FF0000`。 |
| `currStreakLabel` | `string` |  |  | 当前连续贡献标签颜色 | 格式：`HEX` `CSS 颜色` 例如：`FF0000`。 |
| `sideLabels` | `string` |  |  | 总连续贡献数和最长连续贡献数标签 | 格式：`HEX` `CSS 颜色` 例如：`FF0000`。 |
| `dates` | `string` |  |  | 日期范围文本颜色 | 格式：`HEX` `CSS 颜色` 例如：`FF0000`。 |
| `excludeDaysLabel` | `string` |  |  | 排除星期的文本颜色 | 格式：`HEX` `CSS 颜色` 例如：`FF0000`。 |
| `date_format` | `string` |  |  | 日期格式模式或为空以使用区域格式 | 格式参考：[PHP's date function](https://www.php.net/manual/zh/datetime.format.php#refsect1-datetime.format-parameters)，示例：[example](https://www.php.net/manual/zh/datetime.format.php#refsect1-datetime.format-parameters)。 |
| `locale` | `string` |  | `en` | 语言 | 格式参考：[Locales](https://github.com/DenverCoder1/github-readme-streak-stats?tab=readme-ov-file#-locales)。 |
| `short_numbers` | `boolean` |  |  | 是否使用短数字 |  |
| `type` | `string` |  | `svg` | 输出格式 | 可选值：`svg` `json` `png`。 |
| `mode` | `string` |  | `daily` | 模式 | 可选值：`daily`（每日）`weekly`（每周）。 |
| `exclude_days` | `string` |  |  | 排除连续贡献的天数 | 可选值：`Sun` `Mon` `Tue` `Wed` `Thu` `Fri` `Sat` 多个值用 `,` 分隔。 |
| `disable_animations` | `boolean` |  | `false` | 禁用 SVG 动画 |  |
| `card_width` | `number` |  | `495` | 卡片宽度 | 单位：像素，每列最小宽度为 100 像素。 |
| `card_height` | `number` |  | `195` | 卡片高度 | 单位：像素，每列最小高度为 170 像素。 |
| `hide_total_contributions` | `boolean` |  | `false` | 是否隐藏总贡献数 |  |
| `hide_current_streak` | `boolean` |  | `false` | 是否隐藏当前连续提交数 |  |
| `hide_longest_streak` | `boolean` |  | `false` | 是否隐藏最长贡献 |  |
| `starting_year` | `number` |  |  | 贡献统计开始年份 |  |

</details>

```txt
https://streak-stats.demolab.com/{?user,theme,hide_border,border_radius,background,border,stroke,ring,fire,currStreakNum,sideNums,currStreakLabel,sideLabels,dates,excludeDaysLabel,date_format,locale,short_numbers,type,mode,exclude_days,disable_animations,card_width,card_height,hide_total_contributions,hide_current_streak,hide_longest_streak,starting_year}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
<!-- DenverCoder1 -->
![GitHub Streak](https://streak-stats.demolab.com/?user=DenverCoder1&theme=dark&hide_border=true)
```

<div>
  <img src="https://streak-stats.demolab.com/?user=DenverCoder1&#38;theme=dark&#38;hide_border=true" alt="GitHub Streak" />
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
