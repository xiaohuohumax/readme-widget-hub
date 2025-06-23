<a name="readme-top"></a>

<div align="center">
  <div>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=160&section=header">
  </div>
  <a href="https://github.com/xiaohuohumax/readme-widget-hub">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&width=416&height=68&lines=%F0%9F%8E%96%EF%B8%8FReadme+Widget+Hub%F0%9F%8E%96%EF%B8%8F"/>
  </a>
  <p><b>Utilize essa linda configuração de badges e cartões de status para fazer seu README mais professional e eficiente!</b></p>
  <div>
    <b>
       <a href="/README_pt-BR.md">Início</a>
      · <a href="README_en-US.md">English</a>
      · <a href="README.md">中文</a>
    </b>
  </div>
  <br/>
</div>

> [!Warning]
> Esta página não tem uma versão traduzida, você pode alterar para outros idiomas ou visualizar a versão no idioma padrão abaixo.

## Version Badge

**生成各种类型项目的版本号徽章（Pyhton、Go、npm、PHP、Github等）。**

[![ref-online-tool]](https://badge.fury.io/)

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `type` | `string` | `true` |  | 徽章类型 | 可选值：`js`（npm）`rb`（Ruby）`py`（Python）`go`（Go）`bo`（Bower）`gh`（Github）`nu`（NuGet）`ph`（PHP）`co`（CocoaPods）`pl`（Perl）`pg`（PGXN）。 |
| `packageName` | `string` | `true` |  | 包名 | 特殊字符需要转义，例如：`/` 转义为 `%2F`。 |
| `format` | `string` | `true` |  | 格式 | 可选值：`.svg` `.png` `@2x.png`。 |
| ![ref-querys] | | | | | |
| `icon` | `string` |  |  | 图标 | 固定前缀：`si%3A` 例如：`icon=si%3Agithub`。 |
| `icon_color` | `string` |  |  | 图标颜色 | 格式：`HEX` 例如：`#FF0000`。 |

</details>

```txt
https://badge.fury.io/{type}/{packageName}{format}{?icon,icon_color}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20para%20topo-555555?style=for-the-badge"></a></p>

### Exemplos

```markdown
<!-- xiaohuohumax/auto-unpack -->
![Pyhton version](https://badge.fury.io/py/auto-unpack.svg)
```

<div>
  <img src="https://badge.fury.io/py/auto-unpack.svg" alt="Pyhton version" />
</div>

```markdown
<!-- xiaohuohumax/vscode-export-profiles -->
![Github repo version](https://badge.fury.io/gh/xiaohuohumax%2Fvscode-export-profiles.svg)
```

<div>
  <img src="https://badge.fury.io/gh/xiaohuohumax%2Fvscode-export-profiles.svg" alt="Github repo version" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20para%20topo-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/Caminho%20dos%20Parâmetros-526E86

[ref-querys]: https://img.shields.io/badge/Parâmetros%20de%20Consulta-526E86

[ref-action-outputs]: https://img.shields.io/badge/Ações%20de%20Saídas-526E86

[ref-online-tool]: https://img.shields.io/badge/Ferramentas%20Online-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+
