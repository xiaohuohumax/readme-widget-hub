<a name="readme-top"></a>
<div align="center">
  <div>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=160&section=header">
  </div>
  <a href="https://github.com/xiaohuohumax/readme-widget-hub">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&width=416&height=68&lines=%F0%9F%8E%96%EF%B8%8FReadme+Widget+Hub%F0%9F%8E%96%EF%B8%8F"/>
  </a>
  <p><b>{{title}}</b></p>{{if showTags}}
  <div>
    <a href="https://github.com/xiaohuohumax/readme-widget-hub?tab=MIT-1-ov-file#readme"><img src="https://img.shields.io/github/license/xiaohuohumax/readme-widget-hub" /></a>
    <a href="https://github.com/xiaohuohumax/readme-widget-hub/pulls"><img src="https://img.shields.io/github/issues-pr/xiaohuohumax/readme-widget-hub" /></a>
    <a href="https://github.com/xiaohuohumax/readme-widget-hub/issues"><img src="https://img.shields.io/github/issues/xiaohuohumax/readme-widget-hub" /></a>
    <a href="https://github.com/xiaohuohumax/readme-widget-hub"><img src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2Fxiaohuohumax%2Freadme-widget-hub&countColor=%2337D67A&style=flat&labelStyle=lower" /></a>
    <a href="https://github.com/xiaohuohumax/readme-widget-hub"><img src="https://img.shields.io/badge/badges-{{widgetCount}}-37D67A?labelColor=555555" /></a>
    <a href="https://github.com/xiaohuohumax/readme-widget-hub"><img src="https://img.shields.io/github/stars/xiaohuohumax/readme-widget-hub" /></a>
  </div>{{/if}}{{if navs.length > 0}}
  <div>
    <b>{{each navs}}
      {{if $index!== 0}}·{{/if}} <a href="{{@$value.href}}">{{@$value.name}}</a>{{/each}}
    </b>
  </div>{{/if}}
  <br/>
</div>

{{if !hasLocale}}
> [!Warning]
> {{readme.notLocaleWarning}}
{{/if}}
