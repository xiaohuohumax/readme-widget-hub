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

## Últimas músicas escutadas no Spotify (Spotify Recently Played README)

**Exiba suas faixas tocadas recentemente do Spotify no arquivo README do seu perfil do GitHub.**

[![ref-repo]](https://github.com/JeffreyCA/spotify-recently-played-readme)
[![ref-official-doc]](https://github.com/JeffreyCA/spotify-recently-played-readme?tab=readme-ov-file#getting-started)
![ref-need-auth]

> [!Tip]
> Você precisa autorizar a API do Spotify para usar este recurso, [link para autorização](https://spotify-recently-played-readme.vercel.app/).

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `user` | `string` |  |  | Nome do Usuário no Spotify |  |
| `count` | `string` |  | `5` | Contagem personalizada de faixas | Faixa: `1` até `10`. |
| `width` | `string` |  | `400` | Contagem personalizada de faixas | Faixa: `300` até `1000`. |
| `unique` | `boolean` |  | `false` | Exibir somente as faixas exclusivas na lista reproduzida recentemente | Suporta: `false` `true` `on` `yes` `1`. |

</details>

```txt
https://spotify-recently-played-readme.vercel.app/api{?user,count,width,unique}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

```markdown
<!-- jeffreyca16 -->
![Spotify](https://spotify-recently-played-readme.vercel.app/api?user=jeffreyca16)
```

<div>
  <img src="https://spotify-recently-played-readme.vercel.app/api?user=jeffreyca16" alt="Spotify" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Parâmetros%20de%20Consulta-526E86

[ref-action-outputs]: https://img.shields.io/badge/Ações%20de%20Saídas-526E86

[ref-repo]: https://img.shields.io/badge/Repositório-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Documentação%20Oficial-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=

[ref-need-auth]: https://img.shields.io/badge/Precisa%20de%20Autorização-43AA8B?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIxOC4xLDE2Ny4xN2MwLDEzLDAsMjUuNiw0LjEsMzcuNC00My4xLDUwLjYtMTU2LjksMTg0LjMtMTY3LjUsMTk0LjVhMjAuMTcsMjAuMTcsMCwwLDAtNi43LDE1YzAsOC41LDUuMiwxNi43LDkuNiwyMS4zLDYuNiw2LjksMzQuOCwzMyw0MCwyOCwxNS40LTE1LDE4LjUtMTksMjQuOC0yNS4yLDkuNS05LjMtMS0yOC4zLDIuMy0zNnM2LjgtOS4yLDEyLjUtMTAuNCwxNS44LDIuOSwyMy43LDNjOC4zLjEsMTIuOC0zLjQsMTktOS4yLDUtNC42LDguNi04LjksOC43LTE1LjYuMi05LTEyLjgtMjAuOS0zLjEtMzAuNHMyMy43LDYuMiwzNCw1LDIyLjgtMTUuNSwyNC4xLTIxLjYtMTEuNy0yMS44LTkuNy0zMC43Yy43LTMsNi44LTEwLDExLjQtMTFzMjUsNi45LDI5LjYsNS45YzUuNi0xLjIsMTIuMS03LjEsMTcuNC0xMC40LDE1LjUsNi43LDI5LjYsOS40LDQ3LjcsOS40LDY4LjUsMCwxMjQtNTMuNCwxMjQtMTE5LjJTNDA4LjUsNDgsMzQwLDQ4LDIxOC4xLDEwMS4zNywyMTguMSwxNjcuMTdaTTQwMCwxNDRhMzIsMzIsMCwxLDEtMzItMzJBMzIsMzIsMCwwLDEsNDAwLDE0NFoiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4Ii8+PC9zdmc+
