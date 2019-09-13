
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('proj_res').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('proj_res').insert([
        {id: 1, project_id: '1', resource_id: 1},
        {id: 2, project_id: '1', resource_id: 2},
        {id: 3, project_id: '2', resource_id: 1},
        {id: 4, project_id: '3', resource_id: 1},
        {id: 5, project_id: '3', resource_id: 2},
        {id: 7, project_id: '3', resource_id: 3},
        {id: 8, project_id: '1', resource_id: 3},
        {id: 9, project_id: '2', resource_id: 2},
      ]);
    });
};
