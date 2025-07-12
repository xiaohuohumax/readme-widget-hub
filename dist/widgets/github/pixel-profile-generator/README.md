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

## Pixel GitHub Card Generator

**依据你的 GitHub 数据生成像素艺术卡片。**

[![ref-repo]](https://github.com/LuciNyan/pixel-profile)
[![ref-online-tool]](https://pixel-profile-generator.vercel.app/)
[![ref-official-doc]](https://github.com/LuciNyan/pixel-profile)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `username` | `string` | `true` |  | GitHub 用户名。 | 例如：`imhalid`。 |
| `background` | `string` |  | `#434343` | 设置背景颜色/图片。支持 CSS 背景属性的子集。 |  |
| `color` | `string` |  | `white` | 将文本颜色设置为任何有效的 CSS 颜色值。 |  |
| `hide` | `string` |  |  | 隐藏特定统计信息或元素。 | 可选值：`avatar`, `commits`, `contributions`, `issues`, `prs`, `rank`, `stars`。 |
| `include_all_commits` | `boolean` |  | `false` | 统计所有提交。 |  |
| `pixelate_avatar` | `boolean` |  | `true` | 对头像应用像素化。 |  |
| `screen_effect` | `boolean` |  | `false` | 启用弯曲屏幕效果。 |  |
| `theme` | `string` |  |  | 主题。 | 可选值：`journey`, `road_trip`, `fuji`, `summer`, `lax`, `crt`, `monica`。 |
| `dithering` | `boolean` |  | `false` | 使用 256 色调色板渲染图像并应用抖动。 |  |

</details>

```txt
https://pixel-profile.vercel.app/api/github-stats{?username,background,color,hide,include_all_commits,pixelate_avatar,screen_effect,theme,dithering}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

#### 默认卡片

```markdown
<!-- imhalid -->
![Github Card Generator](https://pixel-profile.vercel.app/api/github-stats?username=imhalid&screen_effect=true&dithering=true&include_all_commits=true&pixelate_avatar=true&background=radial-gradient%28circle+at+50%25+50%25%2C+%233ddb82+0%25%2C+%231c1c45+100%25%29&color=%23ffffffFF)
```

<div>
  <img src="https://pixel-profile.vercel.app/api/github-stats?username=imhalid&#38;screen_effect=true&#38;dithering=true&#38;include_all_commits=true&#38;pixelate_avatar=true&#38;background=radial-gradient%28circle+at+50%25+50%25%2C+%233ddb82+0%25%2C+%231c1c45+100%25%29&#38;color=%23ffffffFF" alt="Github Card Generator" />
</div>

#### Fuji 主题并且不像素化头像

```markdown
<!-- LuciNyan -->
![Github Card Generator](https://pixel-profile.vercel.app/api/github-stats?username=LuciNyan&theme=fuji&pixelate_avatar=false)
```

<div>
  <img src="https://pixel-profile.vercel.app/api/github-stats?username=LuciNyan&#38;theme=fuji&#38;pixelate_avatar=false" alt="Github Card Generator" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/在线工具-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
