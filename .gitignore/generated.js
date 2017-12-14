let data = {
  article:
  {
    title: 'title',
    author: null,
    comments: [
    {}]
  }
}

let __headerTemplate = html`<h1>${article.title}</h1>`
let __commentTemplate =

html`
<html>
  <body>
    ${__headerTemplate}
    <p>${article}</p>
    <div>${safe(_=> article.author)}</div>
    <ul>
      ${article.comments.map(comment => __commentTemplate(comment))}
    </ul>
  </body>
</html>
`
