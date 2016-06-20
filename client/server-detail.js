const React = require( 'react' )

const ServerDetail = React.createClass( {
  displayName: 'ServerDetail',

  render() {
    const server = this.props.server

    return React.createElement( 'div', { className: 'server server-detail' }, [
      React.createElement( 'div', { className: 'hostname' }, server.hostname ),
      React.createElement( 'div', { className: 'load-display' },
        server.load.map( ( l, key ) => React.craeteElement( 'span', { key }, l ) )
      )
    ] )
  }
} )

module.exports = ServerDetail
