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

## Contador de Visitas (Visitor Badge)

**Criar um badge contador de visitas que pode utilizar em qualquer site ou perfil do GitHub.**

[![ref-repo]](https://github.com/estruyf/web-visitorbadge-nextjs)
[![ref-online-tool]](https://visitorbadge.io/)

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `type` | `string` | `true` |  | Tipo da badge | Suporta: `visitors` (total), `daily` (diariamente), `combined` (os dois combinados). |
| ![ref-querys] | | | | | |
| `path` | `string` | `true` |  | Caminho das estatísticas | URL ou nome de usuário/repositório para identificar exclusivamente o link ou string para estatísticas. |
| `label` | `string` |  |  | Rótulo do badge |  |
| `labelColor` | `string` |  | `#555555` | Cor de fundo do rótulo do badge | Suporta: `HEX`, por exemplo: `#FF0000`. |
| `countColor` | `string` |  | `#263759` | Cor de fundo do rótulo do badge | Suporta: `HEX`, por exemplo: `#FF0000`. |
| `style` | `string` |  | `default` | Estilo da badge | Suporta: `default`, `flat`, `flat-square`, `plastic`. |
| `labelStyle` | `string` |  | `upper` | Formato das letras no badge | Suporta: `upper` (letras maiúsculas) `lower` (letras minúsculas). |

</details>

```txt
https://api.visitorbadge.io/api/{type}{?path,label,labelColor,countColor,style,labelStyle}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

```markdown
<!-- xiaohuohumax/readme-widget-hub -->
![Visitantes](https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2Fxiaohuohumax%2Freadme-widget-hub&label=VISITORS&countColor=%23f3722c)
```

<div>
  <img src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2Fxiaohuohumax%2Freadme-widget-hub&#38;label=VISITORS&#38;countColor=%23f3722c" alt="Visitantes" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/Caminho%20dos%20Parâmetros-526E86

[ref-querys]: https://img.shields.io/badge/Parâmetros%20de%20Consulta-526E86

[ref-action-outputs]: https://img.shields.io/badge/Ações%20de%20Saídas-526E86

[ref-repo]: https://img.shields.io/badge/Repositório-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/Ferramentas%20Online-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+
