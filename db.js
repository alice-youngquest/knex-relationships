var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getUsers: getUsers,
  getProfile: getProfile
}

function getUsers (testDb) {
  // Use a test database if one is passed in, or the connection defined above.
  var db = testDb || connection
  return db('users').select()
}

function getProfile (id, testDb){
  var db = testDb || connection
  return db('profiles')
    .where('users.id', id)
    .join('users', 'profiles.users_id', '=', 'users.id')
    .select('users.name', 'profiles.profile_picture_url')
}

// function getUser (id, testDb) {
//   var db = testDb || connection
//   return db('users').where('id', id)
// }
