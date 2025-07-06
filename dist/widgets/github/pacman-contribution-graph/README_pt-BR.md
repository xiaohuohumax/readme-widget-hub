<a name="readme-top"></a>

<div align="center">
  <div>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=160&section=header">
  </div>
  <a href="https://github.com/xiaohuohumax/readme-widget-hub">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&width=416&height=68&lines=%F0%9F%8E%96%EF%B8%8FReadme+Widget+Hub%F0%9F%8E%96%EF%B8%8F"/>
  </a>
  <p><b>Utilize essa linda configuração de badges e cartões de status para deixar seu README mais professional e eficiente!</b></p>
  <div>
    <b>
       <a href="/README_pt-BR.md">Início</a>
      · <a href="README_en-US.md">English</a>
      · <a href="README.md">中文</a>
    </b>
  </div>
  <br/>
</div>

## Jogo Pac-Man no Gráfico de Contribuição (Pac-Man Contribution Graph Game)

**Transforma seu gráfico de contribuição do GitHub or GitLab em um jogo interativo do Pac-Man!**

[![ref-repo]](https://github.com/abozanona/pacman-contribution-graph)
[![ref-online-tool]](https://abozanona.github.io/pacman-contribution-graph/)
[![ref-official-doc]](https://github.com/abozanona/pacman-contribution-graph?tab=readme-ov-file#usage)
![ref-dependent-action]

### Uso

1. No seu repositório, crie um diretório `.github/workflows/`.
2. Adicione o arquivo `pacman-contribution.yml` com todo o conteúdo abaixo:

```yaml
name: generate pacman game

on:
  # Executa automaticamente após 24 horas
  schedule:
    - cron: "0 */24 * * *"

  # Permite que seja executado manualmente
  workflow_dispatch:

  # Executa ao efetuar push na branch principal (main)
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
      - name: generate pacman-contribution-graph.svg
        uses: abozanona/pacman-contribution-graph@main
        with:
          github_user_name: ${{ github.repository_owner }}

      # Envia um SVG para a branch de saída
      - name: push pacman-contribution-graph.svg to the output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

3. No seu repositório, crie e edite o arquivo `README.md` incluindo o bloco de código abaixo:

```markdown
## Gráfico de Contribuição do Pac-Man

<picture>
    <source media="(esquema-de-cores-preferidas: escuro)" srcset="https://raw.githubusercontent.com/[Usuário]/[Repositório]/output/pacman-contribution-graph-dark.svg">
    <source media="(esquema-de-cores-preferidas: claro)" srcset="https://raw.githubusercontent.com/[Usuário]/[Repositório]/output/pacman-contribution-graph.svg">
    <img alt="pacman contribution graph" src="https://raw.githubusercontent.com/[Usuário]/[Repositório]/output/pacman-contribution-graph.svg">
</picture>
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-actions] | | | | | |
| `github_user_name` | `string` | `true` |  | Nome do Usuário no GitHub |  |
| `github_token` | `string` |  |  | Token do GitHub |  |

</details>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

```markdown
<!-- abozanona -->
<picture>
  <source media="(esquema-de-cores-preferidas: escuro)" srcset="https://raw.githubusercontent.com/abozanona/abozanona/output/pacman-contribution-graph-dark.svg">
  <source media="(esquema-de-cores-preferidas: claro)" srcset="https://raw.githubusercontent.com/abozanona/abozanona/output/pacman-contribution-graph.svg">
  <img alt="gráfico de contribuição do pacman" src="https://raw.githubusercontent.com/abozanona/abozanona/output/pacman-contribution-graph.svg">
</picture>
```

<picture>
  <source media="(esquema-de-cores-preferidas: escuro)" srcset="https://raw.githubusercontent.com/abozanona/abozanona/output/pacman-contribution-graph-dark.svg">
  <source media="(esquema-de-cores-preferidas: claro)" srcset="https://raw.githubusercontent.com/abozanona/abozanona/output/pacman-contribution-graph.svg">
  <img alt="gráfico de contribuição do pacman" src="https://raw.githubusercontent.com/abozanona/abozanona/output/pacman-contribution-graph.svg">
</picture>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Parâmetros%20de%20Consulta-526E86

[ref-actions]: https://img.shields.io/badge/Parâmetros%20de%20Ação-526E86

[ref-repo]: https://img.shields.io/badge/Repositório-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/Ferramentas%20Online-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+

[ref-official-doc]: https://img.shields.io/badge/Documentação%20Oficial-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=

[ref-dependent-action]: https://img.shields.io/badge/Github%20Action-577590?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNiAxOGgtNmEyIDIgMCAwIDAtMiAydjJoLTZhMiAyIDAgMCAxLTItMnYtNmgyYTIgMiAwIDAgMCAyLTJWNmEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY2YTIgMiAwIDAgMCAyIDJoMnY2YTQgNCAwIDAgMCA0IDRoNnYyYTIgMiAwIDAgMCAyIDJoNmEyIDIgMCAwIDAgMi0ydi02YTIgMiAwIDAgMC0yLTJNNi41IDEyYS41LjUgMCAwIDEtLjUtLjV2LTVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgLjUuNXY1YS41LjUgMCAwIDEtLjUuNVpNMjYgMjUuNWEuNS41IDAgMCAxLS41LjVoLTVhLjUuNSAwIDAgMS0uNS0uNXYtNWEuNS41IDAgMCAxIC41LS41aDVhLjUuNSAwIDAgMSAuNS41WiIvPjwvc3ZnPg==
