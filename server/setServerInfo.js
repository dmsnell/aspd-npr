const setServer = state => serverInfo => {
  state.servers[ serverInfo.id ] = serverInfo

  return state
}

const setServerInfo = ( state, persister ) => ( request, response ) => {
  const serverInfo = request.body
  const nextState = setServer( state )( serverInfo )

  persister( nextState )

  response.json( nextState )
}

module.exports = setServerInfo
