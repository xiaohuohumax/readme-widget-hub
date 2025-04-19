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
      · <a href="README.md">中文</a>
    </b>
  </div>
  <br/>
</div>

## Data Card for Spotify

**Dynamically generated Spotify data to embed in your README or website.**

[![ref-repo]](https://github.com/magic-ike/spotify-data-card)
[![ref-online-tool]](https://data-card-for-spotify.herokuapp.com/)
[![ref-official-doc]](https://github.com/magic-ike/spotify-data-card?tab=readme-ov-file#generating-a-data-card)

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `userId` | `string` | `true` |  | Spotify user ID |  |
| `show_border` | `boolean` |  | `false` | Whether or not to show a white border around the data card | Supported: `true` `false`. |
| `show_date` | `boolean` |  | `false` | Whether or not to show the date and time that the data card was generated | Supported: `true` `false`. |
| `time_zone` | `string` |  | `America/Los_Angeles` | Time zone | Refer to [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List). |
| `custom_title` | `string` |  |  | Custom title |  |
| `hide_title` | `boolean` |  | `false` | Whether or not to hide the title |  |
| `hide_explicit` | `boolean` |  | `false` | Whether or not to hide explicit tracks from all sections |  |
| `hide_playing` | `boolean` |  | `false` | Whether or not to hide the "Currently Listening To" section |  |
| `hide_recents` | `boolean` |  | `false` | Whether or not to hide the "Recently Played Tracks" section |  |
| `hide_top_tracks` | `boolean` |  | `false` | Whether or not to hide the "Top Tracks" section |  |
| `hide_top_artists` | `boolean` |  | `false` | Whether or not to hide the "Top Artists" section |  |
| `limit` | `number` |  | `5` | Number of tracks to show per section | Supported: `1` to `10`. |

</details>

```txt
https://data-card-for-spotify.herokuapp.com/api/card{?userId,show_border,show_date,time_zone,custom_title,hide_title,hide_explicit,hide_playing,hide_recents,hide_top_tracks,hide_top_artists,limit}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- magic-ike -->
![Spotify Data Card](https://data-card-for-spotify.herokuapp.com/api/card?user_id=12146253656&hide_explicit=true&limit=1)
```

<div>
  <img src="https://data-card-for-spotify.herokuapp.com/api/card?user_id=12146253656&#38;hide_explicit=true&#38;limit=1" alt="Spotify Data Card" />
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
