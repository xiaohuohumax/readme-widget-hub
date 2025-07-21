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

## Gerador de Citações Filosóficas (Philosophical Quotes Generator)

**O Philosophical Quotes Generator gera citações filosóficas é uma API que permite adicionar uma imagem de citação filosófica ao seu README do GitHub**

[![ref-repo]](https://github.com/markstanl/github-readme-philosophical-quotes/)
[![ref-online-tool]](https://philosophical-quotes-demo-site.vercel.app/)
[![ref-official-doc]](https://github.com/markstanl/github-readme-philosophical-quotes/)

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `author` | `string` |  |  | Este parâmetro permite filtrar as citações pelo nome do filósofo que as proferiu. Não diferencia letras maiúsculas de minúsculas. | Exemplo: `&author=Jean-Jacques Rousseau`. |
| `theme` | `string` |  |  | Este parâmetro permite filtrar as citações por tema, ou seja, pelo esquema de cores, [temas disponíveis](https://github.com/markstanl/github-readme-philosophical-quotes/blob/express/theme/README.md). |  |
| `daily-quote` | `boolean` |  |  | Se preferir que a citação seja gerada apenas diariamente, você pode usar este parâmetro. Ele gerará uma nova cotação apenas uma vez por dia. Qualquer valor irá funcionar. |  |
| `daily-seed` | `string` |  |  | Se você não gosta que seus amigos tenham a mesma citação que você, use o daily seed. | Isso também embaralha o array. Você pode verificar o algoritmo que faz isso no arquivo [shuffle.mjs](https://github.com/markstanl/github-readme-philosophical-quotes/blob/express/methods/shuffle.mjs). |
| `quote` | `string` |  |  | Este parâmetro permite gerar uma citação específica. Basta inserir a citação que você deseja gerar. | Exemplo: `&quote=My%20Quote`. |
| `include-ids` | `number` |  |  | This parameter allows you to restrict generation to only include certain ID values. | Exemplo: `&include-ids=1,18,6`. |
| `exclude-ids` | `number` |  |  | Este parâmetro permite restringir determinado ID na geração. | Exemplo: `&exclude-ids=1,2,3`. |

</details>

```txt
https://github-readme-philosophical-quotes.vercel.app/api/generate-image{?theme,author,daily-quote,quote,include-ids,exclude-ids}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

#### Tema monokai, modo variado e tipo horizontal

```markdown
<!-- Philosophical Quotes Generator -->
![Philosophical Quotes Generator](https://github-readme-philosophical-quotes.vercel.app/api/generate-image?theme=yeblu&author=Jean-Jacques%20Rousseau&daily-quote=true&include-ids=11&exclude-ids=2)
```

<div>
  <img src="https://github-readme-philosophical-quotes.vercel.app/api/generate-image?theme=yeblu&#38;author=Jean-Jacques%20Rousseau&#38;daily-quote=true&#38;include-ids=11&#38;exclude-ids=2" alt="Tema yeblu, autor, incluir id e excluir id" />
</div>

#### Tema calm e citação diária

```markdown
<!-- Philosophical Quotes Generator -->
![Philosophical Quotes Generator](https://github-readme-philosophical-quotes.vercel.app/api/generate-image?theme=calm&daily-quote=true)
```

<div>
  <img src="https://github-readme-philosophical-quotes.vercel.app/api/generate-image?theme=calm&#38;daily-quote=true" alt="Tema calm e citação diária" />
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
