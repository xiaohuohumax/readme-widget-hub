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

## GitHub Widgetbox

**美丽的动态小部件，适用于 GitHub Readme 页面（统计信息、技能等）。**

[![ref-repo]](https://github.com/Jurredr/github-widgetbox)
[![ref-official-doc]](https://github.com/Jurredr/github-widgetbox?tab=readme-ov-file#widgets)

### 参数

#### 个人资料

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `username` | `string` | `true` |  | Github 用户名 |  |
| `data` | `string` |  |  | 需要展示的数据 | 可选值：`followers` `repositories` `stars` `commits`，多个数据用 `,` 分隔，例如：`followers,repositories,stars,commits`。 |

</details>

```txt
https://github-widgetbox.vercel.app/api/profile{?username,data}
```

#### 技能

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `languages` | `string` |  |  | 语言 | 格式：语言名称用 `,` 分隔，例如：`javascript,python,html,css`。 |
| `frameworks` | `string` |  |  | 框架 | 格式：多个框架用 `,` 分隔，例如：`react,vue,angular`。 |
| `libraries` | `string` |  |  | 库 | 格式：多个库用 `,` 分隔，例如：`react,vue,angular`。 |
| `tools` | `string` |  |  | 工具 | 格式：多个工具用 `,` 分隔，例如：`git,docker,npm,yarn,webpack`。 |
| `software` | `string` |  |  | 软件 | 格式：多个软件用 `,` 分隔，例如：`windows,linux,vscode`。 |
| `includeNames` | `boolean` |  | `false` | 是否显示名称 | 可选值：`true` `false`。 |
| `theme` | `string` |  |  | 主题 | 可选值：`default` `darkmode` `viridescent` `carbon` `nautilus` `serika`。 |

</details>

```txt
https://github-widgetbox.vercel.app/api/skills{?languages,frameworks,libraries,software,includeNames,theme}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
<!-- Jurredr -->
![个人资料](https://github-widgetbox.vercel.app/api/profile?username=Jurredr&data=followers,repositories,stars,commits&theme=darkmode)
```

<div>
  <img src="https://github-widgetbox.vercel.app/api/profile?username=Jurredr&#38;data=followers,repositories,stars,commits&#38;theme=darkmode" alt="个人资料" />
</div>

```markdown
![技能](https://github-widgetbox.vercel.app/api/skills?frameworks=vue,react,electron,bootstrap,tailwind,express&includeNames=true&theme=darkmode)
```

<div>
  <img src="https://github-widgetbox.vercel.app/api/skills?frameworks=vue,react,electron,bootstrap,tailwind,express&#38;includeNames=true&#38;theme=darkmode" alt="技能" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
