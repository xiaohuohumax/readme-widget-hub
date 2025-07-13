<a name="readme-top"></a>

<div align="center">
  <div>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=160&section=header">
  </div>
  <a href="https://github.com/xiaohuohumax/readme-widget-hub">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&width=416&height=68&lines=%F0%9F%8E%96%EF%B8%8FReadme+Widget+Hub%F0%9F%8E%96%EF%B8%8F"/>
  </a>
  <p><b>Use beautiful, configurable badges and status cards to make your README more professional and efficient!</b></p>
  <div>
    <b>
       <a href="/README_en-US.md">Home</a>
      · <a href="README_pt-BR.md">Português</a>
      · <a href="README.md">中文</a>
    </b>
  </div>
  <br/>
</div>

## Capsule Render

**Dynamic Coloful Image Render.**

[![ref-repo]](https://github.com/kyechan99/capsule-render)
[![ref-online-tool]](https://capsule-render.vercel.app/)
[![ref-official-doc]](https://github.com/kyechan99/capsule-render?tab=readme-ov-file#how-to-use)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `type` | `string` |  | `wave` | Type data makes to change Background Image | Supported: `wave` `egg` `shark` `slice` `rect` `soft` `rounded` `cylinder` `waving` `venom` `speech` `blur` `transparent`. |
| `color` | `string` |  | `B897FF` | Change Background Image | Supported: `auto` `timeAuto` `random` `gradient` `timeGradient` `HEX` value or `custom gradient, format: widthPer:color1,widthPer:color2...`. |
| `customColorList` | `string` |  |  | Select random color index from preset colors | 格式：`idx1,idx2,idx3...`，如想某些颜色出现概率高可以多写几次下标，仅在 `color` 为 [auto](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json) 或 [gradient](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json) 时生效。 |
| `theme` | `string` |  | `default` | Theme | Supported: `default` `dark` `radical` `merko` `gruvbox_light` `tokyonight` `onedark` `cobalt`. Theme color reference: [pallete\_theme](https://github.com/kyechan99/capsule-render/blob/master/src/pallete_theme.json). |
| `section` | `string` |  | `header` | Section data makes reverse Background Image | Supported: `header` `footer`. |
| `reversal` | `boolean` |  | `false` | Reverse the image left and right (Color at the same time) |  |
| `height` | `number` |  | `120` | Change Image Size | Unit: pixels. |
| `text` | `string` |  |  | Input text over the Image | Format: `%20` space `-nl-` newline. |
| `desc` | `string` |  |  | Input desc over the Image | Format: `%20` space, Note: `-nl-` newline is not supported. |
| `textBg` | `boolean` |  |  | Background of Text |  |
| `animation` | `string` |  |  | Make the text dynamic | Supported: `fadeIn` `scaleIn` `blink` `blinking` `twinkling`. |
| `fontColor` | `string` |  |  | Change text color | Format: `HEX` e.g. `FF0000`. |
| `fontSize` | `number` |  | `70` | Change text font size | Unit: pixels. |
| `fontAlign` | `number` |  | `50` | Change text horizontal-align (x) | Bettwen `0` and `100`, `50` is center, multi-line text will calculate the alignment value. |
| `fontAlignY` | `number` |  | `50` | Change text vertical-align (y) | Bettwen `0` and `100`, `50` is center, multi-line text will calculate the alignment value. |
| `descSize` | `number` |  | `20` | Change desc font size | Unit: pixels. |
| `descAlign` | `number` |  | `50` | Change desc horizontal-align (x) | Bettwen `0` and `100`, `50` is center, multi-line text will calculate the alignment value. |
| `descAlignY` | `number` |  | `60` | Change desc vertical-align (y) | Bettwen `0` and `100`, `50` is center, multi-line text will calculate the alignment value. |
| `rotate` | `number` |  |  | Rotate text | Bettwen `-360` and `360`, unit: degrees. |
| `stroke` | `string` |  |  | Change text stroke | Format: `HEX` e.g. `FF0000`, if `strokeWidth` is not set, `strokeWidth` will default to `1`. |
| `strokeWidth` | `number` |  |  | Change text stroke width | Format: `HEX` e.g. `FF0000`, if `stroke` is not set, `stroke` will default to `B897FF`. |

</details>

```txt
https://capsule-render.vercel.app/api{?type,color,customColorList,theme,section,reversal,height,text,desc,animation,fontColor,fontSize,fontAlign,fontAlignY,descSize,descAlignY,rotate,stroke,strokeWidth}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- kyechan99/capsule-render -->
![Capsule-Render Header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=capsule%20render&fontSize=90&animation=fadeIn&fontAlignY=38&desc=Decorate%20GitHub%20Profile%20or%20any%20Repo%20like%20me!&descAlignY=51&descAlign=62)
```

<div>
  <img src="https://capsule-render.vercel.app/api?type=waving&#38;color=auto&#38;height=300&#38;section=header&#38;text=capsule%20render&#38;fontSize=90&#38;animation=fadeIn&#38;fontAlignY=38&#38;desc=Decorate%20GitHub%20Profile%20or%20any%20Repo%20like%20me!&#38;descAlignY=51&#38;descAlign=62" alt="Capsule-Render Header" />
</div>

```markdown
<!-- kyechan99/capsule-render -->
![Capsule-Render Footer](https://capsule-render.vercel.app/api?type=waving&color=auto&height=100&section=footer)
```

<div>
  <img src="https://capsule-render.vercel.app/api?type=waving&#38;color=auto&#38;height=100&#38;section=footer" alt="Capsule-Render Footer" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-action-outputs]: https://img.shields.io/badge/Action%20Outputs-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/Online%20Tools-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
