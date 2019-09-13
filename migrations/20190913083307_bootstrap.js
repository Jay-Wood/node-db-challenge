
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
        tbl.increments(); //generate PK
        tbl.string("project_name", 128) //proj name is required
            .unique()
            .notNullable();
        tbl.text("project_description"); //descrip is optional
        tbl.boolean("completed") 
            .notNullable()
            .defaultTo(false);
    })
    .createTable("resources", tbl => {
        tbl.increments();
        tbl.string("resource_name", 128)
            .notNullable()
            .unique();
        tbl.text("resource_description");
    })
    .createTable("proj_res", tbl => {
        tbl.increments();
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        tbl.integer("resource_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("resources")
            .onUpdate("CASCADE")
    })
    .createTable("tasks", tbl => {
        tbl.increments();
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        tbl.string("description", 2000)    
            .notNullable()
        tbl.boolean("completed") 
            .notNullable()
            .defaultTo(false);
        tbl.text("notes")
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('proj_res')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
