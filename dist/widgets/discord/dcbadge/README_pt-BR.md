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

## Emblema Markdown do Discord (Discord Markdown Badge)

**A customização dessa badge exibe sua conta no Discord, o servidor de convite, ou o bot da conta.**

[![ref-repo]](https://github.com/gitlimes/dcbadge)
[![ref-official-doc]](https://github.com/gitlimes/dcbadge?tab=readme-ov-file#set-up)

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `type` | `string` | `true` |  | Tipo da Badge | Suporta: `server` `shield`. |
| `id` | `string` | `true` |  | ID | ID do Usuário, ID do Bot, Servidor com Link de Convite, etc. |
| ![ref-querys] | | | | | |
| `style` | `string` |  | `for-the-badge` | Estilo da Badge | Suporta: `flat` `flat-square` `plastic` `for-the-badge` `social`. |
| `theme` | `string` |  |  | Tema da Badge | Suporta: `default-inverted` `clean` `clean-inverted` `discord` `discord-inverted` `full-presence` `gray` `blurple`. |
| `compact` | `boolean` |  | `false` | Fazer a badge ficar mais compacta |  |
| `logoColor` | `string` |  |  | Cor do logo | Suporta: `presence` (muda a cor baseado na badge em exibição) `CSS color value` `HEX`. |
| `bot` | `boolean` |  | `false` | Se a conta é um bot |  |

</details>

```txt
https://dcbadge.limes.pink/api/{type}/{id}{?style,theme,compact,logoColor,bot}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

```markdown
![Usuário do Discord](https://dcbadge.limes.pink/api/shield/406125028065804289)
```

<div>
  <img src="https://dcbadge.limes.pink/api/shield/406125028065804289" alt="Usuário do Discord" />
</div>

```markdown
![Servidor do Discord](https://dcbadge.limes.pink/api/server/zkspfFwqDg)
```

<div>
  <img src="https://dcbadge.limes.pink/api/server/zkspfFwqDg" alt="Servidor do Discord" />
</div>

```markdown
![Bot do Discord](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true)
```

<div>
  <img src="https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true" alt="Bot do Discord" />
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
