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

## PlayBadges

**展示你的 Play Store 应用的下载量和评分。**

[![ref-repo]](https://github.com/pavi2410/PlayBadges)
[![ref-official-doc]](https://github.com/pavi2410/PlayBadges?tab=readme-ov-file#usage)

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `type` | `string` | `true` |  | 卡片类型 | 可选值：`full` `downloads` `ratings`。 |
| ![ref-querys] | | | | | |
| `id` | `string` | `true` |  | 软件包名 |  |
| `pretty` | `boolean` |  |  | 是否美化显示数字 | 美化：给数字添加单位符号，例如：`100K`，注意：`&pretty` 表示启用，去除则表示禁用。 |
| `country` | `string` |  | `us` | 国家代码 |  |

</details>

```txt
https://PlayBadges.pavi2410.me/badge/{type}{?id}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20para%20topo-555555?style=for-the-badge"></a></p>

### Exemplos

```markdown
<!-- pavi2410 -->
![Play Store App](https://PlayBadges.pavi2410.me/badge/full?id=appinventor.ai_pavitragolchha.VR)
```

<div>
  <img src="https://PlayBadges.pavi2410.me/badge/full?id=appinventor.ai_pavitragolchha.VR" alt="Play Store App" />
</div>

```markdown
<!-- pavi2410 -->
![Play Store App 下载量](https://PlayBadges.pavi2410.me/badge/downloads?id=appinventor.ai_pavitragolchha.VR&pretty)
```

<div>
  <img src="https://PlayBadges.pavi2410.me/badge/downloads?id=appinventor.ai_pavitragolchha.VR&#38;pretty" alt="Play Store App 下载量" />
</div>

```markdown
<!-- pavi2410 -->
![Play Store App 评分](https://PlayBadges.pavi2410.me/badge/ratings?id=appinventor.ai_pavitragolchha.VR)
```

<div>
  <img src="https://PlayBadges.pavi2410.me/badge/ratings?id=appinventor.ai_pavitragolchha.VR" alt="Play Store App 评分" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20para%20topo-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/Caminho%20dos%20Parâmetros-526E86

[ref-querys]: https://img.shields.io/badge/Parâmetros%20de%20Consulta-526E86

[ref-action-outputs]: https://img.shields.io/badge/Ações%20de%20Saídas-526E86

[ref-repo]: https://img.shields.io/badge/Repositório-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Documentação%20Oficial-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
