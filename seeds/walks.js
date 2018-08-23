
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('walks').del()
    .then(function () {
      // Inserts seed entries
      return knex('walks').insert([
        {walk_name: 'Red Rocks Coastal Walk', created_by: 'Admin', location:'Red Rocks Wellington', length: '8', duration:'3',difficulty:'Beginner',description:'Experience the wildest part of Wellington’s rugged south coast. Meet the seals in winter just beyond Red Rocks (Pariwhero) at Sinclair Head – but don’t get too close! The easy grade coastal track from Owhiro Bay passes historic baches built in the early 1900s. The 4WD track is closed to vehicles every Sunday. Exposed during southerly winds.', url:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12854.32071187363!2d174.749484!3d-41.348408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38bafa17b88eef%3A0xe9f6765c794fd635!2sRed+Rocks+Walkway%2C+Owhiro+Bay%2C+Wellington+6023!5e1!3m2!1sen!2snz!4v1535004304532" width="800" height="600" frameborder="0" style="border:0" allowfullscreen'}
      ]);
    });
};
