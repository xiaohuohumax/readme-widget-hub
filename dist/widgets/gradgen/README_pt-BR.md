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

## Gradgen

**Gradgen é um construtor simples e poderoso da Cloudflare que aprimora os badges do [badgen.net](https://badgen.net/) com gradientes impressionantes.**

[![ref-repo]](https://github.com/bokub/gradgen)
[![ref-official-doc]](https://github.com/bokub/gradgen?tab=readme-ov-file#usage)

> [!Tip]
> Como os badges deste projeto são baseados no [badgen.net](https://badgen.net/), os parâmetros de configuração podem ser referenciados diretamente [badgen.net para ajuda](https://badgen.net/help). A configuração a seguir mostra apenas os parâmetros estendidos deste projeto.

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `badgenNetParams` | `any` | `true` |  | [badgen.net Badge caminho dos parâmetros](https://badgen.net/help) | Por exemplo: `static/...` (Badges estáticas) `github/...` (Github-related). |
| ![ref-querys] | | | | | |
| `gradient` | `string` |  |  | Gradiente | Formato: `color1,color2` Color formato: `HEX` `nome da cor em CSS`. |
| `style` | `string` |  |  | Estilo da badge | Suporta: `flat`. |
| `badgenNetQuerys` | `any` |  |  | [parâmetros de consulta badgen.net](https://badgen.net/help) | Por exemplo: `color` (Cor do ícone) `icon` (Ícone) etc. |

</details>

```txt
https://gradgen.bokub.workers.dev/{badgenNetParams}{?gradient,badgenNetQuerys
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

```markdown
![Gradgen](https://gradgen.bokub.workers.dev/github/checks/nodejs/node?gradient=F3722C,F94144&style=flat)
```

<div>
  <img src="https://gradgen.bokub.workers.dev/github/checks/nodejs/node?gradient=F3722C,F94144" alt="Gradgen Default" />
  <img src="https://gradgen.bokub.workers.dev/github/checks/nodejs/node?gradient=F3722C,F94144&#38;style=flat" alt="Gradgen Flat" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/Caminho%20dos%20Parâmetros-526E86

[ref-querys]: https://img.shields.io/badge/Parâmetros%20de%20Consulta-526E86

[ref-action-outputs]: https://img.shields.io/badge/Ações%20de%20Saídas-526E86

[ref-repo]: https://img.shields.io/badge/Repositório-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Documentação%20Oficial-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
