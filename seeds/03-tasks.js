
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1, description: "Task 1 description", completed: false, notes: "Task 1 notes"},
        {id: 2, project_id: 1, description: "Task 2 description", completed: false, notes: "Task 2 notes"},
        {id: 3, project_id: 1, description: "Task 3 description", completed: false, notes: "Task 3 notes"},
        {id: 4, project_id: 2, description: "Task 4 description", completed: false, notes: "Task 4 notes"},
        {id: 5, project_id: 2, description: "Task 5 description", completed: false, notes: "Task 5 notes"},
        {id: 6, project_id: 3, description: "Task 5 description", completed: false, notes: "Task 6 notes"},
        {id: 7, project_id: 3, description: "Task 5 description", completed: false, notes: "Task 7 notes"},
        {id: 8, project_id: 3, description: "Task 5 description", completed: false, notes: "Task 8 notes"},
      ]);
    });
};
