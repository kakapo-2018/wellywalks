exports.up = (knex, Promise) => {
  return knex.schema.createTable('walks', (table) => {
    table.increments('id').primary()
    table.string('walk_name')
    table.string('created_by')
    table.string('location')
    table.integer('length')
    table.integer('duration')
    table.string('difficulty')
    table.string('description')
    table.string('url')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('walks')
}
