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

## Philosophical Quotes Generator

**这是一个哲学语录生成器的 API，允许你将哲学语录图像添加到 GitHub README 中。**

[![ref-repo]](https://github.com/markstanl/github-readme-philosophical-quotes/)
[![ref-online-tool]](https://philosophical-quotes-demo-site.vercel.app/)
[![ref-official-doc]](https://github.com/markstanl/github-readme-philosophical-quotes/)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `author` | `string` |  |  | 这个参数允许你根据说出这句话的哲学家的名字来过滤名言。 | 例如：`&author=Jean-Jacques Rousseau`。 |
| `theme` | `string` |  |  | 这个参数允许你根据主题，即配色方案，来过滤名言, [可用主题](https://github.com/markstanl/github-readme-philosophical-quotes/blob/express/theme/README.md)。 |  |
| `daily-quote` | `boolean` |  |  | 如果你只想每天生成一句名言，你可以使用这个参数。它将每天只生成一句新名言。任何值都会使这个功能生效。 |  |
| `daily-seed` | `string` |  |  | 如果你不希望你的朋友和你看到相同的名言，可以使用一个随机种子。 | 这会对数组进行洗牌，你可以在 [shuffle.mjs](https://github.com/markstanl/github-readme-philosophical-quotes/blob/express/methods/shuffle.mjs) 文件中查看洗牌算法。 |
| `quote` | `string` |  |  | 这个参数允许你生成特定的引言。只需输入你想要生成的引言即可。 | 例如：`&quote=My%20Quote`。 |
| `include-ids` | `number` |  |  | 这个参数允许你限制生成仅包含特定的 ID 值。 | 例如：`&include-ids=1,18,6`。 |
| `exclude-ids` | `number` |  |  | 这个参数允许你限制某些 ID 值不被生成。 | 例如：`&exclude-ids=1,2,3`. |

</details>

```txt
https://github-readme-philosophical-quotes.vercel.app/api/generate-image{?theme,author,daily-quote,quote,include-ids,exclude-ids}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

#### yeblu 主题，Jean-Jacques Rousseau 作家，包含 ID 11，排除 ID 2

```markdown
<!-- Philosophical Quotes Generator -->
![Philosophical Quotes Generator](https://github-readme-philosophical-quotes.vercel.app/api/generate-image?theme=yeblu&author=Jean-Jacques%20Rousseau&daily-quote=true&include-ids=11&exclude-ids=2)
```

<div>
  <img src="https://github-readme-philosophical-quotes.vercel.app/api/generate-image?theme=yeblu&#38;author=Jean-Jacques%20Rousseau&#38;daily-quote=true&#38;include-ids=11&#38;exclude-ids=2" alt="yeblu 主题，Jean-Jacques Rousseau 作家，包含 ID 11，排除 ID 2" />
</div>

#### calm 主题，每天生成一句名言

```markdown
<!-- Philosophical Quotes Generator -->
![Philosophical Quotes Generator](https://github-readme-philosophical-quotes.vercel.app/api/generate-image?theme=calm&daily-quote=true)
```

<div>
  <img src="https://github-readme-philosophical-quotes.vercel.app/api/generate-image?theme=calm&#38;daily-quote=true" alt="calm 主题，每天生成一句名言" />
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
