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

## Badgen

**Serviço para criar um badge (emblema) rapidamente.**

[![ref-repo]](https://github.com/badgen/badgen.net)
[![ref-online-tool]](https://badgen.net/)
[![ref-official-doc]](https://badgen.net/help)

> [!Tip]
> Devido ao grande número de tipos de emblemas (badges) suportados por este projeto e seus recursos poderosos, aqui está uma breve introdução apenas dos emblemas estáticos. Para outros tipos de emblemas, consulte a documentação oficial.

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `badge` | `string` | `true` |  | Tipo do badge | Suporta: `/static` `/github` `/gitlab` `/https`, etc. Para mais tipos por favor, verificar a documentação oficial. |
| `subject` | `string` | `true` |  | Assunto do badge | Por exemplo, quando utilizar `/static` badge estática, `subject` representa o rótulo do lato esquerdo do badge. |
| `status` | `string` | `true` |  | Status do badge | Por exemplo, `/static/Swift/4.2/orange` `status=4.2`. |
| `color` | `string` | `true` |  | Cor do badge | Formatos suportados: `RGB` `CSS color`. |
| ![ref-querys] | | | | | |
| `color` | `string` |  |  | Sobrepor a cor padrão do badge |  |
| `icon` | `string` |  |  | Ícone do badge | Suporta ícone de outra URL. |
| `label` | `string` |  |  | Rótulo do badge |  |
| `labelColor` | `string` |  |  | Cor do rótulo do badge |  |
| `scale` | `number` |  | `1` | Escala do badge |  |
| `cache` | `number` |  | `86400` | Tempo de cache | Unidades: segundos. |

</details>

```txt
https://badgen.net/{badge}/{subject}/{status}/{color}{?color,icon,label,labelColor,scale,cache}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

```markdown
<!-- badgen/badgen.net -->
![Swift Version](https://badgen.net/static/Swift/4.2/orange)
```

<div>
  <img src="https://badgen.net/static/Swift/4.2/orange" alt="Swift Version" />
</div>

```markdown
![Cor da Badge](https://badgen.net/badge/color/F94144/F94144?label=)
```

<div>
  <img src="https://badgen.net/badge/color/F94144/F94144?label=" alt="Color Badge F94144" />
  <img src="https://badgen.net/badge/color/F3722C/F3722C?label=" alt="Color Badge F3722C" />
  <img src="https://badgen.net/badge/color/F8961E/F8961E?label=" alt="Color Badge F8961E" />
  <img src="https://badgen.net/badge/color/F9844A/F9844A?label=" alt="Color Badge F9844A" />
  <img src="https://badgen.net/badge/color/F9C74F/F9C74F?label=" alt="Color Badge F9C74F" />
  <img src="https://badgen.net/badge/color/90BE6D/90BE6D?label=" alt="Color Badge 90BE6D" />
  <img src="https://badgen.net/badge/color/43AA8B/43AA8B?label=" alt="Color Badge 43AA8B" />
  <img src="https://badgen.net/badge/color/4D908E/4D908E?label=" alt="Color Badge 4D908E" />
  <img src="https://badgen.net/badge/color/577590/577590?label=" alt="Color Badge 577590" />
  <img src="https://badgen.net/badge/color/555555/555555?label=" alt="Color Badge 555555" />
  <img src="https://badgen.net/badge/color/277DA1/277DA1?label=" alt="Color Badge 277DA1" />
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

[ref-official-doc]: https://img.shields.io/badge/Documentação%20Oficial-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
