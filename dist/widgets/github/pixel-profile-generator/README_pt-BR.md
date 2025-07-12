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

## Pixel criação de cartão para GitHub (Pixel GitHub Card Generator)

**Geração de cartões pixelados com os dados do GitHub.**

[![ref-repo]](https://github.com/LuciNyan/pixel-profile)
[![ref-online-tool]](https://pixel-profile-generator.vercel.app/)
[![ref-official-doc]](https://github.com/LuciNyan/pixel-profile)

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `username` | `string` | `true` |  | Nome do usuário no GitHub. | Exemplo: `imhalid`. |
| `background` | `string` |  | `#434343` | Define a cor/imagem de fundo. Suporta um subconjunto de valores de propriedades de fundo CSS. |  |
| `color` | `string` |  | `white` | Alterar a cor do texto com alguma cor com valor do CSS. |  |
| `hide` | `string` |  |  | Esconder estatísticas ou elementos específicos. | Valores opcionais: `avatar`, `commits`, `contributions`, `issues`, `prs`, `rank`, `stars`. |
| `include_all_commits` | `boolean` |  | `false` | Contar todos os commits. |  |
| `pixelate_avatar` | `boolean` |  | `true` | Aplicar pixelização no avatar. |  |
| `screen_effect` | `boolean` |  | `false` | Habilitar efeito de tela curvada. |  |
| `theme` | `string` |  |  | Tema. | Valores opcionais: `journey`, `road_trip`, `fuji`, `summer`, `lax`, `crt`, `monica`. |
| `dithering` | `boolean` |  | `false` | Renderizar imagem com paleta de 256 cores e aplicar dithering. |  |

</details>

```txt
https://pixel-profile.vercel.app/api/github-stats{?username,background,color,hide,include_all_commits,pixelate_avatar,screen_effect,theme,dithering}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

#### Cartão padrão

```markdown
<!-- imhalid -->
![Github Card Generator](https://pixel-profile.vercel.app/api/github-stats?username=imhalid&screen_effect=true&dithering=true&include_all_commits=true&pixelate_avatar=true&background=radial-gradient%28circle+at+50%25+50%25%2C+%233ddb82+0%25%2C+%231c1c45+100%25%29&color=%23ffffffFF)
```

<div>
  <img src="https://pixel-profile.vercel.app/api/github-stats?username=imhalid&#38;screen_effect=true&#38;dithering=true&#38;include_all_commits=true&#38;pixelate_avatar=true&#38;background=radial-gradient%28circle+at+50%25+50%25%2C+%233ddb82+0%25%2C+%231c1c45+100%25%29&#38;color=%23ffffffFF" alt="Github Card Generator" />
</div>

#### Tema Fuji sem o pixelizado no avatar

```markdown
<!-- LuciNyan -->
![Github Card Generator](https://pixel-profile.vercel.app/api/github-stats?username=LuciNyan&theme=fuji&pixelate_avatar=false)
```

<div>
  <img src="https://pixel-profile.vercel.app/api/github-stats?username=LuciNyan&#38;theme=fuji&#38;pixelate_avatar=false" alt="Github Card Generator" />
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
