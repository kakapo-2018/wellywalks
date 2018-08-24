
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, name: 'Clark Kent', level: 3,  bio: 'Born in Kryton, raised in Smallville, Kansas', image: 'https://media.proprofs.com/images/QM/user_images/2169923/1517751718.jpg' },
        {id: 2, name: 'Bruce Wayne', level: 3, bio: 'Bruce Wayne swore an oath to rid the city of the evil that had taken his parents lives. He spent his youth traveling the world, training himself to intellectual and physical perfection and learning a variety of crime-fighting skills, including chemistry, criminology, forensics, martial arts, gymnastics, disguise, and escape artistry.', image: 'https://images.forbes.com/media/lists/fictional/2011/bruce-wayne_197x282.jpg' },
        {id: 3, name: 'Hal Jordan', level: 3, bio: 'Hal Jordan is a fighter pilot, a member and occasionally leader of an intergalactic police force called the Green Lantern Corps, as well as a founding member of the Justice League.', image: 'https://static.comicvine.com/uploads/original/7/72386/2056025-hal_jordan.png' },
      ]);
    });
};