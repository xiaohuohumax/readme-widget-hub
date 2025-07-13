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

## Capsule Render

**生成动态的彩色图像。**

[![ref-repo]](https://github.com/kyechan99/capsule-render)
[![ref-online-tool]](https://capsule-render.vercel.app/)
[![ref-official-doc]](https://github.com/kyechan99/capsule-render?tab=readme-ov-file#how-to-use)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `type` | `string` |  | `wave` | 类型数据用于更改背景图像 | 可选值：`wave` `egg` `shark` `slice` `rect` `soft` `rounded` `cylinder` `waving` `venom` `speech` `blur` `transparent`。 |
| `color` | `string` |  | `B897FF` | 更改背景图像颜色 | 可选值：`auto` `timeAuto` `random` `gradient` `timeGradient` `HEX 值` `自定义渐变，格式：widthPer:color1,widthPer:color2...`。 |
| `customColorList` | `string` |  |  | 从预设颜色中选择随机出现的颜色下标 | 格式：`idx1,idx2,idx3...`，如想某些颜色出现概率高可以多写几次下标，仅在 `color` 为 [auto](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json) 或 [gradient](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json) 时生效。 |
| `theme` | `string` |  | `default` | 主题 | 可选值：`default` `dark` `radical` `merko` `gruvbox` `gruvbox_light` `tokyonight` `onedark` `cobalt` 主题颜色参考：[pallete\_theme](https://github.com/kyechan99/capsule-render/blob/master/src/pallete_theme.json)。 |
| `section` | `string` |  | `header` | 图像显示位置 | 可选值：`header` `footer`。 |
| `reversal` | `boolean` |  | `false` | 是否左右反转图像（同时反转颜色） |  |
| `height` | `number` |  | `120` | 图像高度 | 单位：像素。 |
| `text` | `string` |  |  | 标题 | 格式：`%20` 空格 `-nl-` 换行。 |
| `desc` | `string` |  |  | 描述 | 格式：`%20` 空格，注意：不支持 `-nl-` 换行。 |
| `textBg` | `boolean` |  |  | 是否添加文字背景 |  |
| `animation` | `string` |  |  | 文本动画效果 | 可选值：`fadeIn` `scaleIn` `blink` `blinking` `twinkling`。 |
| `fontColor` | `string` |  |  | 字体颜色 | 格式：`HEX` 例如：`FF0000`。 |
| `fontSize` | `number` |  | `70` | 字体大小 | 单位：像素。 |
| `fontAlign` | `number` |  | `50` | 标题文字水平对齐 | 可选范围：`0` 到 `100`，`50` 为居中，多行文本会整体计算对齐值。 |
| `fontAlignY` | `number` |  | `50` | 标题文字垂直对齐 | 可选范围：`0` 到 `100`，`50` 为居中，多行文本会整体计算对齐值。 |
| `descSize` | `number` |  | `20` | 描述文字大小 | 单位：像素。 |
| `descAlign` | `number` |  | `50` | 描述文字水平对齐 | 可选范围：`0` 到 `100`，`50` 为居中，多行文本会独立计算对齐值。 |
| `descAlignY` | `number` |  | `60` | 描述文字垂直对齐 | 可选范围：`0` 到 `100`，`50` 为居中，多行文本会整体计算对齐值。 |
| `rotate` | `number` |  |  | 旋转文本 | 可选范围：`-360` 到 `360`，单位：度。 |
| `stroke` | `string` |  |  | 文本描边颜色 | 格式：`HEX` 例如：`FF0000`，未设置 `strokeWidth` 时，`strokeWidth` 默认为 `1`。 |
| `strokeWidth` | `number` |  |  | 文本描边宽度 | 格式：`HEX` 例如：`FF0000`，未设置 `stroke` 时，`stroke` 默认为 `B897FF`。 |

</details>

```txt
https://capsule-render.vercel.app/api{?type,color,customColorList,theme,section,reversal,height,text,desc,animation,fontColor,fontSize,fontAlign,fontAlignY,descSize,descAlignY,rotate,stroke,strokeWidth}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
<!-- kyechan99/capsule-render -->
![页眉](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=capsule%20render&fontSize=90&animation=fadeIn&fontAlignY=38&desc=Decorate%20GitHub%20Profile%20or%20any%20Repo%20like%20me!&descAlignY=51&descAlign=62)
```

<div>
  <img src="https://capsule-render.vercel.app/api?type=waving&#38;color=auto&#38;height=300&#38;section=header&#38;text=capsule%20render&#38;fontSize=90&#38;animation=fadeIn&#38;fontAlignY=38&#38;desc=Decorate%20GitHub%20Profile%20or%20any%20Repo%20like%20me!&#38;descAlignY=51&#38;descAlign=62" alt="页眉" />
</div>

```markdown
<!-- kyechan99/capsule-render -->
![页脚](https://capsule-render.vercel.app/api?type=waving&color=auto&height=100&section=footer)
```

<div>
  <img src="https://capsule-render.vercel.app/api?type=waving&#38;color=auto&#38;height=100&#38;section=footer" alt="页脚" />
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
