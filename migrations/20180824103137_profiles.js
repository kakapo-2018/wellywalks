exports.up = function(knex, Promise) {
   return knex.schema.createTable('profiles', (table) => {
      table.increments('id')
      table.string('profile_id')
      table.string('name')
      table.string('bio', 1000)
      table.string('image')
    }) 
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('profiles')
};