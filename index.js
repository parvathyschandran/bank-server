//import json server
const jsonServer = require('json-server')

//create server app
const server = jsonServer.create()

//setup route for db.json
const router = jsonServer.router('db.json')

//return amiddleware used by JSON server
const middleware = jsonServer.defaults()

//setup port number for server-app
const port = process.env.PORT || 3000

//setup port number for server app

server.use(middleware)
server.use(router)

//to listen the server app in port
server.listen(port,()=>{
    console.log(`Bank server app started at port ${port}`);
})