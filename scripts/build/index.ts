import { BadgeBuilder } from './badge.js'

const builder = new BadgeBuilder({
  env: import.meta.env,
  logger: console,
})

console.log('Start building README.md...')
builder.buildAllReadmeHtml()
console.log('Build README.md success.')
