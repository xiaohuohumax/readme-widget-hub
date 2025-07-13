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

## MOBA Icons

**The World's Most Advanced Icon Library Project, Meticulously Designed by [@Artist-MOBAI](https://github.com/Artist-MOBAI).**

[![ref-repo]](https://github.com/Artist-MOBAI/MOBAIcons)
[![ref-official-doc]](https://github.com/Artist-MOBAI/MOBAIcons)

### Parâmetros

#### 显示全部图标

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `pathName` | `string` | `true` |  | 路径名 | 可选值：`all` `icons` `i` |

</details>

```txt
https://mobaicons.com/{pathName}
```

#### 显示指定图标

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `pathName` | `string` | `true` |  | 路径名 | 可选值：`icons` `i` |
| `names` | `string` | `true` |  | 图标名 | 多个图标名用 `,` 分隔, 例如：`html,css,ts,hono` |
| ![ref-querys] | | | | | |
| `sort` | `boolean` |  | `false` | 是否按字母顺序排序 |  |
| `duplicate` | `boolean` |  | `false` | 是否显示重复的图标 |  |
| `perline` | `number` |  | `15` | 每行显示的图标数量 |  |

</details>

```txt
https://mobaicons.com/{pathName}/{names}{?sort,duplicate,perline}
```

#### 搜索图标

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `value` | `string` | `true` |  | 搜索值 |  |
| ![ref-querys] | | | | | |
| `perline` | `number` |  | `15` | 每行显示的图标数量 |  |

</details>

```txt
https://mobaicons.com/search/{value}{?perline}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

#### 设置每行显示的图标数量

```markdown
<!-- MOBAIcons -->
![MOBAIconsr](https://mobaicons.com/icons/html,css,ts,hono,go,grpc,cloudflare,bun,js,astro,preact,react,vue,trpc?perline=7)
```

<div>
  <img src="https://mobaicons.com/icons/html,css,ts,hono,go,grpc,cloudflare,bun,js,astro,preact,react,vue,trpc?perline=7" alt="MOBAIcons" />
</div>

#### 显示重复的图标

```markdown
<!-- MOBAIcons -->
![MOBAIcons](https://mobaicons.com/icons/ts,bun,hono,go,go,go,go,go?duplicate)
```

<div>
  <img src="https://mobaicons.com/icons/ts,bun,hono,go,go,go,go,go?duplicate" alt="MOBAIcons" />
</div>

#### 图标排序

```markdown
<!-- MOBAIcons -->
![MOBAIcons](https://mobaicons.com/icons/html,css,ts,hono,go,grpc,cloudflare?sort)
```

<div>
  <img src="https://mobaicons.com/icons/html,css,ts,hono,go,grpc,cloudflare?sort" alt="MOBAIcons" />
</div>

#### 搜索图标

```markdown
<!-- MOBAIcons -->
![MOBAIcons](https://mobaicons.com/search/react)
```

<div>
  <img src="https://mobaicons.com/search/react" alt="MOBAIcons" />
</div>

#### 显示全部图标

```markdown
<!-- MOBAIcons -->
![MOBAIcons](https://mobaicons.com/all)
```

<div>
  <img src="https://mobaicons.com/all" alt="MOBAIcons" />
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
