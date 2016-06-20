const getServer = state => id => state.servers[ id ] || {}

const getServerInfo = state => ( request, response ) => {
  const serverId = request.params.id

  response.json( getServer( state )( serverId ) )
}

module.exports = getServerInfo
