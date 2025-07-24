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

## Readme Credly Badges

**A GitHub Action that automatically updates your `README.md` (or any markdown file) with your [Credly](https://www.credly.com/) badge details, no manual edits required!**

[![ref-repo]](https://github.com/jd-35656/readme-credly-badges/)
[![ref-official-doc]](https://github.com/jd-35656/readme-credly-badges/)
![ref-dependent-action]

### Usage

1. In the repository, create a `.github/workflows/` directory.
2. Add `update-badges.yaml` file with the following content:

```yaml
name: Update Credly Badges

on:
schedule:
  - cron: '0 0 * * *' # Runs daily at 00:00 UTC
workflow_dispatch: # Optional: allows manual trigger

permissions:
contents: write # Required if using the default GITHUB_TOKEN

jobs:
update-readme:
  name: Update README with Credly Badges
  runs-on: ubuntu-latest

  steps:
    - name: Update Badges in README
      uses: jd-35656/readme-credly-badges@v1
      with:
        credly_username: 'your-credly-username'
        github_token: ${{ secrets.GITHUB_TOKEN }}
```

3. In your repository, create or edit the `README.md` file to include:

```markdown
## Credly Badges
<!-- START CREDLY BADGES -->
<!-- END CREDLY BADGES -->
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Parameters

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-actions] | | | | | |
| `credly_username` | `string` |  | `{github.actor}` | Your Credly username |  |
| `badge_size` | `string` |  | `150x150` | Badge image size (e.g., 150x150, 680x680) |  |
| `badge_sort_by` | `string` |  | `issued` | Sort order. | Optional values: `issued` `updated` `accepted`. |
| `github_api_url` | `string` |  | `https://api.github.com` | GitHub API URL (for GitHub Enterprise use). |  |
| `github_token` | `string` | `true` | `{github.token}` | Token with write access to the repository. |  |
| `github_repo` | `string` |  | `{github.repository}` | Target GitHub repository. |  |
| `github_branch` | `string` |  | `main` | Branch where the target file is located. |  |
| `readme_file` | `string` |  | `README.md` | Path to the markdown file to update. |  |
| `commit_message` | `string` |  | `Updated README with new badges` | Custom commit message. |  |

</details>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

```markdown
### Credly Badges

<!-- START CREDLY BADGES -->
[![HashiCorp Certified: Terraform Associate (003)](https://images.credly.com/size/150x150/images/ed4be915-68f8-428a-b332-40ded9084ee5/blob)](https://www.credly.com/badges/9818630e-28f4-4541-964c-e79041c4d601)
[![AWS Certified DevOps Engineer – Professional](https://images.credly.com/size/150x150/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png)](https://www.credly.com/badges/d557a8cd-735a-4abe-8f83-0f2e4f514a2c)
[![Red Hat System Administration II (RH134) - Ver. 9.0](https://images.credly.com/size/150x150/images/b9d7d72b-ff77-4bd0-af19-7cedff6f6ae3/Red_Hat_System_Administration_II.png)](https://www.credly.com/badges/06bb5e5a-8069-4d4d-9f39-d608dbf84cd3)
[![Red Hat System Administration I (RH124) - Ver. 9.0](https://images.credly.com/size/150x150/images/cefff7f2-8ca9-40a1-a5f8-17139fccb048/Red_Hat_System_Administration_I.png)](https://www.credly.com/badges/adfadf9c-8271-43d7-8edb-ae2370fe272d)
[![AWS Certified Developer – Associate](https://images.credly.com/size/150x150/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png)](https://www.credly.com/badges/0def91c4-2a33-47a9-90fb-0cbaaaaca301)
[![AWS Certified Cloud Practitioner](https://images.credly.com/size/150x150/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png)](https://www.credly.com/badges/8cdd9a26-4452-410d-9d20-b351629dcf75)
[![AWS Partner: Technical Accredited](https://images.credly.com/size/150x150/images/a253b994-caa6-4dd1-bf0e-434dd012b1f6/image.png)](https://www.credly.com/badges/3ccfe59f-8525-4b35-bacb-d5955486bef4)
<!-- END CREDLY BADGES -->
```

### Credly Badges

<a href="https://www.credly.com/badges/9818630e-28f4-4541-964c-e79041c4d601"><img src="https://images.credly.com/size/150x150/images/ed4be915-68f8-428a-b332-40ded9084ee5/blob" alt="HashiCorp Certified: Terraform Associate (003)" width="100px"></a> <a href="https://www.credly.com/badges/d557a8cd-735a-4abe-8f83-0f2e4f514a2c"><img src="https://images.credly.com/size/150x150/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png" alt="AWS Certified DevOps Engineer – Professional" width="100px"></a> <a href="https://www.credly.com/badges/06bb5e5a-8069-4d4d-9f39-d608dbf84cd3"><img src="https://images.credly.com/size/150x150/images/b9d7d72b-ff77-4bd0-af19-7cedff6f6ae3/Red_Hat_System_Administration_II.png" alt="Red Hat System Administration II (RH134) - Ver. 9.0" width="100px"></a> <a href="https://www.credly.com/badges/adfadf9c-8271-43d7-8edb-ae2370fe272d"><img src="https://images.credly.com/size/150x150/images/cefff7f2-8ca9-40a1-a5f8-17139fccb048/Red_Hat_System_Administration_I.png" alt="Red Hat System Administration I (RH124) - Ver. 9.0" width="100px"></a> <a href="https://www.credly.com/badges/0def91c4-2a33-47a9-90fb-0cbaaaaca301"><img src="https://images.credly.com/size/150x150/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png" alt="AWS Certified Developer – Associate" width="100px"></a> <a href="https://www.credly.com/badges/8cdd9a26-4452-410d-9d20-b351629dcf75"><img src="https://images.credly.com/size/150x150/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" alt="AWS Certified Cloud Practitioner" width="100px"></a> <a href="https://www.credly.com/badges/3ccfe59f-8525-4b35-bacb-d5955486bef4"><img src="https://images.credly.com/size/150x150/images/a253b994-caa6-4dd1-bf0e-434dd012b1f6/image.png" alt="AWS Partner: Technical Accredited" width="100px"></a>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-actions]: https://img.shields.io/badge/Action%20Params-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=

[ref-dependent-action]: https://img.shields.io/badge/Github%20Action-577590?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNiAxOGgtNmEyIDIgMCAwIDAtMiAydjJoLTZhMiAyIDAgMCAxLTItMnYtNmgyYTIgMiAwIDAgMCAyLTJWNmEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY2YTIgMiAwIDAgMCAyIDJoMnY2YTQgNCAwIDAgMCA0IDRoNnYyYTIgMiAwIDAgMCAyIDJoNmEyIDIgMCAwIDAgMi0ydi02YTIgMiAwIDAgMC0yLTJNNi41IDEyYS41LjUgMCAwIDEtLjUtLjV2LTVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgLjUuNXY1YS41LjUgMCAwIDEtLjUuNVpNMjYgMjUuNWEuNS41IDAgMCAxLS41LjVoLTVhLjUuNSAwIDAgMS0uNS0uNXYtNWEuNS41IDAgMCAxIC41LS41aDVhLjUuNSAwIDAgMSAuNS41WiIvPjwvc3ZnPg==
