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

## Codewars Readme Stats

**在你的 github 个人资料中展示你的 codewars 统计信息！**

[![ref-repo]](https://github.com/DiniFarb/codewars_readme_stats)
[![ref-official-doc]](https://github.com/DiniFarb/codewars_readme_stats)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `user` | `string` | `true` |  | Codewars 用户名。 |  |
| `name` | `boolean` |  |  | 是否显示昵称而不是用户名。 |  |
| `top_languages` | `boolean` |  |  | 扩展卡片，添加 3 个顶级训练语言的图标。 |  |
| `stroke` | `string` |  |  | 使用传入的颜色在卡片周围设置边框。 | 支持类型：web 颜色名称，十六进制颜色值，rgb 值。 |
| `theme` | `string` |  |  | 设置卡片的主题。 | 支持类型: `dark` `light`。 |
| `hide_clan` | `boolean` |  |  | 从卡片中移除公会名称。 |  |
| `cache-control` | `number` |  |  | 设置缓存控制头部的值。 |  |
| `animation` | `boolean` |  |  | 是否禁用动画。 |  |

</details>

```txt
https://github.r2v.ch/codewars{?user,name,top_languages,stroke,theme,hide_clan,cache_control,animation}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

#### 基础卡片

```markdown
<!-- dinifarb -->
![Codewars Readme Stats](https://github.r2v.ch/codewars?user=dinifarb)
```

<div>
  <img src="https://github.r2v.ch/codewars?user=dinifarb" alt="Codewars Readme Stats" />
</div>

#### 明亮主题，边框和缓存控制

```markdown
<!-- dinifarb -->
![Codewars Readme Stats](https://github.r2v.ch/codewars?user=dinifarb&top_languages=false&stroke=%23BB432C&theme=light&cache_control=86400)
```

<div>
  <img src="https://github.r2v.ch/codewars?user=dinifarb&#38;top_languages=false&#38;stroke=%23BB432C&#38;theme=light&#38;cache_control=86400" alt="Codewars Readme Stats" />
</div>

#### 卡片显示顶级语言，边框和主题

```markdown
<!-- dinifarb -->
![Codewars Readme Stats](https://github.r2v.ch/codewars?user=dinifarb&name=true&top_languages=true&stroke=%23b362ff&theme=purple_dark)
```

<div>
  <img src="https://github.r2v.ch/codewars?user=dinifarb&#38;name=true&#38;top_languages=true&#38;stroke=%23b362ff&#38;theme=purple_dark" alt="Codewars Readme Stats" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
