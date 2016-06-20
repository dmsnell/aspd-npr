'use strict'

const bodyParser = require( 'body-parser' )
const express = require( 'express' )
const fs = require( 'fs' )
const app = express()

const dashboardApp = require( './client/app.js' )
const getServerInfo = require( './server/getServerInfo.js' )
const getServerList = require( './server/getServerList.js' )
const setServerInfo = require( './server/setServerInfo.js' )
const removeServer = require( './server/removeServerInfo.js' )

const stateFile = './state.json'
const persister = state => fs.writeFile( stateFile, JSON.stringify( state ), { encoding: 'utf8' } )
const state = JSON.parse( fs.readFileSync( stateFile, { encoding: 'utf8' } ) )

app.use( bodyParser.json() )

app.get( '/', dashboardApp )
app.get( '/servers/:id', getServerInfo( state ) )
app.get( '/servers/', getServerList( state ) )
app.post( '/servers/:id', setServerInfo( state, persister ) )
app.delete( '/servers/:id', removeServer( state, persister ) )

app.listen( 4000, () => console.log( 'Running on :4000' ) )
