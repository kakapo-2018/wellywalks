const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWalks
}

function getWalks (testConn) {
  const conn = testConn || connection
  return conn('walks').select()
}

// function getUser (id, testConn) {
//   const conn = testConn || connection
//   return conn('users').where('id', id).first()
// }
