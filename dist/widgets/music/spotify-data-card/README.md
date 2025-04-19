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

## Data Card for Spotify

**动态生成 Spotify 数据，嵌入你的 README 或网站。**

[![ref-repo]](https://github.com/magic-ike/spotify-data-card)
[![ref-online-tool]](https://data-card-for-spotify.herokuapp.com/)
[![ref-official-doc]](https://github.com/magic-ike/spotify-data-card?tab=readme-ov-file#generating-a-data-card)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `userId` | `string` | `true` |  | Spotify 用户 ID |  |
| `show_border` | `boolean` |  | `false` | 是否在数据卡片周围显示白色边框 | 可选值：`true` `false`。 |
| `show_date` | `boolean` |  | `false` | 是否显示数据卡片生成时的日期和时间 | 可选值：`true` `false`。 |
| `time_zone` | `string` |  | `America/Los_Angeles` | 时区 | 参考：[时区列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)。 |
| `custom_title` | `string` |  |  | 自定义标题 |  |
| `hide_title` | `boolean` |  | `false` | 是否隐藏标题 |  |
| `hide_explicit` | `boolean` |  | `false` | 是否全局隐藏限制级曲目 |  |
| `hide_playing` | `boolean` |  | `false` | 是否隐藏正在收听部分 |  |
| `hide_recents` | `boolean` |  | `false` | 是否隐藏最近播放的曲目部分 |  |
| `hide_top_tracks` | `boolean` |  | `false` | 是否隐藏热门歌曲部分 |  |
| `hide_top_artists` | `boolean` |  | `false` | 是否隐藏热门艺术家部分 |  |
| `limit` | `number` |  | `5` | 每部分显示的曲目数量 | 可选值：`1` 到 `10`。 |

</details>

```txt
https://data-card-for-spotify.herokuapp.com/api/card{?userId,show_border,show_date,time_zone,custom_title,hide_title,hide_explicit,hide_playing,hide_recents,hide_top_tracks,hide_top_artists,limit}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
<!-- magic-ike -->
![Spotify 数据卡片](https://data-card-for-spotify.herokuapp.com/api/card?user_id=12146253656&hide_explicit=true&limit=1)
```

<div>
  <img src="https://data-card-for-spotify.herokuapp.com/api/card?user_id=12146253656&#38;hide_explicit=true&#38;limit=1" alt="Spotify 数据卡片" />
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
