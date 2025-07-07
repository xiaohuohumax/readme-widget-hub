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

## Cartões do YouTube no Readme do GitHub (GitHub Readme YouTube Cards)

**Workflow para exibir vídeos recentes do YouTube em cartões SVG no seu arquivo README.**

[![ref-repo]](https://github.com/DenverCoder1/github-readme-youtube-cards)
[![ref-official-doc]](https://github.com/DenverCoder1/github-readme-youtube-cards?tab=readme-ov-file#basic-usage)
![ref-dependent-action]

### Uso

1. É nescessário inserir o código abaixo no README para que o cartão seja visulizado.

```yaml
<!-- BEGIN YOUTUBE-CARDS -->
<!-- END YOUTUBE-CARDS -->
```

2. No seu repositório, crie uma pasta `.github` e dentro dela uma outra pasta de nome `workflows` caso você já não tenha uma então, crie um arquivo dentro da pasta `.github/workflows/` e der a ele o nome de `youtube-cards.yml` e adicione o código abaixo.

```yaml
name: GitHub Readme YouTube Cards
on:
  schedule:
    # Executa toda hora, na hora certa
    - cron: "0 * * * *"
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    # Permite que o trabalho seja confirmado no repositório
    permissions:
      contents: write
    # Executa os Cartões do YouTube no seu Readme do GitHub
    steps:
      - uses: DenverCoder1/github-readme-youtube-cards@main
        with:
          # ID do seu canal no YouTube
          channel_id: UCipSxT7a3rn81vGLw9lqRkg
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Parâmetros

#### DenverCoder1/github-readme-youtube-cards@main

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-actions] | | | | | |
| `channel_id` | `string` | `true` |  | ID do seu canal no YouTube |  |
| `playlist_id` | `string` |  |  | ID da Playlist |  |
| `lang` | `string` |  | `en` | Idioma |  |
| `comment_tag_name` | `string` |  | `YOUTUBE-CARDS` | O texto na tag de comentário para substituir o conteúdo |  |
| `youtube_api_key` | `string` |  |  | Chave da API do YouTube |  |
| `max_videos` | `number` |  | `6` | Máximo de vídos que devem ser exibidos |  |
| `base_url` | `string` |  | `https://ytcards.demolab.com/` | A URL base a ser usada para nos cartões |  |
| `card_width` | `number` |  | `250` | A largura dos cartões SVG | Unidade: pixels. |
| `border_radius` | `number` |  | `5` | O raio da borda dos cartões SVG |  |
| `background_color` | `string` |  | `#0d1117` | Cor de fundo dos nos cartões SVG |  |
| `title_color` | `string` |  | `#ffffff` | A cor do texto do título |  |
| `stats_color` | `string` |  | `#dedede` | A cor do texto das estatísticas |  |
| `theme_context_light` | `any` |  | `{}` | Objeto JSON em cores do modo claro |  |
| `theme_context_dark` | `any` |  | `{}` | Objeto JSON em cores do modo escuro |  |
| `max_title_lines` | `number` |  | `1` | O máximo de linhas a serem usadas no título |  |
| `show_duration` | `boolean` |  | `false` | Exibir ou ocultar o tempo de duração dos vídeos | Nescessita da seu chave da API do YouTube, `youtube_api_key`. |
| `author_name` | `string` |  | `GitHub Actions` | O nome do autor do commit |  |
| `author_email` | `string` |  | `41898282+github-actions[bot]@users.noreply.github.com` | O email do autor do commit |  |
| `commit_message` | `string` |  | `docs(readme): Update YouTube cards` | A mensagem de commit para o commit |  |
| `readme_path` | `string` |  | `README.md` | O caminho do arquivo Markdown ou HTML que será atualizado |  |
| `output_only` | `boolean` |  | `false` | Pular ou não a gravação do arquivo readme |  |
| `output_type` | `string` |  | `markdown` | Saída da sintaxe a ser usada | Opções disponíveis: `markdown` e `html`. |
| ![ref-action-outputs] | | | | | |
| `markdown` | `string` | `true` |  | O Markdown ou HTML gerado que é usado para atualizar o arquivo README |  |
| `committed` | `string` | `true` |  | Caso a ação tenha criado um commit | Possibilidades: `true` e `false`. |
| `commit_long_sha` | `string` | `true` |  | O SHA completo do commit que acabou de ser criado |  |
| `commit_sha` | `string` | `true` |  | O uso de uma SHA curta com 7 caracteres do commit que acabou de ser criado |  |
| `pushed` | `string` | `true` |  | Caso a atualização foi efetuado no no repositório remoto | Possibilidades: `true` e `false`. |

</details>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

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

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Parâmetros%20de%20Consulta-526E86

[ref-actions]: https://img.shields.io/badge/Parâmetros%20de%20Ação-526E86

[ref-action-outputs]: https://img.shields.io/badge/Ações%20de%20Saídas-526E86

[ref-repo]: https://img.shields.io/badge/Repositório-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Documentação%20Oficial-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=

[ref-dependent-action]: https://img.shields.io/badge/Github%20Action-577590?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNiAxOGgtNmEyIDIgMCAwIDAtMiAydjJoLTZhMiAyIDAgMCAxLTItMnYtNmgyYTIgMiAwIDAgMCAyLTJWNmEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY2YTIgMiAwIDAgMCAyIDJoMnY2YTQgNCAwIDAgMCA0IDRoNnYyYTIgMiAwIDAgMCAyIDJoNmEyIDIgMCAwIDAgMi0ydi02YTIgMiAwIDAgMC0yLTJNNi41IDEyYS41LjUgMCAwIDEtLjUtLjV2LTVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgLjUuNXY1YS41LjUgMCAwIDEtLjUuNVpNMjYgMjUuNWEuNS41IDAgMCAxLS41LjVoLTVhLjUuNSAwIDAgMS0uNS0uNXYtNWEuNS41IDAgMCAxIC41LS41aDVhLjUuNSAwIDAgMSAuNS41WiIvPjwvc3ZnPg==
