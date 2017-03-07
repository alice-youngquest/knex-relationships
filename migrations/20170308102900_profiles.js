
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('id').primary()
    table.string('profile_picture_url')
    table.string('url')
    table.integer('users_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profiles')
};
