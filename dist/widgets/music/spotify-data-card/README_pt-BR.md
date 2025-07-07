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

## Cartão com os Dados do Spotify (Data Card for Spotify)

**Gerar dinamicamente o README com os dados da reprodução recente do Spotify.**

[![ref-repo]](https://github.com/magic-ike/spotify-data-card)
[![ref-online-tool]](https://data-card-for-spotify.herokuapp.com/)
[![ref-official-doc]](https://github.com/magic-ike/spotify-data-card?tab=readme-ov-file#generating-a-data-card)

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `userId` | `string` | `true` |  | ID do Usuário no Spotify |  |
| `show_border` | `boolean` |  | `false` | Exibir ou ocultar uma borda branca ao redor do cartão de dados | Suporta: `true` `false`. |
| `show_date` | `boolean` |  | `false` | Exibir ou ocultar a data e a hora em que o cartão de dados foi gerado | Suporta: `true` `false`. |
| `time_zone` | `string` |  | `America/Los_Angeles` | Time zone | Consulte a [Lista do banco de dados tz com os fuso horários](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List). |
| `custom_title` | `string` |  |  | Título customizado |  |
| `hide_title` | `boolean` |  | `false` | Exibir ou ocultar o título |  |
| `hide_explicit` | `boolean` |  | `false` | Exibir ou ocultar as faixas explícitas em todas as seções |  |
| `hide_playing` | `boolean` |  | `false` | Exibir ou ocultar "Currently Listening To" (Ouvindo atualmente) da seção |  |
| `hide_recents` | `boolean` |  | `false` | Exibir ou ocultar o título de "Recently Played Tracks" (faixas tocadas recentemente) da seção |  |
| `hide_top_tracks` | `boolean` |  | `false` | Exibir ou ocultar o título de "Top Tracks" (melhores faixas) da seção |  |
| `hide_top_artists` | `boolean` |  | `false` | Exibir ou ocultar "Top Artists" (melhores artistas) da seção |  |
| `limit` | `number` |  | `5` | Número de faixas a serem exibida na seção | Suporta: `1` a `10`. |

</details>

```txt
https://data-card-for-spotify.herokuapp.com/api/card{?userId,show_border,show_date,time_zone,custom_title,hide_title,hide_explicit,hide_playing,hide_recents,hide_top_tracks,hide_top_artists,limit}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

```markdown
<!-- magic-ike -->
![Cartão com os Dados do Spotify](https://data-card-for-spotify.herokuapp.com/api/card?user_id=12146253656&hide_explicit=true&limit=1)
```

<div>
  <img src="https://data-card-for-spotify.herokuapp.com/api/card?user_id=12146253656&#38;hide_explicit=true&#38;limit=1" alt="Cartão com os Dados do Spotify" />
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
