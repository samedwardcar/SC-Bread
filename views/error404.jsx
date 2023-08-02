const React = require('react')
const Default = require('./layouts/default')

function error404 () {
    return (
        <Default>
        <h1>{404}</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <li>
          <a href="/breads">Go home</a>
        </li>
      </Default>
       )
  }
  
module.exports = error404
