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

## Perfil Readme do GitHub (GitHub Readme Profile)

**Exiba suas estatísticas do perfil do GitHub em SVG.**

[![ref-repo]](https://github.com/FajarKim/github-readme-profile)
[![ref-online-tool]](https://gh-readme-profile-generator.vercel.app/)
[![ref-official-doc]](https://github.com/FajarKim/github-readme-profile)

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `username` | `string` | `true` |  | Nome do usuário registrado no GitHub. | Exemplo: `FajarKim`. |
| `title_color` | `string` |  | `2f80ed` | Cor do título no | Formato: `HEX` ex. `FF0000`. |
| `text_color` | `string` |  | `434d58` | Cor do texto no corpo do cartão | Formato: `HEX` ex. `FF0000`. |
| `icon_color` | `string` |  | `4c71f2` | Cor do ícones | Formato: `HEX` ex. `FF0000`. |
| `border_color` | `string` |  | `e4e2e2` | Cor da borda do cartão | Formato: `HEX` ex. `FF0000`. Não se aplica quando o `hide_border` está habilitado. |
| `bg_color` | `string` |  | `fffefe` | Cor de fundo do cartão. | Formato: `HEX`, `gradient(angle,start,end)` ex. `FF0000`, `30,E96443,904E95`. |
| `stroke_color` | `string` |  | `e4e2e2` | Cor da borda na imagem do perfil | Formato: `HEX` ex. `FF0000`. Não se aplica quando `hide_stroke` está habilitado. |
| `username_color` | `string` |  | `434d58` | Cor do texto do nome do usuário | Formato: `HEX` ex. `FF0000`. |
| `theme` | `string` |  | `default` | Nome do teme, escolher um da lista com [todos os temas disponíveis](https://github.com/FajarKim/github-readme-profile/tree/master/themes) | Suporta: `default`, `transparent`, `dark` or `highcontrast`. |
| `title` | `string` |  |  | Custom title text for the card | Before use, encode the text to URL format using a tool like [URL Encoder](https://www.urlencoder.org/). |
| `locate` | `string` |  | `en` | Idioma | Suporta: `en`, `ar`, `fr`, `id`, `ja` or `ko`. |
| `border_width` | `number` |  | `1` | Alterar a largura da borda manualmente |  |
| `border_radius` | `number` |  | `4.5` | Corner rounding on the card |  |
| `hide` | `string` |  |  | Ocultar os [itens específicos](https://github.com/FajarKim/github-readme-profile#hiding-individual-stats) from stats | Exemplo: `&hide=repos,stars,forks,commits,prs,prs_merged,issues,contributed`. |
| `show` | `string` |  |  | Mostra [adicionais itens](https://github.com/FajarKim/github-readme-profile?tab=readme-ov-file#showing-additional-individual-stats) no cartão de estatísticas | Exemplo: `&show=reviews,issues_closed,discussions_started,discussions_answered`. |
| `format` | `string` |  | `svg` | Formato de saída do cartão, opções | Suporta: `svg`, `png`, `json`, or `xml`. |
| `disabled_animations` | `boolean` |  | `false` | Desativa todas as animações no cartão | Suporta:`false` or `true`. |
| `hide_border` | `string` |  | `false` | Esconde a borda do cartão | Suporta: `false` or `true`. |
| `hide_stroke` | `boolean` |  | `false` | Oculta a linha do perfil na imagem do cartão | Suporta: `false` or `true`. |
| `revert` | `boolean` |  | `false` | Inverte a ordem de exibição, posicionando as estatísticas à esquerda e a imagem à direita. | Suporta: `false` or `true`. |
| `photo_quality` | `number` |  | `15` | Qualidade da imagem do perfil | Repesentada pela porcentagem (1-100). |
| `photo_resize` | `number` |  | `150` | Alterar o tamanho da imagem do perfil com a largura | Em pixels, Menor valor permitido é 10px. |

</details>

```txt
https://gh-readme-profile.vercel.app/api{?username,title_color,text_color,icon_color,border_color,bg_color,stroke_color,username_color,theme,title,locate,border_width,border_radius,hide,show,format,disabled_animations,hide_border,hide_stroke,revert,photo_quality,photo_resize}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

#### Cartão em Português

```markdown
<!-- FajarKim GitHub Readme Profile -->
![Cartão do GitHub Readme Profile](https://gh-readme-profile.vercel.app/api?username=FajarKim&theme=iceberg&locale=pt-BR&hide=forks,prs&show=reviews,issues_closed,discussions_started,discussions_answered)
```

<div>
  <img src="https://gh-readme-profile.vercel.app/api?username=FajarKim&#38;theme=iceberg&#38;locale=pt-BR&#38;hide=forks,prs&#38;show=reviews,issues_closed,discussions_started,discussions_answered" alt="Cartão do GitHub Readme Profile" />
</div>

#### Cartão em Inglês

```markdown
<!-- FajarKim GitHub Readme Profile -->
![Cartão do GitHub Readme Profile](https://gh-readme-profile.vercel.app/api?username=FajarKim&theme=duskfox&hide=commits,prs,prs_merged,issues,contributed)
```

<div>
  <img src="https://gh-readme-profile.vercel.app/api?username=FajarKim&#38;theme=duskfox&#38;hide=commits,prs,prs_merged,issues,contributed" alt="Cartão do GitHub Readme Profile" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Parâmetros%20de%20Consulta-526E86

[ref-action-outputs]: https://img.shields.io/badge/Ações%20de%20Saídas-526E86

[ref-repo]: https://img.shields.io/badge/Repositório-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/Ferramentas%20Online-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+

[ref-official-doc]: https://img.shields.io/badge/Documentação%20Oficial-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
