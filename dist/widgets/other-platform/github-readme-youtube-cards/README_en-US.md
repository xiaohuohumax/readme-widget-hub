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

## GitHub Readme YouTube Cards

**Workflow for displaying recent YouTube videos as SVG cards in your readme.**

[![ref-repo]](https://github.com/DenverCoder1/github-readme-youtube-cards)
[![ref-official-doc]](https://github.com/DenverCoder1/github-readme-youtube-cards?tab=readme-ov-file#basic-usage)
![ref-dependent-action]

### Usage

1. Add the following snippet to your markdown file where you want the cards to appear.

```yaml
<!-- BEGIN YOUTUBE-CARDS -->
<!-- END YOUTUBE-CARDS -->
```

2. In your repo, create a `.github` folder and inside create a folder named `workflows` if it does not exist. Then create a file in your `.github/workflows/` folder and give it a name such as `youtube-cards.yml` with the following contents.

```yaml
name: GitHub Readme YouTube Cards
on:
  schedule:
    # Runs every hour, on the hour
    - cron: "0 * * * *"
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    # Allow the job to commit to the repository
    permissions:
      contents: write
    # Run the GitHub Readme YouTube Cards action
    steps:
      - uses: DenverCoder1/github-readme-youtube-cards@main
        with:
          # Your YouTube channel ID
          channel_id: UCipSxT7a3rn81vGLw9lqRkg
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Parameters

#### DenverCoder1/github-readme-youtube-cards@main

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-actions] | | | | | |
| `channel_id` | `string` | `true` |  | Your YouTube channel ID |  |
| `playlist_id` | `string` |  |  | Playlist ID |  |
| `lang` | `string` |  | `en` | Language |  |
| `comment_tag_name` | `string` |  | `YOUTUBE-CARDS` | The text in the comment tag for replacing content |  |
| `youtube_api_key` | `string` |  |  | YouTube API key |  |
| `max_videos` | `number` |  | `6` | The maximum number of videos to display |  |
| `base_url` | `string` |  | `https://ytcards.demolab.com/` | The base URL to use for the cards |  |
| `card_width` | `number` |  | `250` | The width of the SVG cards | Unit: pixels. |
| `border_radius` | `number` |  | `5` | The border radius of the SVG cards |  |
| `background_color` | `string` |  | `#0d1117` | The background color of the SVG cards |  |
| `title_color` | `string` |  | `#ffffff` | The color of the title text |  |
| `stats_color` | `string` |  | `#dedede` | The color of the stats text |  |
| `theme_context_light` | `any` |  | `{}` | JSON object with light mode colors |  |
| `theme_context_dark` | `any` |  | `{}` | JSON object with dark mode colors |  |
| `max_title_lines` | `number` |  | `1` | The maximum number of lines to use for the title |  |
| `show_duration` | `boolean` |  | `false` | Whether to show the duration of the videos | Requires the YouTube API key `youtube_api_key`. |
| `author_name` | `string` |  | `GitHub Actions` | The name of the commit author |  |
| `author_email` | `string` |  | `41898282+github-actions[bot]@users.noreply.github.com` | The email address of the commit author |  |
| `commit_message` | `string` |  | `docs(readme): Update YouTube cards` | The commit message to use for the commit |  |
| `readme_path` | `string` |  | `README.md` | The path to the Markdown or HTML file to update |  |
| `output_only` | `boolean` |  | `false` | Whether to skip writing to the readme file |  |
| `output_type` | `string` |  | `markdown` | The output syntax to use | Available options: `markdown` `html`. |
| ![ref-action-outputs] | | | | | |
| `markdown` | `string` | `true` |  | The generated Markdown or HTML used for updating the README file |  |
| `committed` | `string` | `true` |  | Whether the action has created a commit | Possible: `true` `false`. |
| `commit_long_sha` | `string` | `true` |  | The full SHA of the commit that has just been created |  |
| `commit_sha` | `string` | `true` |  | The short 7-character SHA of the commit that has just been created |  |
| `pushed` | `string` | `true` |  | Whether the action has pushed to the remote | Possible: `true` `false`. |

</details>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

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

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-actions]: https://img.shields.io/badge/Action%20Params-526E86

[ref-action-outputs]: https://img.shields.io/badge/Action%20Outputs-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=

[ref-dependent-action]: https://img.shields.io/badge/Github%20Action-577590?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNiAxOGgtNmEyIDIgMCAwIDAtMiAydjJoLTZhMiAyIDAgMCAxLTItMnYtNmgyYTIgMiAwIDAgMCAyLTJWNmEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY2YTIgMiAwIDAgMCAyIDJoMnY2YTQgNCAwIDAgMCA0IDRoNnYyYTIgMiAwIDAgMCAyIDJoNmEyIDIgMCAwIDAgMi0ydi02YTIgMiAwIDAgMC0yLTJNNi41IDEyYS41LjUgMCAwIDEtLjUtLjV2LTVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgLjUuNXY1YS41LjUgMCAwIDEtLjUuNVpNMjYgMjUuNWEuNS41IDAgMCAxLS41LjVoLTVhLjUuNSAwIDAgMS0uNS0uNXYtNWEuNS41IDAgMCAxIC41LS41aDVhLjUuNSAwIDAgMSAuNS41WiIvPjwvc3ZnPg==
