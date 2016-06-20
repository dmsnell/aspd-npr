const React = require( 'react' )

const ServerDetail = require( './server-detail.js' )
const ServerInList = require( './server-in-list.js' )

const Layout = React.createClass( {
  displayName: 'Layout',

  render() {
    const props = this.props
    const selectedServer = props.selectedServer && props.servers[ props.selectedServer ]
    const servers = Object
      .keys( props.servers )
      .map( s => props.servers[ s ] )

    return React.createElement( 'div', { className: 'header' }, [
      React.createElement( 'h1', { className: 'title' }, 'Server Dashboard' ),
      React.createElement( 'p', { className: 'description' }, 'Click on a server to see extended information about its process' ),
      selectedServer && React.createElement( ServerDetail, {}, selectedServer ),
      React.createElement( 'div', { className: 'server-list' },
        servers.map( server => React.createElement( ServerInList, { key: server.id, server } ) )
      )
    ] )
  }
} )

module.exports = Layout
