<a name="readme-top"></a>

<div align="center">
  <div>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=160&section=header">
  </div>
  <a href="https://github.com/xiaohuohumax/readme-widget-hub">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&width=416&height=68&lines=%F0%9F%8E%96%EF%B8%8FReadme+Widget+Hub%F0%9F%8E%96%EF%B8%8F"/>
  </a>
  <p><b>Utilize essa linda configuração de badges e cartões de status para fazer seu README mais professional e eficiente!</b></p>
  <div>
    <b>
       <a href="/README_pt-BR.md">Início</a>
      · <a href="README_en-US.md">English</a>
      · <a href="README.md">中文</a>
    </b>
  </div>
  <br/>
</div>

> [!Warning]
> Esta página não tem uma versão traduzida, você pode alterar para outros idiomas ou visualizar a versão no idioma padrão abaixo.

## snk

**根据 GitHub 用户的贡献图生成贪吃蛇游戏。**

[![ref-repo]](https://github.com/Platane/snk)
[![ref-online-tool]](https://platane.github.io/snk/)
[![ref-official-doc]](https://github.com/Platane/snk?tab=readme-ov-file#usage)
![ref-dependent-action]

### Uso

1. 在仓库中创建一个 `.github/workflows/` 目录。
2. 添加一个 `snk.yml` 文件，内容如下：

```yaml
name: generate animation

on:
  # 每 24 小时自动运行
  schedule:
    - cron: "0 */24 * * *"

  # 允许手动运行
  workflow_dispatch:

  # 主分支代码更新时运行
  push:
    branches:
      - main

jobs:
  generate:
    permissions:
      contents: write
    runs-on: ubuntu-latest
    timeout-minutes: 5

    steps:
      # 生成一个贪吃蛇动画来自 GitHub 用户的贡献图，输出一个 svg 动画到 <svg_out_path>
      - name: generate github-contribution-grid-snake.svg
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark

      # 推送 <build_dir> 内容到分支
      # 内容将会被推送到 https://raw.githubusercontent.com/<github_user>/<repository>/<target_branch>/<file> 或者作为 github page
      - name: push github-contribution-grid-snake.svg to the output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

3. 在你的仓库中，创建或编辑 `README.md` 文件，以包含：

```markdown
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/[Owner]/[Repo]/output/github-contribution-grid-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/[Owner]/[Repo]/output/github-contribution-grid-snake.svg">
  <img alt="github 贡献图贪吃蛇动画" src="https://raw.githubusercontent.com/[Owner]/[Repo]/output/github-contribution-grid-snake.svg">
</picture>
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20para%20topo-555555?style=for-the-badge"></a></p>

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-actions] | | | | | |
| `github_user_name` | `string` | `true` |  | GitHub 用户名 |  |
| `github_token` | `string` |  |  | GitHub Token |  |
| `outputs` | `array` |  |  | 生成的文件列表 | 文件生成规则参考 [outputs](https://github.com/Platane/snk/blob/main/action.yml#L17)。 |

</details>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20para%20topo-555555?style=for-the-badge"></a></p>

### Exemplos

```markdown
<!-- platane -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/platane/platane/output/github-contribution-grid-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/platane/platane/output/github-contribution-grid-snake.svg">
  <img alt="github 贡献图贪吃蛇动画" src="https://raw.githubusercontent.com/platane/platane/output/github-contribution-grid-snake.svg">
</picture>
```

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/platane/platane/output/github-contribution-grid-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/platane/platane/output/github-contribution-grid-snake.svg">
  <img alt="github 贡献图贪吃蛇动画" src="https://raw.githubusercontent.com/platane/platane/output/github-contribution-grid-snake.svg">
</picture>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20para%20topo-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Parâmetros%20de%20Consulta-526E86

[ref-actions]: https://img.shields.io/badge/Parâmetros%20de%20Ação-526E86

[ref-repo]: https://img.shields.io/badge/Repositório-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/Ferramentas%20Online-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+

[ref-official-doc]: https://img.shields.io/badge/Documentação%20Oficial-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=

[ref-dependent-action]: https://img.shields.io/badge/Github%20Action-577590?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNiAxOGgtNmEyIDIgMCAwIDAtMiAydjJoLTZhMiAyIDAgMCAxLTItMnYtNmgyYTIgMiAwIDAgMCAyLTJWNmEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY2YTIgMiAwIDAgMCAyIDJoMnY2YTQgNCAwIDAgMCA0IDRoNnYyYTIgMiAwIDAgMCAyIDJoNmEyIDIgMCAwIDAgMi0ydi02YTIgMiAwIDAgMC0yLTJNNi41IDEyYS41LjUgMCAwIDEtLjUtLjV2LTVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgLjUuNXY1YS41LjUgMCAwIDEtLjUuNVpNMjYgMjUuNWEuNS41IDAgMCAxLS41LjVoLTVhLjUuNSAwIDAgMS0uNS0uNXYtNWEuNS41IDAgMCAxIC41LS41aDVhLjUuNSAwIDAgMSAuNS41WiIvPjwvc3ZnPg==
