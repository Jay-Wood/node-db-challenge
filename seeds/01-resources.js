
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'Resource Name 1', resource_description: "This is 1st resource description"},
        {id: 2, resource_name: 'Resource Name 2', resource_description: "This is 2nd resource description"},
        {id: 3, resource_name: 'Resource Name 3', resource_description: "This is 3rd resource description"}
      ]);
    });
};
