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

## GitHub Widgetbox

**Widgets, dinâmicos e lindos, para as páginas Readme do GitHub (Estatísticas, Habilidades, etc).**

[![ref-repo]](https://github.com/Jurredr/github-widgetbox)
[![ref-official-doc]](https://github.com/Jurredr/github-widgetbox?tab=readme-ov-file#widgets)

### Parâmetros

#### Perfil

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `username` | `string` | `true` |  | Nome do Usuário no Github |  |
| `data` | `string` |  |  | Exibição de Dados | Suporta: `followers` `repositories` `stars` `commits`. Dados variados devem ser separados por `,`. Por exemplo: `followers,repositories,stars,commits`. |

</details>

```txt
https://github-widgetbox.vercel.app/api/profile{?username,data}
```

#### Habilidades

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `languages` | `string` |  |  | Linguagens de Programação | Formato: Linguagens de Programação devem ser separados por `,`. Por exemplo: `javascript,python,html,css`. |
| `frameworks` | `string` |  |  | Frameworks | Formato: Vários frameworks devem ser separados por `,`. Por exemplo: `react,vue,angular`. |
| `libraries` | `string` |  |  | Bibliotecas | Formato: Várias bibliotecas devem ser separadas por `,`. Por exemplo: `react,vue,angular`. |
| `tools` | `string` |  |  | Ferramentas | Formato: Várias ferramentas são separadas por `,`. Por exemplo: `git,docker,npm,yarn,webpack`. |
| `software` | `string` |  |  | Programas | Formato: Vários programas são separados por `,`. Por exemplo: `windows,linux,vscode`. |
| `includeNames` | `boolean` |  | `false` | Exibir Nomes | Suporta: `true` `false`. |
| `theme` | `string` |  |  | Tema | Suporta: `default` `darkmode` `viridescent` `carbon` `nautilus` `serika`. |

</details>

```txt
https://github-widgetbox.vercel.app/api/skills{?languages,frameworks,libraries,software,includeNames,theme}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

```markdown
<!-- Jurredr -->
![Perfil](https://github-widgetbox.vercel.app/api/profile?username=Jurredr&data=followers,repositories,stars,commits&theme=darkmode)
```

<div>
  <img src="https://github-widgetbox.vercel.app/api/profile?username=Jurredr&#38;data=followers,repositories,stars,commits&#38;theme=darkmode" alt="Perfil" />
</div>

```markdown
![Habilidades](https://github-widgetbox.vercel.app/api/skills?frameworks=vue,react,electron,bootstrap,tailwind,express&includeNames=true&theme=darkmode)
```

<div>
  <img src="https://github-widgetbox.vercel.app/api/skills?frameworks=vue,react,electron,bootstrap,tailwind,express&#38;includeNames=true&#38;theme=darkmode" alt="Habilidades" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Parâmetros%20de%20Consulta-526E86

[ref-action-outputs]: https://img.shields.io/badge/Ações%20de%20Saídas-526E86

[ref-repo]: https://img.shields.io/badge/Repositório-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Documentação%20Oficial-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
