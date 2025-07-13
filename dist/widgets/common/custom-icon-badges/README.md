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

## Custom Icon Badges

**自定义图标徽章，可以用任何你喜欢的图标。**

[![ref-repo]](https://github.com/DenverCoder1/custom-icon-badges)
[![ref-online-tool]](https://custom-icon-badges.demolab.com/)

> [!Tip]
> 由于此项目徽章是基于 [shields.io](https://shields.io/) 生成，因此配置参数可直接参考 [shields.io badges](https://shields.io/badges)，下面配置仅展示此项目扩展参数。

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `shieldsIoParams` | `any` | `true` |  | [shields.io 徽章路径参数](https://shields.io/badges) | 例如：`badge/...`（静态徽章） `github/...`（Github 相关）。 |
| ![ref-querys] | | | | | |
| `host` | `string` |  | `img.shields.io` | 使用不同的徽章托管服务 | 可选值：`staging.shields.io` `img.shields.io`。 |
| `logo` | `string` |  |  | 自定义图标名称 | 即自己上传图标时设置的名称。 |
| `logoSource` | `string` |  |  | 自定义图标来源 | 可选值：`feather`。 |
| `shieldsIoQuerys` | `any` |  |  | [shields.io 徽章查询参数](https://shields.io/badges) | 例如：`logoColor`（图标颜色） `style`（徽章样式）等。 |

</details>

```txt
https://custom-icon-badges.demolab.com/{shieldsIoParams}{?host,shieldsIoQuerys}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
![自定义图标徽章](https://custom-icon-badges.demolab.com/badge/custom-badge-blue.svg?logo=paintbrush&logoColor=white)
```

<div>
  <img src="https://custom-icon-badges.demolab.com/badge/custom-badge-blue.svg?logo=paintbrush&#38;logoColor=white" alt="自定义图标徽章" />
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
