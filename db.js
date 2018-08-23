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

function addWalk (req, testConn){
  const conn = testConn || connection
  return conn('walks').insert(req)
}

function addUser (req, testConn){
  const conn = testConn || connection
  return conn('profiles').insert(req)
}


// function getUser (id, testConn) {
//   const conn = testConn || connection
//   return conn('users').where('id', id).first()
// }
module.exports = {
  getWalks,
  
  addWalk,
  addUser
}
