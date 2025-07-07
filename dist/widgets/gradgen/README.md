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

## Gradgen

**Gradgen 是一个简单而强大的徽章生成器，它为 [badgen.net](https://badgen.net/) 上的徽章增添了令人惊叹的渐变效果。**

[![ref-repo]](https://github.com/bokub/gradgen)
[![ref-official-doc]](https://github.com/bokub/gradgen?tab=readme-ov-file#usage)

> [!Tip]
> 由于此项目徽章是基于 [badgen.net](https://badgen.net/) 生成，因此配置参数可直接参考 [badgen.net help](https://badgen.net/help)，下面配置仅展示此项目扩展参数。

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `badgenNetParams` | `any` | `true` |  | [badgen.net 徽章路径参数](https://badgen.net/help) | 例如：`static/...`（静态徽章） `github/...`（Github 相关）。 |
| ![ref-querys] | | | | | |
| `gradient` | `string` |  |  | 渐变色 | 格式：`color1,color2` 颜色格式：`HEX` `CSS 颜色`。 |
| `style` | `string` |  |  | 徽章样式 | 可选值：`flat`。 |
| `badgenNetQuerys` | `any` |  |  | [badgen.net 徽章查询参数](https://badgen.net/help) | 例如：`color`（图标颜色） `icon`（图标）等。 |

</details>

```txt
https://gradgen.bokub.workers.dev/{badgenNetParams}{?gradient,badgenNetQuerys
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
![Gradgen](https://gradgen.bokub.workers.dev/github/checks/nodejs/node?gradient=F3722C,F94144&style=flat)
```

<div>
  <img src="https://gradgen.bokub.workers.dev/github/checks/nodejs/node?gradient=F3722C,F94144" alt="Gradgen Default" />
  <img src="https://gradgen.bokub.workers.dev/github/checks/nodejs/node?gradient=F3722C,F94144&#38;style=flat" alt="Gradgen Flat" />
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
