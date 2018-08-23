const express = require('express')
const hbs = require('express-handlebars')

const walkRoutes = require('./routes/walks')

const server = express()

// Middleware

server.engine('hbs', hbs({defaultLayout: 'main', extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', walkRoutes)

module.exports = server
