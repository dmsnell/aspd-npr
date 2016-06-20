const React = require( 'react' )

const loadRange = load => {
  if ( load > 1 ) { return 'high' }
  if ( load > 0.8 ) { return 'medium' }
  if ( load > 0.5 ) { return 'normal' }
  return 'low'
}

const serverClass = server => {
  return [
    'server',
    `server-${ server.id }`,
    server.status
  ].join( ' ' )
}

const ServerInList = React.createClass( {
  displayName: 'ServerInList',

  render() {
    const server = this.props.server

    return React.createElement( 'div', { className: serverClass( server ) }, [
      React.createElement( 'div', { className: 'hostname' }, server.hostname ),
      React.createElement( 'div', { className: 'load-display' },
        server.load.map( ( l, key ) => React.createElement( 'span', { key, className: `load-${ loadRange( l ) }` }, l.toFixed( 2 ) ) )
      )
    ] )
  }
} )

module.exports = ServerInList
