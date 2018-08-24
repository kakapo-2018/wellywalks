exports.seed = function (knex, Promise) {
    return knex('favourites').del()
      .then(function () {
        return knex('favourites').insert([
          {user_id: 1, favwalk_id: 61},
          {user_id: 2, favwalk_id: 62},
          {user_id: 3, favwalk_id: 63},
          {user_id: 3, favwalk_id: 62},
        ])
      })
  }