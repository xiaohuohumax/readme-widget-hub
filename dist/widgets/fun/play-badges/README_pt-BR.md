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

## PlayBadges

**Exiba os downloads e as classificações do seu aplicativo na Play Store™ no seu repositório.**

[![ref-repo]](https://github.com/pavi2410/PlayBadges)
[![ref-official-doc]](https://github.com/pavi2410/PlayBadges?tab=readme-ov-file#usage)

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `type` | `string` | `true` |  | Tipo do cartão | Suporta: `full` `downloads` `ratings`. |
| ![ref-querys] | | | | | |
| `id` | `string` | `true` |  | Nome do pacote |  |
| `pretty` | `boolean` |  |  | Mostra os números de forma elegante | Forma elegante: Adicionar o símbolo de unidade dos números, como o: `100K`, nota: `&pretty` deve está habilitado (enable), e remover quando (disable). |
| `country` | `string` |  | `us` | Código da cidade |  |

</details>

```txt
https://PlayBadges.pavi2410.me/badge/{type}{?id}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

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
![Número de donwloads no App Play Store](https://PlayBadges.pavi2410.me/badge/downloads?id=appinventor.ai_pavitragolchha.VR&pretty)
```

<div>
  <img src="https://PlayBadges.pavi2410.me/badge/downloads?id=appinventor.ai_pavitragolchha.VR&#38;pretty" alt="Número de donwloads no App Play Store" />
</div>

```markdown
<!-- pavi2410 -->
![Play Store App Ratings](https://PlayBadges.pavi2410.me/badge/ratings?id=appinventor.ai_pavitragolchha.VR)
```

<div>
  <img src="https://PlayBadges.pavi2410.me/badge/ratings?id=appinventor.ai_pavitragolchha.VR" alt="Play Store App Ratings" />
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
