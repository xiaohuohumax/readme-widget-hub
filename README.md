<!-- 这是由脚本自动生成的 README.md 文件，请勿直接修改此文件！ -->

<a name="readme-top"></a>

<div align="center">
  <a href="https://github.com/xiaohuohumax/badge-collection">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&height=68&lines=%F0%9F%8E%96%EF%B8%8FBadge+Collection%F0%9F%8E%96%EF%B8%8F"/>
  </a>
  <p>
    <b>这是一个徽章收集仓库：收集了一些 Github 上热门项目使用过的徽章，以及一些徽章在线制作工具链接。</b>
  </p>
  <div>
    <a href="https://github.com/xiaohuohumax/badge-collection?tab=MIT-1-ov-file#readme"><img src="https://img.shields.io/github/license/xiaohuohumax/badge-collection" /></a>
    <a href="https://github.com/xiaohuohumax/badge-collection/pulls"><img src="https://img.shields.io/github/issues-pr/xiaohuohumax/badge-collection" /></a>
    <a href="https://github.com/xiaohuohumax/badge-collection/issues"><img src="https://img.shields.io/github/issues/xiaohuohumax/badge-collection" /></a>
    <a href="https://github.com/xiaohuohumax/badge-collection"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/xiaohuohumax/badge-collection" /></a>
    <a href="https://github.com/xiaohuohumax/badge-collection"><img src="https://img.shields.io/badge/badge_count-14-84AD64" /></a>
    <a href="https://github.com/xiaohuohumax/badge-collection"><img src="https://img.shields.io/github/stars/xiaohuohumax/badge-collection" /></a>
  </div>
  <br/>
</div>

## 🎖️ 徽章集合

### 『1』Shields.io

> [!Tip]
> 由于此项目支持的徽章种类非常多，且功能强大，这里只简单介绍－静态徽章，其他徽章使用方式还请移步官方文档。

![rl-badge-introduction]

**Shields.io 是一个提供简洁、一致和易读的 SVG 和位图格式徽章的服务，可以轻松地包含在 GitHub 的 README 文件或任何其他网页中。**

[![rl-repo]](https://github.com/badges/shields)
[![rl-online-tool]](https://shields.io/badges)
[![rl-official-docs]](https://shields.io/badges)

![rl-badge-params]

<details>
  <summary>点击展开/收起详细参数</summary><p></p>

| 参数名 | 类型 | 默认值 | 描述 | 补充说明 |
| ------ | :--- | :----- | :--- | :------- |
| ![rl-link-params] | | | | |
| `badgeContent` | string |  | 徽章内容 | 格式：`标签-消息-消息背景颜色` |
| ![rl-link-query] | | | | |
| `style` | string | `flat` | 徽章整体风格 | 可选值：`flat` `flat-square` `plastic` `for-the-badge` `social` |
| `logo` | string |  | Logo 图标名称 | 支持 Base64，[slugs.md](https://github.com/simple-icons/simple-icons/blob/master/slugs.md)，[Simple Icons](https://simpleicons.org/) |
| `logoColor` | string |  | Logo 颜色 | 支持格式：`HEX` `RGB` `RGBA` `HSL` `HSLA` `CSS颜色` |
| `logoSize` | string |  | Logo 自适应大小 | 可选值：`auto` |
| `label` | string |  | 左侧标签文字 | 覆盖 `badgeContent` 中 `标签` 部分 |
| `labelColor` | string |  | 左侧标签背景颜色 | 支持格式：同上 `logoColor` |
| `color` | string |  | 右侧消息背景颜色 | 覆盖 `badgeContent` 中 `消息背景颜色` 部分, 支持格式：同上 `logoColor` |
| `cacheSeconds` | string | `3600` | HTTP 缓存有效期 | 单位：秒 |
| `link` | string[] |  | 点击徽章左右侧执行的操作 | 徽章继承到 `<object>` HTML 标签时生效 |

</details>

```markdown
![Alt](https://img.shields.io/badge/{badgeContent}{?style,logo,logoColor,logoSize,label,labelColor,color,cacheSeconds,link})
```

![rl-uses-examples]

```markdown
<!-- badges/shields -->
![Hello World](https://img.shields.io/badge/badges/shields-555555?logo=github)
```

![Hello World](https://img.shields.io/badge/badges/shields-555555?logo=github)

```markdown
![Color Badge](https://img.shields.io/badge/F94144-F94144)
```

![Color Badge F94144](https://img.shields.io/badge/F94144-F94144)
![Color Badge F3722C](https://img.shields.io/badge/F3722C-F3722C)
![Color Badge F8961E](https://img.shields.io/badge/F8961E-F8961E)
![Color Badge F9844A](https://img.shields.io/badge/F9844A-F9844A)
![Color Badge F9C74F](https://img.shields.io/badge/F9C74F-F9C74F)
![Color Badge 90BE6D](https://img.shields.io/badge/90BE6D-90BE6D)
![Color Badge 43AA8B](https://img.shields.io/badge/43AA8B-43AA8B)
![Color Badge 4D908E](https://img.shields.io/badge/4D908E-4D908E)
![Color Badge 577590](https://img.shields.io/badge/577590-577590)
![Color Badge 555555](https://img.shields.io/badge/555555-555555)
![Color Badge 277DA1](https://img.shields.io/badge/277DA1-277DA1)

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

![rl-line]

### 『2』Badgen

> [!Tip]
> 由于此项目支持的徽章种类非常多，且功能强大，这里只简单介绍－静态徽章，其他徽章使用方式还请移步官方文档。

![rl-badge-introduction]

**快速徽章生成服务。**

[![rl-repo]](https://github.com/badgen/badgen.net)
[![rl-online-tool]](https://badgen.net/)
[![rl-official-docs]](https://badgen.net/help)

![rl-badge-params]

<details>
  <summary>点击展开/收起详细参数</summary><p></p>

| 参数名 | 类型 | 默认值 | 描述 | 补充说明 |
| ------ | :--- | :----- | :--- | :------- |
| ![rl-link-params] | | | | |
| `badge` | string |  | 徽章类型 | 可选值：`/static` `/github` `/gitlab` `/https` 等等，更多类型请参考官方文档 |
| `subject` | string |  | 徽章子信息 | 比如：`/static` 静态徽章时，`subject` 表示为徽章左侧标签 |
| `status` | string |  | 徽章右侧消息 | 比如：`/static/Swift/4.2/orange` `status=4.2` |
| `color` | string |  | 徽章颜色 | 支持格式：`RGB` `CSS颜色` |
| ![rl-link-query] | | | | |
| `color` | string |  | 覆盖默认徽章颜色 |  |
| `icon` | string |  | 徽章左侧图标 | 支持外部图标 URL |
| `label` | string |  | 徽章左侧标签 |  |
| `labelColor` | string |  | 徽章左侧标签颜色 |  |
| `scale` | number | `1` | 徽章缩放比例 |  |
| `cache` | number | `86400` | 缓存时间 | 单位：秒 |

</details>

```markdown
![Alt](https://badgen.net/{badge}/{subject}/{status}/{color}{?color,icon,label,labelColor,scale,cache})
```

![rl-uses-examples]

```markdown
<!-- badgen/badgen.net -->
![Swift Version](https://badgen.net/static/Swift/4.2/orange)
```

![Swift Version](https://badgen.net/static/Swift/4.2/orange)

```markdown
![Color Badge](https://badgen.net/badge/color/F94144/F94144?label=)
```

![Color Badge F94144](https://badgen.net/badge/color/F94144/F94144?label=)
![Color Badge F3722C](https://badgen.net/badge/color/F3722C/F3722C?label=)
![Color Badge F8961E](https://badgen.net/badge/color/F8961E/F8961E?label=)
![Color Badge F9844A](https://badgen.net/badge/color/F9844A/F9844A?label=)
![Color Badge F9C74F](https://badgen.net/badge/color/F9C74F/F9C74F?label=)
![Color Badge 90BE6D](https://badgen.net/badge/color/90BE6D/90BE6D?label=)
![Color Badge 43AA8B](https://badgen.net/badge/color/43AA8B/43AA8B?label=)
![Color Badge 4D908E](https://badgen.net/badge/color/4D908E/4D908E?label=)
![Color Badge 577590](https://badgen.net/badge/color/577590/577590?label=)
![Color Badge 555555](https://badgen.net/badge/color/555555/555555?label=)
![Color Badge 277DA1](https://badgen.net/badge/color/277DA1/277DA1?label=)

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

![rl-line]

### 『3』GitHub Readme Stats

> [!Tip]
> 由于此项目支持的卡片种类非常多，且功能强大，这里只简单介绍－GitHub 状态卡片，其他卡片使用方式还请移步官方文档。

![rl-badge-introduction]

**获取动态生成的 GitHub 统计信息！**

[![rl-repo]](https://github.com/anuraghazra/github-readme-stats)
[![rl-official-docs]](https://github.com/anuraghazra/github-readme-stats?tab=readme-ov-file#features-)

![rl-badge-params]

<details>
  <summary>点击展开/收起详细参数</summary><p></p>

| 参数名 | 类型 | 默认值 | 描述 | 补充说明 |
| ------ | :--- | :----- | :--- | :------- |
| ![rl-link-query] | | | | |
| `username` | string |  | GitHub 用户名 |  |
| `title_color` | string | `2F80ED` | 卡片标题颜色 | 支持 HEX 颜色值，如 `FF0000` |
| `text_color` | string | `434D58` | 正文文本颜色 | 支持 HEX 颜色值，如 `FF0000` |
| `icon_color` | string | `4C71F2` | 图标颜色 | 支持 HEX 颜色值，如 `FF0000` |
| `border_color` | string | `E4E2E2` | 卡片边框颜色 | 支持 HEX 颜色值，如 `FF0000`，当启用 `hide_border` 时，不适用 |
| `hide_border` | boolean | `false` | 是否隐藏卡片边框 |  |
| `theme` | string |  | 设置主题 | 可选值：`dark` `radical` `merko` `gruvbox` `tokyonight` `onedark` `cobalt` `synthwave` `highcontrast` `dracula` `transparent` |
| `cache_seconds` | number | `21600` | 卡片缓存时间 | 单位：秒，最小：21600，最大：86400 |
| `locale` | string | `en` | 设置语言 | 语言参考：[locales](https://github.com/anuraghazra/github-readme-stats?tab=readme-ov-file#available-locales) |
| `border_radius` | number | `4.5` | 卡片上的圆角处理 |  |
| `hide` | string |  | 隐藏特定的统计数据 | 数据类型之间用 `,` 分隔 |
| `show` | string |  | 显示附加统计信息 | 数据类型之间用 `,` 分隔 |
| `show_icons` | boolean | `true` | 是否显示图标 |  |
| `bg_color` | string |  | 卡片背景色 | 背景色支持渐变，格式：`deg,color1,color2,color3,...` |

</details>

```markdown
![Alt](https://github-readme-stats.vercel.app/api{?username,title_color,text_color,icon_color,border_color,hide_border,theme,cache_seconds,locale,border_radius,hide,show,show_icons,bg_color})
```

![rl-uses-examples]

```markdown
<!-- anuraghazra -->
![GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra)
```

![GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra)
![GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&locale=cn&theme=dark&hide_border=true)

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

![rl-line]

### 『4』GitHub 贡献者图

![rl-badge-introduction]

**生成一个贡献者图片，让你的 README.md 文件保持同步。**

[![rl-repo]](https://github.com/lacolaco/contributors-img)
[![rl-online-tool]](https://contrib.rocks/preview)

![rl-badge-params]

<details>
  <summary>点击展开/收起详细参数</summary><p></p>

| 参数名 | 类型 | 默认值 | 描述 | 补充说明 |
| ------ | :--- | :----- | :--- | :------- |
| ![rl-link-query] | | | | |
| `repo` | string |  | 仓库名 | 格式：`owner/repo` |
| `max` | number | `100` | 最大显示贡献者数 |  |
| `columns` | number | `12` | 显示列数 |  |
| `anon` | number | `0` | 是否显示匿名贡献者 | 可选值：`0` `1` |

</details>

```markdown
![Alt](https://contrib.rocks/image{?repo,max,columns,anon})
```

![rl-uses-examples]

```markdown
<!-- lacolaco/contributors-img -->
![Contributors Image](https://contrib.rocks/image?repo=lacolaco/contributors-img)
```

![Contributors Image](https://contrib.rocks/image?repo=lacolaco/contributors-img)

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

![rl-line]

### 『5』Discord 徽章

![rl-badge-introduction]

**可自定义的徽章，用于展示您的 Discord 账号、服务器邀请或机器人账号。**

[![rl-repo]](https://github.com/gitlimes/dcbadge)
[![rl-official-docs]](https://github.com/gitlimes/dcbadge?tab=readme-ov-file#set-up)

![rl-badge-params]

<details>
  <summary>点击展开/收起详细参数</summary><p></p>

| 参数名 | 类型 | 默认值 | 描述 | 补充说明 |
| ------ | :--- | :----- | :--- | :------- |
| ![rl-link-params] | | | | |
| `type` | string |  | 徽章类型 | 可选值：`server` `shield` |
| `id` | string |  | ID 值 | 用户 ID、机器人 ID、服务器邀请链接等 |
| ![rl-link-query] | | | | |
| `style` | string | `for-the-badge` | 徽章整体风格 | 可选值：`flat` `flat-square` `plastic` `for-the-badge` `social` |
| `theme` | string |  | 徽章主题 | 可选值：`default-inverted` `clean` `clean-inverted` `discord` `discord-inverted` `full-presence` `gray` `blurple` |
| `compact` | boolean | `false` | 是否使用紧凑徽章 |  |
| `logoColor` | string |  | 图标颜色 | 可选值：`presence`（根据徽标的显示情况更改颜色）`CSS 颜色值` `HEX` |
| `bot` | boolean | `false` | 是否为机器人 |  |

</details>

```markdown
![Alt](https://dcbadge.limes.pink/api/{type}/{id}{?style,theme,compact,logoColor,bot})
```

![rl-uses-examples]

```markdown
<!-- 用户 -->
![Discord User Badge](https://dcbadge.limes.pink/api/shield/406125028065804289)
```

![Discord User Badge](https://dcbadge.limes.pink/api/shield/406125028065804289)

```markdown
<!-- 机器人 -->
![Discord Bot Badge](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true)
```

![Discord Bot Badge](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true)

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

![rl-line]

### 『6』HITS 访问统计

![rl-badge-introduction]

**一个简单的方法来查看有多少人访问了您的网站或 GitHub 仓库。**

[![rl-repo]](https://github.com/gjbae1212/hit-counter)
[![rl-online-tool]](https://hits.seeyoufarm.com/#badge)

![rl-badge-params]

<details>
  <summary>点击展开/收起详细参数</summary><p></p>

| 参数名 | 类型 | 默认值 | 描述 | 补充说明 |
| ------ | :--- | :----- | :--- | :------- |
| ![rl-link-query] | | | | |
| `url` | string |  | 需要统计的网站或 GitHub 仓库的 URL |  |
| `edge_flat` | boolean |  | 徽章整体风格 | 可选值：true（Flat） false（Round） |
| `title` | string | `hits` | 左侧标签内容 |  |
| `title_bg` | string | `#555555` | 左侧标签背景颜色 | 支持十六进制颜色代码，例如：#FF0000 |
| `count_bg` | string | `#79C83D` | 右侧信息背景颜色 | 支持十六进制颜色代码，例如：#FF0000 |
| `icon_color` | string |  | 图标颜色 | 支持十六进制颜色代码，例如：#FF0000 |

</details>

```markdown
![Alt](https://hits.seeyoufarm.com/api/count/incr/badge.svg{?url,edge_flat,title,title_bg,count_bg,icon_color})
```

![rl-uses-examples]

```markdown
<!-- xiaohuohumax/badge-collection -->
![Hit Counter](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/xiaohuohumax/badge-collection)
```

![Hit Counter](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/xiaohuohumax/badge-collection)

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

![rl-line]

### 『7』Iconify 图标徽章

![rl-badge-introduction]

**Iconify API 可以动态生成 SVG，其中包含大量的图标集可供选择，可用于 HTML 或 CSS。**

[![rl-repo]](https://github.com/iconify/iconify)
[![rl-online-tool]](https://icon-sets.iconify.design/?category=Emoji)
[![rl-official-docs]](https://iconify.design/docs/api/svg.html)

![rl-badge-params]

<details>
  <summary>点击展开/收起详细参数</summary><p></p>

| 参数名 | 类型 | 默认值 | 描述 | 补充说明 |
| ------ | :--- | :----- | :--- | :------- |
| ![rl-link-params] | | | | |
| `prefix` | string |  | 图标集前缀 |  |
| `name` | string |  | 图标名称 |  |
| ![rl-link-query] | | | | |
| `color` | string |  | 图标颜色 | 支持格式：`HEX` `CSS 颜色值`，例如：`#FF0000` `red` `rgb(255, 0, 0)` |
| `width` | number |  | 图标宽度 | 单位：像素 |
| `height` | number |  | 图标高度 | 单位：像素 |
| `flip` | string |  | 翻转图标 | 可选值：`horizontal` `vertical` |
| `rotate` | string |  | 旋转图标 | 可填类型：`deg` 或是 `number`，`1=90deg` |
| `download` | boolean |  | 强制浏览器下载文件 |  |
| `box` | boolean |  | 是否向 SVG 添加与 viewBox 匹配的空矩形 |  |

</details>

```markdown
![Alt](https://api.iconify.design/{prefix}/{name}.svg{?color,width,height,flip,rotate,download,box})
```

![rl-uses-examples]

```markdown
![Iconify 1st Place Medal Badge](https://api.iconify.design/fluent-emoji-flat/1st-place-medal.svg?width=64)
```

![Iconify 1st Place Medal Badge](https://api.iconify.design/fluent-emoji-flat/1st-place-medal.svg?width=64)

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

![rl-line]

### 『8』Open Collective 贡献者图

![rl-badge-introduction]

**创建一个 SVG，展示您的财务贡献者的卡片。**

[![rl-repo]](https://github.com/opencollective)
[![rl-official-docs]](https://docs.opencollective.com/help/collectives/collective-settings/data-export#contributor-image)

![rl-badge-params]

<details>
  <summary>点击展开/收起详细参数</summary><p></p>

| 参数名 | 类型 | 默认值 | 描述 | 补充说明 |
| ------ | :--- | :----- | :--- | :------- |
| ![rl-link-params] | | | | |
| `collectiveName` | string |  | Open Collective 组织名 |  |
| `statisticalType` | string |  | 统计类型 | 可选值：`sponsors`（赞助商）、`backers`（支持者）、`contributors`（贡献者） |
| ![rl-link-query] | | | | |
| `width` | number |  | 图片宽度 | 单位：像素 |
| `height` | number |  | 图片高度 | 单位：像素 |
| `limit` | number |  | 最多显示成员数 | 空则表示：无上限 |
| `avatarHeight` | number |  | 每个头像/标志的最大高度 |  |
| `button` | boolean | `true` | 显示 “成为支持者/赞助商” 按钮 |  |
| `format` | string |  | 图片格式 | 将 `.svg` 替换为 `.png` 或 `.jpg` |

</details>

```markdown
![Alt](https://opencollective.com/{collectiveName}/{statisticalType}.svg{?width,height,limit,avatarHeight,button,format})
```

![rl-uses-examples]

```markdown
<!-- vitejs/vite -->
![Sponsors on Open Collective](https://opencollective.com/vite/sponsors.svg)
```

![Sponsors on Open Collective](https://opencollective.com/vite/sponsors.svg)

```markdown
<!-- vitejs/vite -->
![Sponsors Badge on Open Collective](https://opencollective.com/vite/sponsors/badge.svg)
```

![Sponsors Badge on Open Collective](https://opencollective.com/vite/sponsors/badge.svg)

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

![rl-line]

### 『9』OpenSSF Best Practices 最佳实践徽章

![rl-badge-introduction]

**本项目确定了自由/开源软件（FLOSS）的最佳实践，并为这些最佳实践实施了一个徽章系统。**

[![rl-repo]](https://github.com/coreinfrastructure/best-practices-badge)
[![rl-online-tool]](https://www.bestpractices.dev)
![rl-need-login]

![rl-badge-params]

<details>
  <summary>点击展开/收起详细参数</summary><p></p>

| 参数名 | 类型 | 默认值 | 描述 | 补充说明 |
| ------ | :--- | :----- | :--- | :------- |
| ![rl-link-params] | | | | |
| `id` | string |  | 项目 ID |  |

</details>

```markdown
![Alt](https://www.bestpractices.dev/projects/{id}/badge)
```

![rl-uses-examples]

```markdown
<!-- best-practices-badge -->
![OpenSSF Best Practices](https://www.bestpractices.dev/projects/7652/badge)
```

![OpenSSF Best Practices](https://www.bestpractices.dev/projects/7652/badge)

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

![rl-line]

### 『10』OSSInsight 开源软件洞察

> [!Tip]
> 由于此项目支持的卡片种类非常多，且功能强大，这里只简单介绍－推送和提交记录卡片，其他卡片使用方式还请移步官方文档。

![rl-badge-introduction]

**在 30 秒内即可将实时小部件嵌入到仓库的 README.md 文件中！**

[![rl-repo]](https://github.com/pingcap/ossinsight)
[![rl-online-tool]](https://next.ossinsight.io/widgets/official/analyze-repo-pushes-and-commits-per-month?repo_id=449649595)

![rl-badge-params]

<details>
  <summary>点击展开/收起详细参数</summary><p></p>

| 参数名 | 类型 | 默认值 | 描述 | 补充说明 |
| ------ | :--- | :----- | :--- | :------- |
| ![rl-link-query] | | | | |
| `repo_id` | string |  | Github 仓库 ID |  |
| `color_scheme` | string |  | 卡片颜色主题 | 可选值：`light` `dark` |

</details>

```markdown
![Alt](https://next.ossinsight.io/widgets/official/analyze-repo-pushes-and-commits-per-month{?repo_id,color_scheme})
```

![rl-uses-examples]

```markdown
<!-- pingcap/ossinsight -->
![Pushes and Commits of pingcap/ossinsight](https://next.ossinsight.io/widgets/official/analyze-repo-pushes-and-commits-per-month/thumbnail.png?repo_id=449649595&color_scheme=dark)
```

![Pushes and Commits of pingcap/ossinsight](https://next.ossinsight.io/widgets/official/analyze-repo-pushes-and-commits-per-month/thumbnail.png?repo_id=449649595&color_scheme=dark)

```markdown
<!-- antfu -->
![Dashboard stats of @antfu](https://next.ossinsight.io/widgets/official/compose-user-dashboard-stats/thumbnail.png?user_id=11247099&image_size=auto&color_scheme=dark)
```

![Dashboard stats of @antfu](https://next.ossinsight.io/widgets/official/compose-user-dashboard-stats/thumbnail.png?user_id=11247099&image_size=auto&color_scheme=dark)

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

![rl-line]

### 『11』Readme Typing SVG

![rl-badge-introduction]

**动态生成、可定制的 SVG，可模拟文本输入和删除效果，适用于个人主页、仓库或网站。**

[![rl-repo]](https://github.com/denvercoder1/readme-typing-svg)
[![rl-online-tool]](https://readme-typing-svg.demolab.com/demo/)
[![rl-official-docs]](https://github.com/denvercoder1/readme-typing-svg?tab=readme-ov-file#-options)

![rl-badge-params]

<details>
  <summary>点击展开/收起详细参数</summary><p></p>

| 参数名 | 类型 | 默认值 | 描述 | 补充说明 |
| ------ | :--- | :----- | :--- | :------- |
| ![rl-link-query] | | | | |
| `lines` | string |  | 显示的文本 | 多行之间用 `;` 分隔，文本中空格使用 `+` 代替 |
| `height` | number | `50` | 输出 SVG 的高度 |  |
| `width` | number | `400` | 输出 SVG 的宽度 |  |
| `size` | number | `20` | 字体大小 | 单位：像素 |
| `font` | string | `monospace` | 字体族 | 任何 Google Fonts 中的字体 |
| `color` | string | `36BCF7` | 文本颜色 | 十六进制代码不带 # |
| `background` | string | `00000000` | 文本背景颜色 | 十六进制代码不带 # |
| `center` | boolean | `false` | 文本水平对齐方式 | 可选值：true（水平居中）false（左对齐） |
| `vCenter` | boolean | `false` | 文本垂直对齐方式 | 可选值：true（垂直居中）false（居中上方） |
| `multiline` | boolean | `false` | 文本换行显示方式 | 可选值：true（换行显示）false（同一行重新显示） |
| `duration` | number | `5000` | 单行打印持续时间 |  |
| `pause` | number | `0` | 行与行之间的暂停时间 | 单位：毫秒 |
| `repeat` | boolean | `true` | 在最后一行之后循环回到第一行 |  |
| `separator` | string | `;` | 行参数中使用的分隔符 |  |
| `letterSpacing` | string | `normal` | 字母间距 | 任何字母间距（letter-spacing）属性的 CSS 值 |

</details>

```markdown
![Alt](https://readme-typing-svg.demolab.com{?lines,height,width,size,font,color,background,center,vCenter,multiline,duration,pause,repeat,separator,letterSpacing})
```

![rl-uses-examples]

```markdown
![Readme Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=Hello+World;Badge+Collection)
```

![Readme Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=Hello+World;Badge+Collection)

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

![rl-line]

### 『12』GitHub 仓库分析图

![rl-badge-introduction]

**为你的 GitHub 仓库提供惊艳的见解，让你的 README.md 增添一些吸引眼球的精彩内容。**

[![rl-repo]](https://github.com/axiomhq)
[![rl-online-tool]](https://repobeats.axiom.co/configs)
[![rl-official-docs]](https://repobeats.axiom.co/)
![rl-need-login]

![rl-badge-params]

<details>
  <summary>点击展开/收起详细参数</summary><p></p>

| 参数名 | 类型 | 默认值 | 描述 | 补充说明 |
| ------ | :--- | :----- | :--- | :------- |
| ![rl-link-params] | | | | |
| `configId` | string |  | 配置 ID | 登录 [Repobeats](https://repobeats.axiom.co/) 后选择仓库后获取 |

</details>

```markdown
![Alt](https://repobeats.axiom.co/api/embed/{configId}.svg)
```

![rl-uses-examples]

```markdown
<!-- xiaohuohumax/badge-collection -->
![Repobeats analytics image](https://repobeats.axiom.co/api/embed/65971378c4d394852dd1d92144244cbe14f0639c.svg)
```

![Repobeats analytics image](https://repobeats.axiom.co/api/embed/65971378c4d394852dd1d92144244cbe14f0639c.svg)

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

![rl-line]

### 『13』SCC 代码行数统计

![rl-badge-introduction]

**一个可以显示代码行数、注释行数等的徽章服务。**

[![rl-repo]](https://github.com/boyter/scc/)
[![rl-official-docs]](https://github.com/boyter/scc/?tab=readme-ov-file#badges-beta)

![rl-badge-params]

<details>
  <summary>点击展开/收起详细参数</summary><p></p>

| 参数名 | 类型 | 默认值 | 描述 | 补充说明 |
| ------ | :--- | :----- | :--- | :------- |
| ![rl-link-params] | | | | |
| `provider` | string |  | 提供商 | 可选值：`github` |
| `user` | string |  | 用户名 |  |
| `repo` | string |  | 仓库名 |  |
| ![rl-link-query] | | | | |
| `category` | string | `code` | 统计类别 | 可选值：`code` `blanks` `lines` `comments` `cocomo` |
| `avg-wage` | number | `56286` | 平均工资 | 值必须为正整数，否则将恢复到默认值 `56286` |
| `lower` | boolean |  | 将标题文本转换为小写 |  |
| `font-color` | string |  | 字体颜色 | 支持类型：`HEX`，例如：`FF0000` |
| `font-shadow-color` | string |  | 字体阴影颜色 | 支持类型：`HEX`，例如：`FF0000` |
| `top-shadow-accent-color` | string |  | 顶部阴影突出颜色 | 支持类型：`HEX`，例如：`FF0000` |
| `title-bg-color` | string |  | 标题背景颜色 | 支持类型：`HEX`，例如：`FF0000` |
| `badge-bg-color` | string |  | 徽章背景颜色 | 支持类型：`HEX`，例如：`FF0000` |

</details>

```markdown
![Alt](https://sloc.xyz/{provider}/{user}/{repo}{?category,avg-wage,lower,font-color,font-shadow-color,top-shadow-accent-color,title-bg-color,badge-bg-color})
```

![rl-uses-examples]

```markdown
<!-- xiaohuohumax/badge-collection -->
![Total lines](https://sloc.xyz/github/xiaohuohumax/badge-collection)
```

![Total lines](https://sloc.xyz/github/xiaohuohumax/badge-collection)

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

![rl-line]

### 『14』GitHub 星标历史图

![rl-badge-introduction]

**Star History 一个可以显示 GitHub 项目的 star 历史图的徽章。**

[![rl-repo]](https://github.com/star-history/star-history)
[![rl-online-tool]](https://www.star-history.com)
[![rl-official-docs]](https://www.star-history.com/blog/how-to-use-github-star-history)

![rl-badge-params]

<details>
  <summary>点击展开/收起详细参数</summary><p></p>

| 参数名 | 类型 | 默认值 | 描述 | 补充说明 |
| ------ | :--- | :----- | :--- | :------- |
| ![rl-link-query] | | | | |
| `repos` | string[] |  | 仓库名 | 多个仓库名用逗号分隔，例如：`owner1/repo1,owner2/repo2` |
| `type` | string |  | 显示类型 | 可选值：`Date` `Timeline` |

</details>

```markdown
![Alt](https://api.star-history.com/svg{?repos,type})
```

![rl-uses-examples]

```markdown
<!-- star-history/star-history -->
![Star History Chart](https://api.star-history.com/svg?repos=star-history/star-history&type=Date)
```

![Star History Chart](https://api.star-history.com/svg?repos=star-history/star-history&type=Date)

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/『返回顶部』-555555?style=for-the-badge"></a></p>

![rl-line]

## ✍ 如何贡献徽章

> [!Warning]
> 请不要直接修改 [README.md](./README.md) 文件，因为这个文件是通过脚本自动生成的，修改后并不会生效。

1. Fork 本仓库
2. 在 [badge](./badge/) 文件夹下增徽章信息文件，格式参考：[badge/template.json](./badge/template.json)
3. PR 到本仓库（PS：提交请使用 `npm run commit` 然后选择 `docs`）
4. 等待合并，合并后会自动构建 [README.md](./README.md)

## 💖 感谢所有贡献者

[![Contributors](https://contrib.rocks/image?repo=xiaohuohumax/badge-collection)](https://github.com/xiaohuohumax/badge-collection/contributors)

<!-- reference links -->

[rl-link-params]: https://img.shields.io/badge/路径参数-526E86 ""
[rl-link-query]: https://img.shields.io/badge/查询参数-526E86 ""
[rl-line]: ./image/line.png ""
[rl-repo]: https://img.shields.io/badge/项目地址-555555?style=flat-square&logo=github ""

<!-- https://ionic.io/ionicons people-circle-outline -->
[rl-need-login]: https://img.shields.io/badge/需要登陆-E37945?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI1NiA0NjRjLTExNC42OSAwLTIwOC05My4zMS0yMDgtMjA4UzE0MS4zMSA0OCAyNTYgNDhzMjA4IDkzLjMxIDIwOCAyMDgtOTMuMzEgMjA4LTIwOCAyMDh6bTAtMzg0Yy05NyAwLTE3NiA3OS0xNzYgMTc2czc5IDE3NiAxNzYgMTc2IDE3Ni03OC45NSAxNzYtMTc2UzM1My4wNSA4MCAyNTYgODB6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMyMy42NyAyOTJjLTE3LjQgMC0zNC4yMS03LjcyLTQ3LjM0LTIxLjczYTgzLjc2IDgzLjc2IDAgMDEtMjItNTEuMzJjLTEuNDctMjAuNyA0Ljg4LTM5Ljc1IDE3Ljg4LTUzLjYyUzMwMy4zOCAxNDQgMzIzLjY3IDE0NGMyMC4xNCAwIDM4LjM3IDcuNjIgNTEuMzMgMjEuNDZzMTkuNDcgMzMgMTggNTMuNTFhODQgODQgMCAwMS0yMiA1MS4zQzM1Ny44NiAyODQuMjggMzQxLjA2IDI5MiAzMjMuNjcgMjkyem01NS44MS03NHpNMTYzLjgyIDI5NS4zNmMtMjkuNzYgMC01NS45My0yNy41MS01OC4zMy02MS4zMy0xLjIzLTE3LjMyIDQuMTUtMzMuMzMgMTUuMTctNDUuMDhzMjYuMjItMTggNDMuMTUtMTggMzIuMTIgNi40NCA0My4wNyAxOC4xNCAxNi41IDI3LjgyIDE1LjI1IDQ1Yy0yLjQ0IDMzLjc3LTI4LjYgNjEuMjctNTguMzEgNjEuMjd6TTQyMC4zNyAzNTUuMjhjLTEuNTktNC43LTUuNDYtOS43MS0xMy4yMi0xNC40Ni0yMy40Ni0xNC4zMy01Mi4zMi0yMS45MS04My40OC0yMS45MS0zMC41NyAwLTYwLjIzIDcuOS04My41MyAyMi4yNS0yNi4yNSAxNi4xNy00My44OSAzOS43NS01MSA2OC4xOC0xLjY4IDYuNjktNC4xMyAxOS4xNC0xLjUxIDI2LjExYTE5Mi4xOCAxOTIuMTggMCAwMDIzMi43NS04MC4xN3pNMTYzLjYzIDQwMS4zN2M3LjA3LTI4LjIxIDIyLjEyLTUxLjczIDQ1LjQ3LTcwLjc1YTggOCAwIDAwLTIuNTktMTMuNzdjLTEyLTMuODMtMjUuNy01Ljg4LTQyLjY5LTUuODgtMjMuODIgMC00OS4xMSA2LjQ1LTY4LjE0IDE4LjE3LTUuNCAzLjMzLTEwLjcgNC42MS0xNC43OCA1Ljc1YTE5Mi44NCAxOTIuODQgMCAwMDc3Ljc4IDg2LjY0bDEuNzktLjE0YTEwMi44MiAxMDIuODIgMCAwMTMuMTYtMjAuMDJ6Ii8+PC9zdmc+ ""

<!-- https://ionic.io/ionicons link-outline -->
[rl-online-tool]: https://img.shields.io/badge/在线工具-F94144?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+ ""

<!-- https://ionic.io/ionicons book-outline -->
[rl-official-docs]: https://img.shields.io/badge/官方文档-277DA1?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4= ""

<!-- https://ionic.io/ionicons information-circle-outline -->
[rl-badge-introduction]: https://img.shields.io/badge/『徽章介绍』-F9C74F?style=for-the-badge&labelColor=F3722C&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI0OCA2NEMxNDYuMzkgNjQgNjQgMTQ2LjM5IDY0IDI0OHM4Mi4zOSAxODQgMTg0IDE4NCAxODQtODIuMzkgMTg0LTE4NFMzNDkuNjEgNjQgMjQ4IDY0eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMzIiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzMiIgZD0iTTIyMCAyMjBoMzJ2MTE2Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIzMiIgZD0iTTIwOCAzNDBoODgiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQ4IDEzMGEyNiAyNiAwIDEwMjYgMjYgMjYgMjYgMCAwMC0yNi0yNnoiLz48L3N2Zz4= ""

<!-- https://ionic.io/ionicons caret-forward-outline -->
[rl-badge-params]: https://img.shields.io/badge/『徽章参数』-F9C74F?style=for-the-badge&labelColor=F3722C&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5MC4wNiA0MTRsMTYzLjEyLTEzOS43OGEyNCAyNCAwIDAwMC0zNi40NEwxOTAuMDYgOThjLTE1LjU3LTEzLjM0LTM5LjYyLTIuMjgtMzkuNjIgMTguMjJ2Mjc5LjZjMCAyMC41IDI0LjA1IDMxLjU2IDM5LjYyIDE4LjE4eiIvPjwvc3ZnPg== ""

<!-- https://ionic.io/ionicons caret-forward-outline -->
[rl-uses-examples]: https://img.shields.io/badge/-『使用示例』-F9C74F?style=for-the-badge&labelColor=F3722C&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5MC4wNiA0MTRsMTYzLjEyLTEzOS43OGEyNCAyNCAwIDAwMC0zNi40NEwxOTAuMDYgOThjLTE1LjU3LTEzLjM0LTM5LjYyLTIuMjgtMzkuNjIgMTguMjJ2Mjc5LjZjMCAyMC41IDI0LjA1IDMxLjU2IDM5LjYyIDE4LjE4eiIvPjwvc3ZnPg== ""
