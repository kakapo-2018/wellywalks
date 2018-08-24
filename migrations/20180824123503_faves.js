exports.up = (knex, Promise) => {
    return knex.schema.createTable('favourites', (table) => {
      table.integer('user_id')
      table.integer('favwalk_id')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('favourites')
  }
  