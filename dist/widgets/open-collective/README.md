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

## Open Collective

**创建一个 SVG，展示您的财务贡献者的卡片。**

[![ref-repo]](https://github.com/opencollective)
[![ref-official-doc]](https://docs.opencollective.com/help/collectives/collective-settings/data-export#contributor-image)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `collectiveName` | `string` | `true` |  | Open Collective 组织名 |  |
| `statisticalType` | `string` | `true` |  | 统计类型 | 可选值：`sponsors`（赞助商）`backers`（支持者）`contributors`（贡献者）。 |
| ![ref-querys] | | | | | |
| `width` | `number` |  |  | 图片宽度 | 单位：像素。 |
| `height` | `number` |  |  | 图片高度 | 单位：像素。 |
| `limit` | `number` |  |  | 最多显示成员数 | 空则表示：无上限。 |
| `avatarHeight` | `number` |  |  | 每个头像/标志的最大高度 |  |
| `button` | `boolean` |  | `true` | 显示 “成为支持者/赞助商” 按钮 |  |
| `format` | `string` |  |  | 图片格式 | 将 `.svg` 替换为 `.png` 或 `.jpg`。 |

</details>

```txt
https://opencollective.com/{collectiveName}/{statisticalType}.svg{?width,height,limit,avatarHeight,button,format}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
<!-- vitejs/vite -->
![Sponsors on Open Collective](https://opencollective.com/vite/sponsors.svg)
```

<div>
  <img src="https://opencollective.com/vite/sponsors.svg" alt="Sponsors on Open Collective" />
</div>

```markdown
<!-- vitejs/vite -->
![Sponsors Badge on Open Collective](https://opencollective.com/vite/sponsors/badge.svg)
```

<div>
  <img src="https://opencollective.com/vite/sponsors/badge.svg" alt="Sponsors Badge on Open Collective" />
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
