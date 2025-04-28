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

## GitHub Readme YouTube Cards

**在你的 readme 中显示最近的 YouTube 视频作为 SVG 卡片。**

[![ref-repo]](https://github.com/DenverCoder1/github-readme-youtube-cards)
[![ref-official-doc]](https://github.com/DenverCoder1/github-readme-youtube-cards?tab=readme-ov-file#basic-usage)
![ref-dependent-action]

### 用法

1. 将以下代码片段添加到您想显示卡片的地方的 markdown 文件中。

```yaml
<!-- BEGIN YOUTUBE-CARDS -->
<!-- END YOUTUBE-CARDS -->
```

2. 在你的仓库中，创建一个名为 `.github` 的文件夹，然后在其中创建一个名为 `workflows` 的文件夹（如果不存在的话）。接着在 `.github/workflows/` 文件夹中创建一个文件，并给它命名为 `youtube-cards.yml` ，内容如下。

```yaml
name: GitHub Readme YouTube Cards
on:
  schedule:
    # 每小时整点运行
    - cron: "0 * * * *"
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    # 允许 GitHub Actions 写入仓库
    permissions:
      contents: write
    # 运行 GitHub Readme YouTube Cards 动作
    steps:
      - uses: DenverCoder1/github-readme-youtube-cards@main
        with:
          # 你的 YouTube 频道 ID
          channel_id: UCipSxT7a3rn81vGLw9lqRkg
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 参数

#### DenverCoder1/github-readme-youtube-cards@main

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-actions] | | | | | |
| `channel_id` | `string` | `true` |  | 你的 YouTube channel ID |  |
| `playlist_id` | `string` |  |  | 播放列表 ID |  |
| `lang` | `string` |  | `en` | 语言 |  |
| `comment_tag_name` | `string` |  | `YOUTUBE-CARDS` | 注释标签中替换内容的文本 |  |
| `youtube_api_key` | `string` |  |  | YouTube API 密钥 |  |
| `max_videos` | `number` |  | `6` | 显示的视频最大数量 |  |
| `base_url` | `string` |  | `https://ytcards.demolab.com/` | 卡片的基础 URL |  |
| `card_width` | `number` |  | `250` | 卡片的宽度 | 单位：像素。 |
| `border_radius` | `number` |  | `5` | 卡片的圆角半径 |  |
| `background_color` | `string` |  | `#0d1117` | 卡片的背景颜色 |  |
| `title_color` | `string` |  | `#ffffff` | 卡片的标题颜色 |  |
| `stats_color` | `string` |  | `#dedede` | 统计文本的颜色 |  |
| `theme_context_light` | `any` |  | `{}` | 浅色模式颜色JSON对象 |  |
| `theme_context_dark` | `any` |  | `{}` | 深色模式颜色JSON对象 |  |
| `max_title_lines` | `number` |  | `1` | 标题的最大行数 |  |
| `show_duration` | `boolean` |  | `false` | 是否显示视频时长 | 依赖于 YouTube API 密钥 `youtube_api_key`。 |
| `author_name` | `string` |  | `GitHub Actions` | 提交者的名字 |  |
| `author_email` | `string` |  | `41898282+github-actions[bot]@users.noreply.github.com` | 提交作者的电子邮件地址 |  |
| `commit_message` | `string` |  | `docs(readme): Update YouTube cards` | 提交信息 |  |
| `readme_path` | `string` |  | `README.md` | Markdown 或 HTML 文件的路径 |  |
| `output_only` | `boolean` |  | `false` | 是否跳过写入到 README 文件 |  |
| `output_type` | `string` |  | `markdown` | 输出类型 | 可选值：`markdown` `html`。 |
| ![ref-action-outputs] | | | | | |
| `markdown` | `string` | `true` |  | 生成的 Markdown 或 HTML 用于更新 README 文件 |  |
| `committed` | `string` | `true` |  | 是否动作已创建提交 | 可能值：`true` `false`。 |
| `commit_long_sha` | `string` | `true` |  | 刚刚创建的提交的完整 SHA 值 |  |
| `commit_sha` | `string` | `true` |  | 刚刚创建的提交的 7 位短 SHA 值 |  |
| `pushed` | `string` | `true` |  | 是否动作已推送到远程 | 可能值：`true` `false`。 |

</details>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```yaml
# Example usage: https://github.com/DenverCoder1/github-readme-youtube-cards/blob/main/.github/workflows/youtube-cards.yml
name: GitHub Readme YouTube Cards
on:
  schedule:
    # Runs every day at 12:00
    - cron: "0 12 * * *"
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: DenverCoder1/github-readme-youtube-cards@main
        id: youtube-cards
        with:
          channel_id: UCipSxT7a3rn81vGLw9lqRkg
          youtube_api_key: ${{ secrets.YOUTUBE_API_KEY }}
          show_duration: true
          theme_context_light: '{ "background_color": "#ffffff", "title_color": "#24292f", "stats_color": "#57606a" }'
          theme_context_dark: '{ "background_color": "#0d1117", "title_color": "#ffffff", "stats_color": "#dedede" }'
          max_title_lines: 2
          output_type: html
      - run: echo OUTPUT '${{ steps.youtube-cards.outputs.markdown }}'
        shell: bash
```

<a href="https://www.youtube.com/watch?v=1lXaKEy97qE">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://ytcards.demolab.com/?id=1lXaKEy97qE&title=GitHub+Star+Swag+Unboxing+and+Giveaways&lang=en&timestamp=1696868769&background_color=%230d1117&title_color=%23ffffff&stats_color=%23dedede&max_title_lines=2&width=250&border_radius=5&duration=172">
    <img src="https://ytcards.demolab.com/?id=1lXaKEy97qE&title=GitHub+Star+Swag+Unboxing+and+Giveaways&lang=en&timestamp=1696868769&background_color=%23ffffff&title_color=%2324292f&stats_color=%2357606a&max_title_lines=2&width=250&border_radius=5&duration=172" alt="GitHub Star Swag Unboxing and Giveaways" title="GitHub Star Swag Unboxing and Giveaways">
  </picture>
</a>
<a href="https://www.youtube.com/watch?v=maoXtlb8t44">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://ytcards.demolab.com/?id=maoXtlb8t44&title=How+To+Self-Host+GitHub+Readme+Streak+Stats+on+Vercel&lang=en&timestamp=1693523015&background_color=%230d1117&title_color=%23ffffff&stats_color=%23dedede&max_title_lines=2&width=250&border_radius=5&duration=257">
    <img src="https://ytcards.demolab.com/?id=maoXtlb8t44&title=How+To+Self-Host+GitHub+Readme+Streak+Stats+on+Vercel&lang=en&timestamp=1693523015&background_color=%23ffffff&title_color=%2324292f&stats_color=%2357606a&max_title_lines=2&width=250&border_radius=5&duration=257" alt="How To Self-Host GitHub Readme Streak Stats on Vercel" title="How To Self-Host GitHub Readme Streak Stats on Vercel">
  </picture>
</a>
<a href="https://www.youtube.com/watch?v=6u9BrDaSHJc">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://ytcards.demolab.com/?id=6u9BrDaSHJc&title=Automatically+Deploy+to+Fly.io+with+GitHub+Actions&lang=en&timestamp=1661864404&background_color=%230d1117&title_color=%23ffffff&stats_color=%23dedede&max_title_lines=2&width=250&border_radius=5&duration=312">
    <img src="https://ytcards.demolab.com/?id=6u9BrDaSHJc&title=Automatically+Deploy+to+Fly.io+with+GitHub+Actions&lang=en&timestamp=1661864404&background_color=%23ffffff&title_color=%2324292f&stats_color=%2357606a&max_title_lines=2&width=250&border_radius=5&duration=312" alt="Automatically Deploy to Fly.io with GitHub Actions" title="Automatically Deploy to Fly.io with GitHub Actions">
  </picture>
</a>
<a href="https://www.youtube.com/watch?v=J7Fm7MdZn_E">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://ytcards.demolab.com/?id=J7Fm7MdZn_E&title=Hosting+a+Python+Discord+Bot+for+Free+with+Fly.io&lang=en&timestamp=1661708747&background_color=%230d1117&title_color=%23ffffff&stats_color=%23dedede&max_title_lines=2&width=250&border_radius=5&duration=403">
    <img src="https://ytcards.demolab.com/?id=J7Fm7MdZn_E&title=Hosting+a+Python+Discord+Bot+for+Free+with+Fly.io&lang=en&timestamp=1661708747&background_color=%23ffffff&title_color=%2324292f&stats_color=%2357606a&max_title_lines=2&width=250&border_radius=5&duration=403" alt="Hosting a Python Discord Bot for Free with Fly.io" title="Hosting a Python Discord Bot for Free with Fly.io">
  </picture>
</a>
<a href="https://www.youtube.com/watch?v=0p_eQGKFY3I">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://ytcards.demolab.com/?id=0p_eQGKFY3I&title=Making+a+Wordle+Clone+Discord+Bot+with+Python+%28Nextcord%29&lang=en&timestamp=1643900217&background_color=%230d1117&title_color=%23ffffff&stats_color=%23dedede&max_title_lines=2&width=250&border_radius=5&duration=2115">
    <img src="https://ytcards.demolab.com/?id=0p_eQGKFY3I&title=Making+a+Wordle+Clone+Discord+Bot+with+Python+%28Nextcord%29&lang=en&timestamp=1643900217&background_color=%23ffffff&title_color=%2324292f&stats_color=%2357606a&max_title_lines=2&width=250&border_radius=5&duration=2115" alt="Making a Wordle Clone Discord Bot with Python (Nextcord)" title="Making a Wordle Clone Discord Bot with Python (Nextcord)">
  </picture>
</a>
<a href="https://www.youtube.com/watch?v=Mt_Bsj6K9Lw">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://ytcards.demolab.com/?id=Mt_Bsj6K9Lw&title=Run+Open+Source+Code+in+Seconds+with+GitPod&lang=en&timestamp=1642108413&background_color=%230d1117&title_color=%23ffffff&stats_color=%23dedede&max_title_lines=2&width=250&border_radius=5&duration=578">
    <img src="https://ytcards.demolab.com/?id=Mt_Bsj6K9Lw&title=Run+Open+Source+Code+in+Seconds+with+GitPod&lang=en&timestamp=1642108413&background_color=%23ffffff&title_color=%2324292f&stats_color=%2357606a&max_title_lines=2&width=250&border_radius=5&duration=578" alt="Run Open Source Code in Seconds with GitPod" title="Run Open Source Code in Seconds with GitPod">
  </picture>
</a>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-actions]: https://img.shields.io/badge/动作参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=

[ref-dependent-action]: https://img.shields.io/badge/Github%20Action-577590?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNiAxOGgtNmEyIDIgMCAwIDAtMiAydjJoLTZhMiAyIDAgMCAxLTItMnYtNmgyYTIgMiAwIDAgMCAyLTJWNmEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY2YTIgMiAwIDAgMCAyIDJoMnY2YTQgNCAwIDAgMCA0IDRoNnYyYTIgMiAwIDAgMCAyIDJoNmEyIDIgMCAwIDAgMi0ydi02YTIgMiAwIDAgMC0yLTJNNi41IDEyYS41LjUgMCAwIDEtLjUtLjV2LTVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgLjUuNXY1YS41LjUgMCAwIDEtLjUuNVpNMjYgMjUuNWEuNS41IDAgMCAxLS41LjVoLTVhLjUuNSAwIDAgMS0uNS0uNXYtNWEuNS41IDAgMCAxIC41LS41aDVhLjUuNSAwIDAgMSAuNS41WiIvPjwvc3ZnPg==
