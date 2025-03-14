import virtualReadme from 'virtual:readme'
import { markdown2Html } from './markdown.js'
import 'github-markdown-css/github-markdown.css'
import './index.css'

const app = document.createElement('div')
if (import.meta.hot) {
  import.meta.hot.on('virtual:readme:reload', (newVirtualReadme: string) => {
    app.innerHTML = markdown2Html(newVirtualReadme)
  })
}
app.innerHTML = markdown2Html(virtualReadme)
app.classList.add('markdown-body')
document.body.appendChild(app)