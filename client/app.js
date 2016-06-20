const React = require( 'react' )
const ReactDOM = require( 'react-dom/server' )

const Layout = require( './layout.js' )

module.exports = state => ( request, response ) => {
  response.send( [
    '<html><head><link rel="stylesheet" href="/css/style.css"/></head>',
    '<body>',
    ReactDOM.renderToString(
      React.createElement( Layout, state )
    ),
    '</body></html>'
  ].join( '' ) )
}
