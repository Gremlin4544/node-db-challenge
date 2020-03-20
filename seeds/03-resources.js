
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'laptop', description: 'hp omen'},
        {name: 'desk', description: 'ikea standing desk'},
        {name: 'keyboard', description: 'logitech wave'},
        {name: 'ac', description: 'keeps office cool'}
      ]);
    });
};
