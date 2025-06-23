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

## GitHub Widgetbox

**Beautiful, dynamic widgets for GitHub Readme pages (Statistics, Skills, etc).**

[![ref-repo]](https://github.com/Jurredr/github-widgetbox)
[![ref-official-doc]](https://github.com/Jurredr/github-widgetbox?tab=readme-ov-file#widgets)

### Parameters

#### Profile

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `username` | `string` | `true` |  | Github Username |  |
| `data` | `string` |  |  | Data to show | Supported: `followers` `repositories` `stars` `commits`. Multiple data can be separated by `,`. For example: `followers,repositories,stars,commits`. |

</details>

```txt
https://github-widgetbox.vercel.app/api/profile{?username,data}
```

#### Skills

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `languages` | `string` |  |  | Languages | Format: Languages are separated by `,`. For example: `javascript,python,html,css`. |
| `frameworks` | `string` |  |  | Frameworks | Format: Multiple frameworks are separated by `,`. For example: `react,vue,angular`. |
| `libraries` | `string` |  |  | Libraries | Format: Multiple libraries are separated by `,`. For example: `react,vue,angular`. |
| `tools` | `string` |  |  | Tools | Format: Multiple tools are separated by `,`. For example: `git,docker,npm,yarn,webpack`. |
| `software` | `string` |  |  | Software | Format: Multiple software are separated by `,`. For example: `windows,linux,vscode`. |
| `includeNames` | `boolean` |  | `false` | Show Names | Supported: `true` `false`. |
| `theme` | `string` |  |  | Theme | Supported: `default` `darkmode` `viridescent` `carbon` `nautilus` `serika`. |

</details>

```txt
https://github-widgetbox.vercel.app/api/skills{?languages,frameworks,libraries,software,includeNames,theme}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- Jurredr -->
![Profile](https://github-widgetbox.vercel.app/api/profile?username=Jurredr&data=followers,repositories,stars,commits&theme=darkmode)
```

<div>
  <img src="https://github-widgetbox.vercel.app/api/profile?username=Jurredr&#38;data=followers,repositories,stars,commits&#38;theme=darkmode" alt="Profile" />
</div>

```markdown
![Skills](https://github-widgetbox.vercel.app/api/skills?frameworks=vue,react,electron,bootstrap,tailwind,express&includeNames=true&theme=darkmode)
```

<div>
  <img src="https://github-widgetbox.vercel.app/api/skills?frameworks=vue,react,electron,bootstrap,tailwind,express&#38;includeNames=true&#38;theme=darkmode" alt="Skills" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-action-outputs]: https://img.shields.io/badge/Action%20Outputs-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
