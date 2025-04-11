---
layout: home

hero:
  name: {{name}}
  tagline: {{title}}
  image:
    src: {{logo}}
  actions:
    - theme: brand
      text: {{doc.docIndex.startButton}}
      link: {{localeCode}}/badges/shields-io

features:
{{each features}}  - title: "{{$value.title}}"
    details: "{{$value.details}}"
    link: {{$value.link}}
{{/each}}
---
