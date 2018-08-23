exports.up = function(knex, Promise) {
   return knex.schema.createTable('profiles', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.integer('level')
      table.string('bio', 1000)
      table.string('image')
    }) 
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('profiles')
};