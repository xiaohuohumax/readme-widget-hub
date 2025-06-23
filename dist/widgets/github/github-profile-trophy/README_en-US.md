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

## GitHub Profile Trophy

**Add dynamically generated GitHub Stat Trophies on your readme.**

[![ref-repo]](https://github.com/ryo-ma/github-profile-trophy)
[![ref-online-tool]](https://github-profile-trophy.vercel.app/)
[![ref-official-doc]](https://github.com/ryo-ma/github-profile-trophy?tab=readme-ov-file#optional-request-parameters)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `username` | `string` | `true` |  | GitHub username |  |
| `title` | `string` |  |  | Filter by titles | Supported: `Commits` `Stars` `Issues` `Repositories` `Experience` `Followers` `PullRequest` `Reviews` Multiple titles are separated by `,` and `-` can be added before the title to exclude it, for example `-Commits`. |
| `rank` | `string` |  |  | Filter trophies by rank | Supported: `SECRET` `?` (UNKNOWN) `SSS` `SS` `S` `AAA` `AA` `A` `B` `C`, multiple ranks are separated by `,` and `-` can be added before the rank to exclude it, for example `-?`. |
| `column` | `number` |  | `6` | Number of columns to display | You can set `column` to `-1` to adapt the width to the number of trophies, the parameter `row` will be ignored. |
| `row` | `number` |  | `3` | Number of rows to display |  |
| `theme` | `string` |  | `flat` | Apply theme | Supported: `flat` `onedark` `gruvbox` `dracula` `monokai` `chalk` `nord` `alduin` `darkhub` `juicyfresh` `buddhism` `oldie` `radical` `onestar` `discord` `algolia` `gitdimmed` `tokyonight` `matrix` `apprentice` `dark_dimmed` `dark_lover` `kimbie_dark`. |
| `margin-w` | `number` |  | `0` | Margin Width |  |
| `margin-h` | `number` |  | `0` | Margin Height |  |
| `no-bg` | `boolean` |  | `false` | Transparent background |  |
| `no-frame` | `boolean` |  | `false` | Hide frames |  |

</details>

```txt
https://github-profile-trophy.vercel.app/{?username,title,rank,column,row,theme,margin-w,margin-h,no-bg,no-frame}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- ryo-ma -->
![Trophy](https://github-profile-trophy.vercel.app/?username=ryo-ma)
```

<div>
  <img src="https://github-profile-trophy.vercel.app/?username=ryo-ma" alt="Trophy" />
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
