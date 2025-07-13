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

## Version Badge

**生成各种类型项目的版本号徽章（Pyhton、Go、npm、PHP、Github等）。**

[![ref-online-tool]](https://badge.fury.io/)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `type` | `string` | `true` |  | 徽章类型 | 可选值：`js`（npm）`rb`（Ruby）`py`（Python）`go`（Go）`bo`（Bower）`gh`（Github）`nu`（NuGet）`ph`（PHP）`co`（CocoaPods）`pl`（Perl）`pg`（PGXN）。 |
| `packageName` | `string` | `true` |  | 包名 | 特殊字符需要转义，例如：`/` 转义为 `%2F`。 |
| `format` | `string` | `true` |  | 格式 | 可选值：`.svg` `.png` `@2x.png`。 |
| ![ref-querys] | | | | | |
| `icon` | `string` |  |  | 图标 | 固定前缀：`si%3A` 例如：`icon=si%3Agithub`。 |
| `icon_color` | `string` |  |  | 图标颜色 | 格式：`HEX` 例如：`#FF0000`。 |

</details>

```txt
https://badge.fury.io/{type}/{packageName}{format}{?icon,icon_color}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
<!-- xiaohuohumax/auto-unpack -->
![Pyhton version](https://badge.fury.io/py/auto-unpack.svg)
```

<div>
  <img src="https://badge.fury.io/py/auto-unpack.svg" alt="Pyhton version" />
</div>

```markdown
<!-- xiaohuohumax/vscode-export-profiles -->
![Github repo version](https://badge.fury.io/gh/xiaohuohumax%2Fvscode-export-profiles.svg)
```

<div>
  <img src="https://badge.fury.io/gh/xiaohuohumax%2Fvscode-export-profiles.svg" alt="Github repo version" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/路径参数-526E86

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-online-tool]: https://img.shields.io/badge/在线工具-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+
