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

## Custom Icon Badges

**Allows users to more easily use Octicons and their own icons and logos on [shields.io badges](https://github.com/badges/shields).**

[![ref-repo]](https://github.com/DenverCoder1/custom-icon-badges)
[![ref-online-tool]](https://custom-icon-badges.demolab.com/)

> [!Tip]
> Since the project badges are generated based on [shields.io](https://shields.io/), the configuration parameters can directly refer to [shields.io badges](https://shields.io/badges). The following configurations only demonstrate the extended parameters for this project.

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `shieldsIoParams` | `any` | `true` |  | [shields.io Badge path parameters](https://shields.io/badges) | For example: `badge/...` (static badge) `github/...` (Github related). |
| ![ref-querys] | | | | | |
| `host` | `string` |  | `img.shields.io` | Use different badge hosting service | Supported: `staging.shields.io` `img.shields.io`. |
| `logo` | `string` |  |  | Custom icon name | The name you set when uploading the icon. |
| `logoSource` | `string` |  |  | Custom icon source | Supported: `feather`. |
| `shieldsIoQuerys` | `any` |  |  | [shields.io Badge query parameters](https://shields.io/badges) | For example: `logoColor` (icon color) `style` (badge style) etc. |

</details>

```txt
https://custom-icon-badges.demolab.com/{shieldsIoParams}{?host,shieldsIoQuerys}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
![Custom Icon Badge](https://custom-icon-badges.demolab.com/badge/custom-badge-blue.svg?logo=paintbrush&logoColor=white)
```

<div>
  <img src="https://custom-icon-badges.demolab.com/badge/custom-badge-blue.svg?logo=paintbrush&#38;logoColor=white" alt="Custom Icon Badge" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/Path%20Params-526E86

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-action-outputs]: https://img.shields.io/badge/Action%20Outputs-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/Online%20Tools-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+
