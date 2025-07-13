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

## Capsule Render

**Imagem renderizada gerada dinamicamente.**

[![ref-repo]](https://github.com/kyechan99/capsule-render)
[![ref-online-tool]](https://capsule-render.vercel.app/)
[![ref-official-doc]](https://github.com/kyechan99/capsule-render?tab=readme-ov-file#how-to-use)

### Parâmetros

<details >
<summary><small>Clique para exibir/fechar os parâmetros</small></summary><p></p>

| Nome | Tipo | Obrigatório | Padrão | Descrição | Mais Observações |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-querys] | | | | | |
| `type` | `string` |  | `wave` | Tipo de dados criados para alterar a imagem de fundo | Suporta: `wave` `egg` `shark` `slice` `rect` `soft` `rounded` `cylinder` `waving` `venom` `speech` `blur` `transparent`. |
| `color` | `string` |  | `B897FF` | Alterar a imagem de fundo | Suporta: `auto` `timeAuto` `random` `gradient` `timeGradient` `HEX` valor ou `custom gradient, formato: widthPer:color1,widthPer:color2...`. |
| `customColorList` | `string` |  |  | Seleciona aleatóriamente uma cor para ser indexadas as cores presentes | `Formato: idx1,idx2,idx3...`, se você quiser que certas cores tenham maior probabilidade de aparecerem, você pode escrever seus índices várias vezes. Isso só vale quando a `color` (cor) é [auto](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json) (automática) ou [gradient](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json) (gradiente). |
| `theme` | `string` |  | `default` | Tema | Suporta: `default` `dark` `radical` `merko` `gruvbox_light` `tokyonight` `onedark` `cobalt`. Referência de cor do tema: [Paletas de Temas](https://github.com/kyechan99/capsule-render/blob/master/src/pallete_theme.json). |
| `section` | `string` |  | `header` | Dados da seção fazem a imagem de fundo inversa | Suporta: `header` `footer`. |
| `reversal` | `boolean` |  | `false` | Inverter a imagem para a esquerda e para a direita (colorir ao mesmo tempo) |  |
| `height` | `number` |  | `120` | Alterar o tamanho da image | Unidades: pixels. |
| `text` | `string` |  |  | Inserir o texto em cima da imagem | Formato: `%20` espaçamento `-nl-` nova linha. |
| `desc` | `string` |  |  | Descrição de entrada em cima da imagem | Formato: `%20` espaçamento, Nota: `-nl-` não suporta nova linha. |
| `textBg` | `boolean` |  |  | Texto do fundo |  |
| `animation` | `string` |  |  | Criar texto dinamicamente | Suporta: `fadeIn` `scaleIn` `blink` `blinking` `twinkling`. |
| `fontColor` | `string` |  |  | Alterar a cor do texto | Formato: `HEX` ex. `FF0000`. |
| `fontSize` | `number` |  | `70` | Alterar tamanho da fonte | Unidades: pixels. |
| `fontAlign` | `number` |  | `50` | Alterar o alinhamento horizontal do texto (x) | Entre `0` e `100`, `50` e centralizado, o texto em multi linha calculará o valor do alinhamento. |
| `fontAlignY` | `number` |  | `50` | Alterar o texto do alinhamento vertical (y) | Entre `0` e `100`, `50` e centralizado, o texto em multi linha calculará o valor do alinhamento. |
| `descSize` | `number` |  | `20` | Alterar o tamanho da fonte (desc) | Unidades: pixels. |
| `descAlign` | `number` |  | `50` | Alterar descrição do alinhamento horizontal (x) | Entre `0` e `100`, `50` e centralizado, o texto em multi linha calculará o valor do alinhamento. |
| `descAlignY` | `number` |  | `60` | Alterar o alinhamento vertical (y) | Entre `0` e `100`, `50` e centralizado, o texto em multi linha calculará o valor do alinhamento. |
| `rotate` | `number` |  |  | Rotação do texto | Entre `-360` e `360`, unidades: degrees (degraus). |
| `stroke` | `string` |  |  | Alterar a linha do texto | Formato: `HEX` ex. `FF0000`, se `strokeWidth` não é alterado, `strokeWidth` será o valor padrão de `1`. |
| `strokeWidth` | `number` |  |  | Alterar largura do traço do texto | Formato: `HEX` ex. `FF0000`, se `stroke` não é alterado, `stroke` será o valor padrão de `B897FF`. |

</details>

```txt
https://capsule-render.vercel.app/api{?type,color,customColorList,theme,section,reversal,height,text,desc,animation,fontColor,fontSize,fontAlign,fontAlignY,descSize,descAlignY,rotate,stroke,strokeWidth}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

### Exemplos

```markdown
<!-- kyechan99/capsule-render -->
![Cabeçalho do Capsule-Render](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=capsule%20render&fontSize=90&animation=fadeIn&fontAlignY=38&desc=Decorate%20GitHub%20Profile%20or%20any%20Repo%20like%20me!&descAlignY=51&descAlign=62)
```

<div>
  <img src="https://capsule-render.vercel.app/api?type=waving&#38;color=auto&#38;height=300&#38;section=header&#38;text=capsule%20render&#38;fontSize=90&#38;animation=fadeIn&#38;fontAlignY=38&#38;desc=Decorate%20GitHub%20Profile%20or%20any%20Repo%20like%20me!&#38;descAlignY=51&#38;descAlign=62" alt="Cabeçalho do Capsule-Render" />
</div>

```markdown
<!-- kyechan99/capsule-render -->
![Rodapé do Capsule-Render](https://capsule-render.vercel.app/api?type=waving&color=auto&height=100&section=footer)
```

<div>
  <img src="https://capsule-render.vercel.app/api?type=waving&#38;color=auto&#38;height=100&#38;section=footer" alt="Rodapé do Capsule-Render" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/Voltar%20ao%20topo%20da%20página-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-querys]: https://img.shields.io/badge/Parâmetros%20de%20Consulta-526E86

[ref-action-outputs]: https://img.shields.io/badge/Ações%20de%20Saídas-526E86

[ref-repo]: https://img.shields.io/badge/Repositório-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/Ferramentas%20Online-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+

[ref-official-doc]: https://img.shields.io/badge/Documentação%20Oficial-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
