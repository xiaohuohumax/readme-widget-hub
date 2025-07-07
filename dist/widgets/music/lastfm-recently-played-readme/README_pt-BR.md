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

## Last.fm Recently Played README

**Exibe os scrobbles recentes do Last.fm no perfil README do GitHub.**

[![ref-repo]](https://github.com/JeffreyCA/lastfm-recently-played-readme)
[![ref-official-doc]](https://github.com/JeffreyCA/lastfm-recently-played-readme?tab=readme-ov-file#customization)

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `user` | `string` |  |  | Usuário do Last.fm |  |
| `count` | `string` |  | `5` | Contagem de faixas personalizada | Faixa: `1` a `10`. |
| `width` | `string` |  | `400` | Contagem de faixas personalizada | Faixa: `300` a `1000`. |
| `loved` | `boolean` |  | `false` | Mostrar um indicador de coração para faixas favoritas | Suporta: `true` `false`. |
| `show_user` | `string` |  | `never` | Mostre o nome do usuário e foto de perfil no local especificado | Suporta: `never` `always` `header` `footer`. |
| `header_style` | `string` |  | `normal` | Ajuste o tamanho do cabeçalho ou oculte-o | Suporta: `none` `compact` `normal` `compact_stats` `normal_stats` `compact_stats_only` `normal_stats_only`. |
| `footer_style` | `string` |  | `normal` | Ajuste o tamanho do rodapé ou oculte-o | Suporta: `none` `wave` `compact` `normal` `compact_stats` `normal_stats`. |
| `border_radius` | `number` |  | `10` | Ajuste do raio do cartão | Faixa: `0` a `100`. |
| `loved_style` | `number` |  | `1` | Personalize o posicionamento do indicador para as faixas favoritas | Suporta: `1` `2` `3` `4`. |
| `bg_color` | `string` |  | `212121` | Customizar a cor do funco do cartão | Fotmato: `RGB/A` `HEX`, ex. `FF0000`. |
| `maxage` | `number` |  | `120` | Duração do cache | Unidade: segundos, Faixa: `60` a `3600`. |

</details>

```txt
https://lastfm-recently-played.vercel.app/api
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

```markdown
<!-- JeffreyCA01 -->
![Last.fm](https://lastfm-recently-played.vercel.app/api?user=JeffreyCA01)
```

<div>
  <img src="https://lastfm-recently-played.vercel.app/api?user=JeffreyCA01" alt="Last.fm" />
</div>

```markdown
<!-- JeffreyCA01 -->
![Last.fm](https://lastfm-recently-played.vercel.app/api?user=JeffreyCA01&width=300&count=2&header_style=none)
```

<div>
  <img src="https://lastfm-recently-played.vercel.app/api?user=JeffreyCA01&#38;width=300&#38;count=2&#38;header_style=none" alt="Last.fm" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Parâmetros%20de%20Consulta-526E86

[ref-action-outputs]: https://img.shields.io/badge/Ações%20de%20Saídas-526E86

[ref-repo]: https://img.shields.io/badge/Repositório-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Documentação%20Oficial-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
