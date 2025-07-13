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

## Badges com Ícones Customizados (Custom Icon Badges)

**Permite que os usuários usem Octicons e seus próprios ícones e logotipos com mais facilidade. [badges no shields.io](https://github.com/badges/shields).**

[![ref-repo]](https://github.com/DenverCoder1/custom-icon-badges)
[![ref-online-tool]](https://custom-icon-badges.demolab.com/)

> [!Tip]
> Como os emblemas do projeto são gerados com base no [shields.io](https://shields.io/), os parâmetros de configuração podem se referir diretamente aos badges so [shields.io badges](https://shields.io/badges). As configurações a seguir demonstram apenas os parâmetros estendidos para este projeto.

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `shieldsIoParams` | `any` | `true` |  | [Caminho com os parâmetros do badge no shields.io](https://shields.io/badges) | Por exemplo: `badge/...` (badge estática) `github/...` (Relacionado ao Github). |
| ![ref-querys] | | | | | |
| `host` | `string` |  | `img.shields.io` | Uso de badge diferente  | Suporta: `staging.shields.io` `img.shields.io`. |
| `logo` | `string` |  |  | Nome do ícone customizado | O nome que você definiu ao carregar o ícone. |
| `logoSource` | `string` |  |  | Fonte de ícone personalizado | Suporta: `feather`. |
| `shieldsIoQuerys` | `any` |  |  | [Parâmetros de consulta do shields.io](https://shields.io/badges) | Por exemplo: `logoColor` (cor do ícone) `style` (estilo do badge) etc. |

</details>

```txt
https://custom-icon-badges.demolab.com/{shieldsIoParams}{?host,shieldsIoQuerys}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

```markdown
![Badge com ícone customizado](https://custom-icon-badges.demolab.com/badge/custom-badge-blue.svg?logo=paintbrush&logoColor=white)
```

<div>
  <img src="https://custom-icon-badges.demolab.com/badge/custom-badge-blue.svg?logo=paintbrush&#38;logoColor=white" alt="Badge com ícone customizado" />
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
