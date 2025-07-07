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

## Visitor Badge

**创建一个可用于任何网站或 GitHub 个人资料的访客徽章。**

[![ref-repo]](https://github.com/estruyf/web-visitorbadge-nextjs)
[![ref-online-tool]](https://visitorbadge.io/)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `type` | `string` | `true` |  | 徽章类型 | 可选值：`visitors`（总数）、`daily`（单日）、`combined`（前两个组合）。 |
| ![ref-querys] | | | | | |
| `path` | `string` | `true` |  | 统计路径 | URL 或 用户名/仓库，用于唯一统计的链接或字符串。 |
| `label` | `string` |  |  | 徽章标签 |  |
| `labelColor` | `string` |  | `#555555` | 徽章标签背景颜色 | 支持类型：`HEX`，例如：`#FF0000`。 |
| `countColor` | `string` |  | `#263759` | 徽章数字背景颜色 | 支持类型：`HEX`，例如：`#FF0000`。 |
| `style` | `string` |  | `default` | 徽章样式 | 可选值：`default`、`flat`、`flat-square`、`plastic`。 |
| `labelStyle` | `string` |  | `upper` | 徽章标签大小写 | 可选值：`upper`（大写） `lower`（小写）。 |

</details>

```txt
https://api.visitorbadge.io/api/{type}{?path,label,labelColor,countColor,style,labelStyle}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
<!-- xiaohuohumax/readme-widget-hub -->
![访问数](https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2Fxiaohuohumax%2Freadme-widget-hub&label=VISITORS&countColor=%23f3722c)
```

<div>
  <img src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2Fxiaohuohumax%2Freadme-widget-hub&#38;label=VISITORS&#38;countColor=%23f3722c" alt="访问数" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/路径参数-526E86

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/在线工具-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+
