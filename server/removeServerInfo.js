const removeServer = state => serverId => Object.assign(
  state,
  {
    servers: Object.assign(
      state.servers,
      { [ serverId ]: undefined }
    )
  }
)

const removeServerInfo = ( state, persister ) => ( request, response ) => {
  const serverId = request.params.id
  const nextState = removeServer( state )( serverId )

  persister( nextState )
  response.json( nextState )
}

module.exports = removeServerInfo
