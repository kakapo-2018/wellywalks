const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

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

function getProfilesById (id, testConn) {
  const conn = testConn || connection
  return conn('profiles').where('id', id).first()
}

function getUsers (testConn){
  const conn = testConn || connection
  return conn('profiles').select()
}

function getWalkById(id, testConn) {
  const conn = testConn || connection
  return conn('walks').select().where({'id': id}).first()
}

function getUserFaves (user_id, testConn) {
  const conn = testConn || connection
  return conn('favourites').select()
  .join('walks', 'favwalk_id', 'id')
  .where({'user_id': user_id})
}


module.exports = {
  getWalks,
  getProfilesById,
  getWalkById,
  addWalk,
  addUser,
  getUsers,
  getUserFaves
}
