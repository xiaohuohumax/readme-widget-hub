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

## Sloc Cloc and Code

**一个可以显示代码行数、注释行数等的徽章服务。**

[![ref-repo]](https://github.com/boyter/scc/)
[![ref-official-doc]](https://github.com/boyter/scc/?tab=readme-ov-file#badges-beta)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `provider` | `string` | `true` |  | 提供商 | 可选值：`github`。 |
| `user` | `string` | `true` |  | 用户名 |  |
| `repo` | `string` | `true` |  | 仓库名 |  |
| ![ref-querys] | | | | | |
| `category` | `string` |  | `code` | 统计类别 | 可选值：`code` `blanks` `lines` `comments` `cocomo`。 |
| `avg-wage` | `number` |  | `56286` | 平均工资 | 值必须为正整数，否则将恢复到默认值 `56286`。 |
| `lower` | `boolean` |  |  | 将标题文本转换为小写 |  |
| `font-color` | `string` |  |  | 字体颜色 | 支持类型：`HEX`，例如：`FF0000`。 |
| `font-shadow-color` | `string` |  |  | 字体阴影颜色 | 支持类型：`HEX`，例如：`FF0000`。 |
| `top-shadow-accent-color` | `string` |  |  | 顶部阴影突出颜色 | 支持类型：`HEX`，例如：`FF0000`。 |
| `title-bg-color` | `string` |  |  | 标题背景颜色 | 支持类型：`HEX`，例如：`FF0000`。 |
| `badge-bg-color` | `string` |  |  | 徽章背景颜色 | 支持类型：`HEX`，例如：`FF0000`。 |

</details>

```txt
https://sloc.xyz/{provider}/{user}/{repo}{?category,avg-wage,lower,font-color,font-shadow-color,top-shadow-accent-color,title-bg-color,badge-bg-color}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
<!-- xiaohuohumax/readme-widget-hub -->
![总行数](https://sloc.xyz/github/xiaohuohumax/readme-widget-hub)
```

<div>
  <img src="https://sloc.xyz/github/xiaohuohumax/readme-widget-hub" alt="总行数" />
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
