const getServers = state =>
  Object.keys( state.servers )
    .map( server => state.servers[ server ] )
    .map( server => ( {
      id: server.id,
      hostname: server.hostname,
      load: server.load
    } ) )

const getServerList = state => ( request, response ) => {
  response.json( getServers( state ) )
}

module.exports = getServerList
