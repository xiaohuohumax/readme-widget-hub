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

## My Badges

**My Badges is a GitHub Action that generates badges for your profile README.md. Badges will be updated automatically every day. And you will get new badges as you progress, or as community adds new badges. **Yes, you can [add your own badges](https://github.com/my-badges/my-badges/blob/master/CONTRIBUTING.md)!****

[![ref-repo]](https://github.com/my-badges/my-badges)
[![ref-official-doc]](https://github.com/my-badges/my-badges)
![ref-dependent-action]

### Usage

1. In the repository, create a `.github/workflows/` directory.
2. Add `my-badges.yml` file with the following content:

```yaml
name: my-badges

on:
  workflow_dispatch:
  schedule:
    - cron: '0 0 * * *'

permissions:
  contents: write

jobs:
  my-badges:
    runs-on: ubuntu-latest
    steps:
      - name: Update My Badges
        run: npx update-my-badges ${{github.repository_owner}}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

3. In your repository, create or edit the `README.md` file to include:

```markdown
## My Badges
<!-- my-badges start -->
<!-- my-badges end -->
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-actions] | | | | | |
| `env.GITHUB_TOKEN` | `string` |  |  | GitHub Token | The workflow will use a default runner token. |
| `env.GITHUB_USER` | `string` |  |  | GitHub Username |  |
| `env.GITHUB_REPO` | `string` |  | `{user/user}` | Repository name to push badges. |  |
| `data` | `string` |  |  | Path to JSON to generate badges. | If empty, required data will be obtained from the GH API. |
| `size` | `number` |  | `64` | Badge size for README.md, px. |  |
| `dryrun` | `boolean` |  |  | Generate badges, but skip pushing them to git. |  |
| `pick` | `string` |  |  | List of badges to pick. | Pass `--pick="a-commit,ab-commit,revert-revert-commit"` to generate only the specified entries. If empty gets all of them. |
| `omit` | `string` |  |  | List of badges to exclude. | For example, if you're too shy to flex your stars: `--omit:stars-100,stars-500,stars-1000` or even shorter `--omit:stars-*`. |
| `compact` | `boolean` |  |  | Represent the highest tier badges in README.md. | For example, If you have both `stars-100` and `stars-500` achievements, only the last one will be shown. |

</details>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
<!-- my-badges start -->
<h4><a href="https://github.com/my-badges/my-badges">My Badges</a></h4>

<a href="my-badges/github-anniversary-10.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/github-anniversary/github-anniversary-10.png?raw=true" alt="I joined GitHub 10 years ago." title="I joined GitHub 10 years ago." width="64"></a>
<a href="my-badges/evening-commits.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/time-of-commit/evening-commits.png?raw=true" alt="I commit in the evening." title="I commit in the evening." width="64"></a>
<a href="my-badges/my-badges-contributor.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/my-badges-contributor/my-badges-contributor.png?raw=true" alt="I contributed to &lt;a href=&quot;https://github.com/my-badges/my-badges&quot;&gt;My Badges&lt;/a&gt;!" title="I contributed to &lt;a href=&quot;https://github.com/my-badges/my-badges&quot;&gt;My Badges&lt;/a&gt;!" width="64"></a>
<a href="my-badges/the-ultimate-question.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/the-ultimate-question/the-ultimate-question.png?raw=true" alt="I found the answer to the ultimate question of life, the universe, and everything!" title="I found the answer to the ultimate question of life, the universe, and everything!" width="64"></a>
<a href="my-badges/mass-delete-commit-10k.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/mass-delete-commit/mass-delete-commit-10k.png?raw=true" alt="When I delete code, I delete a lot." title="When I delete code, I delete a lot." width="64"></a>
<a href="my-badges/ab-commit.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/abc-commit/ab-commit.png?raw=true" alt="One of my commit sha starts with &quot;ab&quot;." title="One of my commit sha starts with &quot;ab&quot;." width="64"></a>
<a href="my-badges/morning-commits.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/time-of-commit/morning-commits.png?raw=true" alt="I commit in the morning." title="I commit in the morning." width="64"></a>
<a href="my-badges/old-issue-3.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/old-issue/old-issue-3.png?raw=true" alt="I closed an issue that was open for 3 years" title="I closed an issue that was open for 3 years" width="64"></a>
<a href="my-badges/pr-collaboration-10.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/pr-collaboration/pr-collaboration-10.png?raw=true" alt="I have participated in pull requests with 10 or more people" title="I have participated in pull requests with 10 or more people" width="64"></a>
<a href="my-badges/fix-5.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/fix-commit/fix-5.png?raw=true" alt="I did 5 sequential fixes." title="I did 5 sequential fixes." width="64"></a>
<a href="my-badges/stars-1000.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/stars/stars-1000.png?raw=true" alt="I collected 1000 stars." title="I collected 1000 stars." width="64"></a>
<a href="my-badges/dead-commit.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/dead-commit/dead-commit.png?raw=true" alt="I pushed a commit with &quot;dead&quot; 4 times." title="I pushed a commit with &quot;dead&quot; 4 times." width="64"></a>
<!-- my-badges end -->
```

<a href="my-badges/evening-commits.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/time-of-commit/evening-commits.png?raw=true" alt="I commit in the evening." title="I commit in the evening." width="64"></a> <a href="my-badges/my-badges-contributor.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/my-badges-contributor/my-badges-contributor.png?raw=true" alt="I contributed to &lt;a href=&quot;https://github.com/my-badges/my-badges&quot;&gt;My Badges&lt;/a&gt;!" title="I contributed to &lt;a href=&quot;https://github.com/my-badges/my-badges&quot;&gt;My Badges&lt;/a&gt;!" width="64"></a> <a href="my-badges/the-ultimate-question.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/the-ultimate-question/the-ultimate-question.png?raw=true" alt="I found the answer to the ultimate question of life, the universe, and everything!" title="I found the answer to the ultimate question of life, the universe, and everything!" width="64"></a> <a href="my-badges/mass-delete-commit-10k.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/mass-delete-commit/mass-delete-commit-10k.png?raw=true" alt="When I delete code, I delete a lot." title="When I delete code, I delete a lot." width="64"></a> <a href="my-badges/ab-commit.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/abc-commit/ab-commit.png?raw=true" alt="One of my commit sha starts with &quot;ab&quot;." title="One of my commit sha starts with &quot;ab&quot;." width="64"></a> <a href="my-badges/morning-commits.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/time-of-commit/morning-commits.png?raw=true" alt="I commit in the morning." title="I commit in the morning." width="64"></a> <a href="my-badges/old-issue-3.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/old-issue/old-issue-3.png?raw=true" alt="I closed an issue that was open for 3 years" title="I closed an issue that was open for 3 years" width="64"></a> <a href="my-badges/pr-collaboration-10.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/pr-collaboration/pr-collaboration-10.png?raw=true" alt="I have participated in pull requests with 10 or more people" title="I have participated in pull requests with 10 or more people" width="64"></a> <a href="my-badges/fix-5.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/fix-commit/fix-5.png?raw=true" alt="I did 5 sequential fixes." title="I did 5 sequential fixes." width="64"></a> <a href="my-badges/stars-1000.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/stars/stars-1000.png?raw=true" alt="I collected 1000 stars." title="I collected 1000 stars." width="64"></a> <a href="my-badges/dead-commit.md"><img src="https://github.com/my-badges/my-badges/blob/master/src/all-badges/dead-commit/dead-commit.png?raw=true" alt="I pushed a commit with &quot;dead&quot; 4 times." title="I pushed a commit with &quot;dead&quot; 4 times." width="64"></a>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-actions]: https://img.shields.io/badge/Action%20Params-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=

[ref-dependent-action]: https://img.shields.io/badge/Github%20Action-577590?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNiAxOGgtNmEyIDIgMCAwIDAtMiAydjJoLTZhMiAyIDAgMCAxLTItMnYtNmgyYTIgMiAwIDAgMCAyLTJWNmEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY2YTIgMiAwIDAgMCAyIDJoMnY2YTQgNCAwIDAgMCA0IDRoNnYyYTIgMiAwIDAgMCAyIDJoNmEyIDIgMCAwIDAgMi0ydi02YTIgMiAwIDAgMC0yLTJNNi41IDEyYS41LjUgMCAwIDEtLjUtLjV2LTVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgLjUuNXY1YS41LjUgMCAwIDEtLjUuNVpNMjYgMjUuNWEuNS41IDAgMCAxLS41LjVoLTVhLjUuNSAwIDAgMS0uNS0uNXYtNWEuNS41IDAgMCAxIC41LS41aDVhLjUuNSAwIDAgMSAuNS41WiIvPjwvc3ZnPg==
