import virtualReadme from 'virtual:readme'
import { markdown2Html } from './markdown.js'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'github-markdown-css/github-markdown.css'
import './index.css'

let nowLocale = new URLSearchParams(location.search).get('locale') || ''
let vReadme = virtualReadme
const readmeMap: Map<string, string> = new Map()

const app = document.createElement('div')

function updateReadme(newVirtualReadme: Record<string, string>) {
  console.log('updateReadme', newVirtualReadme)
  readmeMap.clear()
  Object.entries(newVirtualReadme).forEach(([locale, readme]) => {
    readmeMap.set(locale, markdown2Html(readme))
  })

  vReadme = newVirtualReadme
  app.innerHTML = readmeMap.get(nowLocale) || ''
  app.addEventListener('click', (e) => {
    const localeLink = e.target as HTMLAnchorElement
    if (localeLink.classList.contains('locale-link')) {
      e.preventDefault()
      nowLocale = localeLink.dataset.locale || ''
      app.innerHTML = readmeMap.get(nowLocale) || ''
      const url = new URL(location.href)
      url.searchParams.set('locale', nowLocale)
      history.pushState(null, '', url.href)
    }
  })
}

if (import.meta.hot) {
  import.meta.hot.on('virtual:readme:reload', (newVirtualReadme: Record<string, string>) => {
    updateReadme(newVirtualReadme)
  })
}

updateReadme(vReadme)
app.classList.add('markdown-body')
document.body.appendChild(app)