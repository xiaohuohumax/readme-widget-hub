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

## Quotify For Readme

**为你的 Readme 提供编程、普通或混合类型的名言。**

[![ref-repo]](https://github.com/Vishal-beep136/github-readme-quotify)
[![ref-official-doc]](https://github.com/Vishal-beep136/github-readme-quotify)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `mode` | `string` |  | `programming` | 你想获取哪种类型的名言。 | 可选值：`programming`,`normal` 或 `mixed`。 |
| `type` | `string` |  | `vertical` | 卡片类型。 | 可选值：`horizontal` 或 `vertical`。 |
| `theme` | `number` |  | `light` | 卡片主题。 | 可选值：`dark`, `chartreuse-dark`, `radical`, `merko`, `gruvbox`, `tokyonight`, `algolia`, `monokai`, `dracula` 或 `nord`。 |
| `quote` | `boolean` |  |  | 自定义你的名言。 | 例如：`&quote=My%20Quote`。 |
| `author` | `boolean` |  | `Me` | 作者名。 |  |

</details>

```txt
https://github-readme-quotify.vercel.app/api{?mode,type,theme,quote,author}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

#### Monokai 主题，混合模式，水平类型

```markdown
<!-- Quotify For Readme -->
![Quotify For Readme](https://github-readme-quotify.vercel.app/api?mode=mixed&type=horizontal&theme=monokai)
```

<div>
  <img src="https://github-readme-quotify.vercel.app/api?mode=mixed&#38;type=horizontal&#38;theme=monokai" alt="Monokai 主题，混合模式，水平类型" />
</div>

#### Catppuccin 主题，垂直类型，编程模式

```markdown
<!-- Quotify For Readme -->
![Quotify For Readme](https://github-readme-quotify.vercel.app/api?mode=programming&type=vertical&theme=catppuccin)
```

<div>
  <img src="https://github-readme-quotify.vercel.app/api?mode=programming&#38;type=vertical&#38;theme=catppuccin" alt="Catppuccin 主题，垂直类型，编程模式" />
</div>

#### 自定义名言，垂直类型，Dracula 主题

```markdown
<!-- Quotify For Readme -->
![Quotify For Readme](https://github-readme-quotify.vercel.app/api?mode=mixed&type=horizontal&theme=dracula&quote=If%20you%20think%20you%20can%2C%20you%20can.%20And%20if%20you%20think%20you%20can%27t%2C%20you%27re%20right.&author=Henry%20Ford)
```

<div>
  <img src="https://github-readme-quotify.vercel.app/api?mode=mixed&#38;type=horizontal&#38;theme=dracula&#38;quote=If%20you%20think%20you%20can%2C%20you%20can.%20And%20if%20you%20think%20you%20can%27t%2C%20you%27re%20right.&#38;author=Henry%20Ford" alt="自定义名言，垂直类型，Dracula 主题" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
