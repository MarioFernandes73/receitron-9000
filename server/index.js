const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const initializeDatabase = require('./dbs')
const routes = require('./routes')


initializeDatabase().then(dbs => {
  routes(app, dbs).listen(port, () => console.log('Listening on port: ' + port))
}).catch(err => {
  console.error('Failed to make all database connections!')
  console.error(err)
  process.exit(1)
})