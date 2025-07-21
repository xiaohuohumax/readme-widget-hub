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

## Daily Quotes Card

**在你的 Github 个人资料上的励志名言。**

[![ref-repo]](https://github.com/cheehwatang/github-readme-daily-quotes)
[![ref-official-doc]](https://github.com/cheehwatang/github-readme-daily-quotes)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `theme` | `string` |  | `github_dark` | [所有可用主题](https://github.com/cheehwatang/github-readme-daily-quotes/blob/master/src/app/themes/README.md)。 |  |
| `font` | `string` |  | `helvetica` | [所有可用字体](https://github.com/cheehwatang/github-readme-daily-quotes/blob/master/src/app/fonts/README.md)。 |  |
| `quote` | `string` |  |  | 自定义你的名言。 |  |
| `author` | `string` |  |  | 名言的作者的名字。 |  |
| `category` | `string` |  |  | [所有可用分类](https://github.com/cheehwatang/github-readme-daily-quotes#quotes-from-category)。 |  |
| `bg_color` | `string` |  | `0d1117` | 卡片背景色（十六进制颜色）。 |  |
| `quote_color` | `string` |  | `58a6ff` | 引用文字颜色（十六进制颜色）。 |  |
| `author_color` | `string` |  | `c3d1d9` | 作者文字颜色（十六进制颜色）。 |  |
| `accent_color` | `string` |  | `1f6feb` | 引号和间隔符号的强调色（十六进制颜色）。 |  |
| `border_color` | `string` |  | `e4e2e2` | 卡片边框颜色（十六进制颜色）。 |  |
| `border_width` | `number` |  | `1` | 卡片边框宽度（以像素为单位）（范围从 0 - 5）。 |  |
| `border_radius` | `number` |  | `8` | 卡片的边框半径（以像素为单位）（范围从 0 - 40 ）。 |  |

</details>

```txt
https://readme-daily-quotes.vercel.app/api{?theme,font,quote,author,category,bg_color,quote_color,author_color,accent_color,border_color,border_width,userId}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

#### 明亮主题和编程分类

```markdown
<!-- Github Readme Daily Quotes -->
![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?theme=light&category=programming)
```

<div>
  <img src="https://readme-daily-quotes.vercel.app/api?theme=light&#38;category=programming" alt="Github Readme Daily Quotes" />
</div>

#### Garamond 字体 和 Radical 主题

```markdown
![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?font=garamond&theme=radical)
```

<div>
  <img src="https://readme-daily-quotes.vercel.app/api?font=garamond&#38;theme=radical" alt="Github Readme Daily Quotes" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
