<a name="readme-top"></a>

<div align="center">
  <div>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=160&section=header">
  </div>
  <a href="https://github.com/xiaohuohumax/readme-widget-hub">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&width=416&height=68&lines=%F0%9F%8E%96%EF%B8%8FReadme+Widget+Hub%F0%9F%8E%96%EF%B8%8F"/>
  </a>
  <p><b>Use beautiful, configurable badges and status cards to make your README more professional and efficient!</b></p>
  <div>
    <b>
       <a href="/README_en-US.md">Home</a>
      · <a href="README_pt-BR.md">Português</a>
      · <a href="README.md">中文</a>
    </b>
  </div>
  <br/>
</div>

## MOBA Icons

**The World's Most Advanced Icon Library Project, Meticulously Designed by [@Artist-MOBAI](https://github.com/Artist-MOBAI).**

[![ref-repo]](https://github.com/Artist-MOBAI/MOBAIcons)
[![ref-official-doc]](https://github.com/Artist-MOBAI/MOBAIcons)

### Parameters

#### Show All Icons

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `pathName` | `string` | `true` |  | Path Name | Supported: `all` `icons` `i` |

</details>

```txt
https://mobaicons.com/{pathName}
```

#### Show Specified Icons

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `pathName` | `string` | `true` |  | Path Name | Supported: `icons` `i` |
| `names` | `string` | `true` |  | Icon Name | Multiple names are separated by `,`, e.g. `html,css,ts,hono` |
| ![ref-querys] | | | | | |
| `sort` | `boolean` |  | `false` | Sort by Alphabetical Order |  |
| `duplicate` | `boolean` |  | `false` | Show Duplicated Icons |  |
| `perline` | `number` |  | `15` | Number of Icons per Line |  |

</details>

```txt
https://mobaicons.com/{pathName}/{names}{?sort,duplicate,perline}
```

#### Search Icons

<details >
<summary><small>Click to show/close parameters</small></summary><p></p>

| Name | Type | Required | Default | Description | More Description |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `value` | `string` | `true` |  | Search Value |  |
| ![ref-querys] | | | | | |
| `perline` | `number` |  | `15` | Number of Icons per Line |  |

</details>

```txt
https://mobaicons.com/search/{value}{?perline}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

### Examples

#### Set Number of Icons per Line

```markdown
<!-- MOBAIcons -->
![MOBAIconsr](https://mobaicons.com/icons/html,css,ts,hono,go,grpc,cloudflare,bun,js,astro,preact,react,vue,trpc?perline=7)
```

<div>
  <img src="https://mobaicons.com/icons/html,css,ts,hono,go,grpc,cloudflare,bun,js,astro,preact,react,vue,trpc?perline=7" alt="MOBAIcons" />
</div>

#### Show Duplicated Icons

```markdown
<!-- MOBAIcons -->
![MOBAIcons](https://mobaicons.com/icons/ts,bun,hono,go,go,go,go,go?duplicate)
```

<div>
  <img src="https://mobaicons.com/icons/ts,bun,hono,go,go,go,go,go?duplicate" alt="MOBAIcons" />
</div>

#### Icon Sorting

```markdown
<!-- MOBAIcons -->
![MOBAIcons](https://mobaicons.com/icons/html,css,ts,hono,go,grpc,cloudflare?sort)
```

<div>
  <img src="https://mobaicons.com/icons/html,css,ts,hono,go,grpc,cloudflare?sort" alt="MOBAIcons" />
</div>

#### Search Icons

```markdown
<!-- MOBAIcons -->
![MOBAIcons](https://mobaicons.com/search/react)
```

<div>
  <img src="https://mobaicons.com/search/react" alt="MOBAIcons" />
</div>

#### Show All Icons

```markdown
<!-- MOBAIcons -->
![MOBAIcons](https://mobaicons.com/all)
```

<div>
  <img src="https://mobaicons.com/all" alt="MOBAIcons" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Back%20to%20top-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/Path%20Params-526E86

[ref-querys]: https://img.shields.io/badge/Query%20Params-526E86

[ref-action-outputs]: https://img.shields.io/badge/Action%20Outputs-526E86

[ref-repo]: https://img.shields.io/badge/Repository-555555?style=for-the-badge&logo=github

[ref-official-doc]: https://img.shields.io/badge/Official%20Doc-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
