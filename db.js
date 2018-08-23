const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


function getWalks (testConn) {
  const conn = testConn || connection
  return conn('walks').select()
}

function getWalkById (walkID, testConn) {
  const conn = testConn || connection
  return conn('walks')
  .where('id', walkID)
  .first()
}


module.exports = {
  getWalks,
  getWalkById
}
