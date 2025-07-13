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

## Badgen

**快速徽章生成服务。**

[![ref-repo]](https://github.com/badgen/badgen.net)
[![ref-online-tool]](https://badgen.net/)
[![ref-official-doc]](https://badgen.net/help)

> [!Tip]
> 由于此项目支持的徽章种类非常多，且功能强大，这里只简单介绍－静态徽章，其他徽章使用方式还请移步官方文档。

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `badge` | `string` | `true` |  | 徽章类型 | 可选值：`/static` `/github` `/gitlab` `/https` 等等，更多类型请参考官方文档。 |
| `subject` | `string` | `true` |  | 徽章子信息 | 比如：`/static` 静态徽章时，`subject` 表示为徽章左侧标签。 |
| `status` | `string` | `true` |  | 徽章右侧消息 | 比如：`/static/Swift/4.2/orange` `status=4.2`。 |
| `color` | `string` | `true` |  | 徽章颜色 | 支持格式：`RGB` `CSS颜色`。 |
| ![ref-querys] | | | | | |
| `color` | `string` |  |  | 覆盖默认徽章颜色 |  |
| `icon` | `string` |  |  | 徽章左侧图标 | 支持外部图标 URL。 |
| `label` | `string` |  |  | 徽章左侧标签 |  |
| `labelColor` | `string` |  |  | 徽章左侧标签颜色 |  |
| `scale` | `number` |  | `1` | 徽章缩放比例 |  |
| `cache` | `number` |  | `86400` | 缓存时间 | 单位：秒。 |

</details>

```txt
https://badgen.net/{badge}/{subject}/{status}/{color}{?color,icon,label,labelColor,scale,cache}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
<!-- badgen/badgen.net -->
![Swift Version](https://badgen.net/static/Swift/4.2/orange)
```

<div>
  <img src="https://badgen.net/static/Swift/4.2/orange" alt="Swift Version" />
</div>

```markdown
![彩色徽章](https://badgen.net/badge/color/F94144/F94144?label=)
```

<div>
  <img src="https://badgen.net/badge/color/F94144/F94144?label=" alt="Color Badge F94144" />
  <img src="https://badgen.net/badge/color/F3722C/F3722C?label=" alt="Color Badge F3722C" />
  <img src="https://badgen.net/badge/color/F8961E/F8961E?label=" alt="Color Badge F8961E" />
  <img src="https://badgen.net/badge/color/F9844A/F9844A?label=" alt="Color Badge F9844A" />
  <img src="https://badgen.net/badge/color/F9C74F/F9C74F?label=" alt="Color Badge F9C74F" />
  <img src="https://badgen.net/badge/color/90BE6D/90BE6D?label=" alt="Color Badge 90BE6D" />
  <img src="https://badgen.net/badge/color/43AA8B/43AA8B?label=" alt="Color Badge 43AA8B" />
  <img src="https://badgen.net/badge/color/4D908E/4D908E?label=" alt="Color Badge 4D908E" />
  <img src="https://badgen.net/badge/color/577590/577590?label=" alt="Color Badge 577590" />
  <img src="https://badgen.net/badge/color/555555/555555?label=" alt="Color Badge 555555" />
  <img src="https://badgen.net/badge/color/277DA1/277DA1?label=" alt="Color Badge 277DA1" />
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

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
