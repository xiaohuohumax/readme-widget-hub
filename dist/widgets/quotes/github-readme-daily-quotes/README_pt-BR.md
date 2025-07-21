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

## Cartão de Citações Diárias (Daily Quotes Card)

**Citações inspiradoras para o seu perfil do GitHub.**

[![ref-repo]](https://github.com/cheehwatang/github-readme-daily-quotes)
[![ref-official-doc]](https://github.com/cheehwatang/github-readme-daily-quotes)

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `theme` | `string` |  | `github_dark` | [todos os temas disponíveis](https://github.com/cheehwatang/github-readme-daily-quotes/blob/master/src/app/themes/README.md). |  |
| `font` | `string` |  | `helvetica` | [todas as fonts disponíveis](https://github.com/cheehwatang/github-readme-daily-quotes/blob/master/src/app/fonts/README.md). |  |
| `quote` | `string` |  |  | Customização da citação. |  |
| `author` | `string` |  |  | O nome do autor da citação. |  |
| `category` | `string` |  |  | [todas as categorias disponíveis](https://github.com/cheehwatang/github-readme-daily-quotes#quotes-from-category). |  |
| `bg_color` | `string` |  | `0d1117` | Cor de fundo do cartão (cor hexadecimal). |  |
| `quote_color` | `string` |  | `58a6ff` | Cor do texto da citação (cor hexadecimal). |  |
| `author_color` | `string` |  | `c3d1d9` | Cor do texto do Autor (cor hexadecimal). |  |
| `accent_color` | `string` |  | `1f6feb` | Cor de destaque para aspas e espaçadores (cor hexadecimal). |  |
| `border_color` | `string` |  | `e4e2e2` | Cor da borda do cartão (cor hexadecimal). |  |
| `border_width` | `number` |  | `1` | Borda do cartão na largura em (px) (limite de 0 - 5). |  |
| `border_radius` | `number` |  | `8` | Raio da borda do cartão em (px) (limite de 0 - 40). |  |

</details>

```txt
https://readme-daily-quotes.vercel.app/api{?theme,font,quote,author,category,bg_color,quote_color,author_color,accent_color,border_color,border_width,userId}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

#### Tema claro e categoria programação

```markdown
<!-- Github Readme Daily Quotes -->
![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?theme=light&category=programming)
```

<div>
  <img src="https://readme-daily-quotes.vercel.app/api?theme=light&#38;category=programming" alt="Github Readme Daily Quotes" />
</div>

#### Font Garamond e tema Radical

```markdown
![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?font=garamond&theme=radical)
```

<div>
  <img src="https://readme-daily-quotes.vercel.app/api?font=garamond&#38;theme=radical" alt="Github Readme Daily Quotes" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Parâmetros%20de%20Consulta-526E86

[ref-action-outputs]: https://img.shields.io/badge/Ações%20de%20Saídas-526E86

[ref-repo]: https://img.shields.io/badge/Repositório-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Documentação%20Oficial-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
