
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, profile_id: '123', name: 'Clark Kent', bio: 'Born in Kryton, raised in Smallville, Kansas', image: 'url1' },
        {id: 2, profile_id: '345', name: 'Bruce Wayne', bio: 'Bruce Wayne swore an oath to rid the city of the evil that had taken his parents lives. He spent his youth traveling the world, training himself to intellectual and physical perfection and learning a variety of crime-fighting skills, including chemistry, criminology, forensics, martial arts, gymnastics, disguise, and escape artistry.', image: 'url2' },
        {id: 3, profile_id: '678', name: 'Hal Jordan', bio: 'Hal Jordan is a fighter pilot, a member and occasionally leader of an intergalactic police force called the Green Lantern Corps, as well as a founding member of the Justice League.', image: 'url3' },
      ]);
    });
};