//main.js
import header from './header'
import safe from './safe'
let data = {
  article:
  {
    title: 'title',
    author: null,
    comments: [
    {}]
  }
}

html`
${header}
<p>${article}</p>
<div>${safe(_=> article.author)}</div>
<ul>
  ${article.comments.map(comment => __commentTemplate(comment))}
</ul>
`

//header.js
export default html`<h1>${article.title}</h1>`

//comment.js
import scoped from './scoped'
export default function(comment) {
  return html`<p>${comment.body} ${scoped.foo}</p>`
}
