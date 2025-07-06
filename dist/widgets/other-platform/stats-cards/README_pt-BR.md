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

## Cartões de Estatísticas (Stats Cards)

**Exibir estatísticas do sites (Bilibili, Zhihu, GitHub, CSDN, LeetCode, etc.) no README, ou utilizá-las no status de monitoramente do seu site.**

[![ref-repo]](https://github.com/songquanpeng/stats-cards)
[![ref-official-doc]](https://github.com/songquanpeng/stats-cards#readme)

### Parâmetros

#### Monitoramento da página web

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `url` | `string` | `true` |  | A URL do site a ser monitorado |  |
| `logo` | `string` |  |  | Logotipo do badge | Verificar o [shields.io](https://shields.io/) para mais informações. |
| `style` | `string` |  | `flat` | Estilo do badge | Suporta: `flat` `flat-square` `for-the-badge` `plastic` `social`. |

</details>

```txt
https://stats.justsong.cn/api/website/{?url,logo,style}
```

#### Dados da página web

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `platform` | `string` | `true` |  | Plataforma de fonte de dados | Suporta: `github` `zhihu` `bilibili` `leetcode` `juejin` `csdn` `nowcoder` `steam`. |
| ![ref-querys] | | | | | |
| `theme` | `string` |  | `light` | Tema | Suporta: `light` `dark` `dark2` `radical`. Para mais temas verificar [theme.js](https://github.com/songquanpeng/stats-cards/blob/master/common/theme.js). |
| `username` | `string` | `true` |  | Nome do usuário | Plataformas aplicáveis: `github` `zhihu` `leetcode`. |
| `id` | `string` | `true` |  | ID | Plataformas aplicáveis: `bilibili` `juejin` `csdn` `nowcoder`. |
| `lang` | `string` |  | `en-US` | Idioma | Suporta: `en-US` `zh-CN`. |
| `cn` | `boolean` |  | `false` | Site chines do LeetCode | Plataformas aplicáveis: `leetcode`. |
| `cn_username` | `string` |  |  | Nome do usuário no site chines LeetCode | Plataforma aplicáveis: `leetcode`, dados são exibidos em inglês e chines: modificar  `username` e `cn_username` ao mesmo tempo. |

</details>

```txt
https://stats.justsong.cn/api/{platform}{?username,id,lang,cn,cn_username,theme}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

```markdown
![Status do GitHub](https://stats.justsong.cn/api/website/?url=https://github.com/&style=flat&logo=github)
```

<div>
  <img src="https://stats.justsong.cn/api/website/?url=https://github.com/&#38;style=flat&#38;logo=github" alt="Status do GitHub" />
</div>

```markdown
<!-- 掘金酱 -->
![掘金酱的掘金数据](https://stats.justsong.cn/api/juejin?id=1556564194374926&lang=zh-CN&theme=dark)
```

<div>
  <img src="https://stats.justsong.cn/api/juejin?id=1556564194374926&#38;lang=zh-CN&#38;theme=dark" alt="掘金酱的掘金数据" />
</div>

```markdown
<!-- quanpeng -->
![quanpeng](https://stats.justsong.cn/api/leetcode/?username=quanpeng&cn_username=quanpeng&theme=dark)
```

<div>
  <img src="https://stats.justsong.cn/api/leetcode/?username=quanpeng&#38;cn_username=quanpeng&#38;theme=dark" alt="quanpeng" />
</div>

```markdown
<!-- 红警魔鬼蓝天 -->
![蓝天的 B 站数据](https://stats.justsong.cn/api/bilibili/?id=483246073&lang=zh-CN&theme=dark)
```

<div>
  <img src="https://stats.justsong.cn/api/bilibili/?id=483246073&#38;lang=zh-CN&#38;theme=dark" alt="蓝天的 B 站数据" />
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
