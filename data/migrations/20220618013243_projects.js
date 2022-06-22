exports.up = async function (knex) {
    await knex.schema
        .createTable('projects', table => {
            table.increments("project_id")
            table.varchar('project_name', 128).notNullable()
            table.varchar('project_description', 256)
            table.boolean('project_completed').notNullable().defaultTo(0)
        })
        .createTable('resources', table => {
            table.increments("resource_id")
            table.varchar('resource_name', 128).notNullable().unique()
            table.varchar('resource_description', 256)
        })
        .createTable('tasks', table => {
            table.increments("task_id") //should this also be called project_id for the join? 
            table.varchar('task_description', 256).notNullable()
            table.varchar('task_notes')
            table.boolean('task_completed').notNullable().defaultTo(false)
            table
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        })
};


exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};