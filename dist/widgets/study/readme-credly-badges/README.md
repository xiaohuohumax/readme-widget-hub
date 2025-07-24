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
      · <a href="README_pt-BR.md">Português</a>
    </b>
  </div>
  <br/>
</div>

## Readme Credly Badges

**一个自动更新 README 文件中 Credly 徽章详情的 Python GitHub Action。**

[![ref-repo]](https://github.com/jd-35656/readme-credly-badges/)
[![ref-official-doc]](https://github.com/jd-35656/readme-credly-badges/)
![ref-dependent-action]

### 用法

1. 在仓库中创建一个 `.github/workflows/` 目录。
2. 添加 `update-badges.yaml` 文件，内容如下：

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

3. 在你的仓库中，创建或编辑 `README.md` 文件以包含：

```markdown
## Credly Badges
<!-- START CREDLY BADGES -->
<!-- END CREDLY BADGES -->
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-actions] | | | | | |
| `credly_username` | `string` |  | `{github.actor}` | 你的 Credly 用户名 |  |
| `badge_size` | `string` |  | `150x150` | 徽章大小 (例如，150x150, 680x680) |  |
| `badge_sort_by` | `string` |  | `issued` | 徽章排序方式 | 可选值：`issued` `updated` `accepted`。 |
| `github_api_url` | `string` |  | `https://api.github.com` | GitHub API URL（用于 GitHub 企业版）。 |  |
| `github_token` | `string` | `true` | `{github.token}` | 具有写入权限的令牌。 |  |
| `github_repo` | `string` |  | `{github.repository}` | 目标 GitHub 仓库。 |  |
| `github_branch` | `string` |  | `main` | 目标文件所在的分支。 |  |
| `readme_file` | `string` |  | `README.md` | 更新 markdown 文件的路径。 |  |
| `commit_message` | `string` |  | `Updated README with new badges` | 自定义提交信息。 |  |

</details>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
### Credly 徽章

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

### Credly 徽章

<a href="https://www.credly.com/badges/9818630e-28f4-4541-964c-e79041c4d601"><img src="https://images.credly.com/size/150x150/images/ed4be915-68f8-428a-b332-40ded9084ee5/blob" alt="HashiCorp Certified: Terraform Associate (003)" width="100px"></a> <a href="https://www.credly.com/badges/d557a8cd-735a-4abe-8f83-0f2e4f514a2c"><img src="https://images.credly.com/size/150x150/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png" alt="AWS Certified DevOps Engineer – Professional" width="100px"></a> <a href="https://www.credly.com/badges/06bb5e5a-8069-4d4d-9f39-d608dbf84cd3"><img src="https://images.credly.com/size/150x150/images/b9d7d72b-ff77-4bd0-af19-7cedff6f6ae3/Red_Hat_System_Administration_II.png" alt="Red Hat System Administration II (RH134) - Ver. 9.0" width="100px"></a> <a href="https://www.credly.com/badges/adfadf9c-8271-43d7-8edb-ae2370fe272d"><img src="https://images.credly.com/size/150x150/images/cefff7f2-8ca9-40a1-a5f8-17139fccb048/Red_Hat_System_Administration_I.png" alt="Red Hat System Administration I (RH124) - Ver. 9.0" width="100px"></a> <a href="https://www.credly.com/badges/0def91c4-2a33-47a9-90fb-0cbaaaaca301"><img src="https://images.credly.com/size/150x150/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png" alt="AWS Certified Developer – Associate" width="100px"></a> <a href="https://www.credly.com/badges/8cdd9a26-4452-410d-9d20-b351629dcf75"><img src="https://images.credly.com/size/150x150/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" alt="AWS Certified Cloud Practitioner" width="100px"></a> <a href="https://www.credly.com/badges/3ccfe59f-8525-4b35-bacb-d5955486bef4"><img src="https://images.credly.com/size/150x150/images/a253b994-caa6-4dd1-bf0e-434dd012b1f6/image.png" alt="AWS Partner: Technical Accredited" width="100px"></a>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-actions]: https://img.shields.io/badge/动作参数-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=

[ref-dependent-action]: https://img.shields.io/badge/Github%20Action-577590?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNiAxOGgtNmEyIDIgMCAwIDAtMiAydjJoLTZhMiAyIDAgMCAxLTItMnYtNmgyYTIgMiAwIDAgMCAyLTJWNmEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY2YTIgMiAwIDAgMCAyIDJoMnY2YTQgNCAwIDAgMCA0IDRoNnYyYTIgMiAwIDAgMCAyIDJoNmEyIDIgMCAwIDAgMi0ydi02YTIgMiAwIDAgMC0yLTJNNi41IDEyYS41LjUgMCAwIDEtLjUtLjV2LTVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgLjUuNXY1YS41LjUgMCAwIDEtLjUuNVpNMjYgMjUuNWEuNS41IDAgMCAxLS41LjVoLTVhLjUuNSAwIDAgMS0uNS0uNXYtNWEuNS41IDAgMCAxIC41LS41aDVhLjUuNSAwIDAgMSAuNS41WiIvPjwvc3ZnPg==
