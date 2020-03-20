
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: 'practice node', notes: 'via lambda school daily projects'},
        {project_id: 1, description: 'practice express', notes: 'always use express with node'},

        {project_id: 2, description: 'complete Ruby TK modules', notes: 'watch videos and do projects'},
        {project_id: 2, description: 'make full stack app using Rails backend', notes: 'app could be a online school prototype'},

        {project_id: 3, description: 'do tutorials on tailwind', notes: 'find on youtube'},
        {project_id: 3, description: 'make frontend app using tailwind', notes: 'app could be ruby backend'}
      ]);
    });
};
