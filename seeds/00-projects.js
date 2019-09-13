
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'project 1', project_description: "This is 1st description", completed: false},
        {id: 2, project_name: 'project 2', project_description: "This is 2nd description", completed: false},
        {id: 3, project_name: 'project 3', project_description: "This is 3rd description", completed: false}
      ]);
    });
};
