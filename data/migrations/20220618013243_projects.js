exports.up = async function (knex) {
    await knex.schema
        .createTable('projects', table => {
            table.increments("project_id")
            table.varchar('project_name', 128).notNullable().unique()
            table.varchar('project_description', 256).notNullable().unique()
            table.boolean('project_completed')
        })
        .createTable('resources', table => {
            table.increments("resource_id")
            table.varchar('resource_name', 128).notNullable().unique()
        })
        .createTable('tasks', table => {
            table.increments("task_id")
            table.varchar('task_description', 256).notNullable().unique()
            table.boolean('task_completed')
        })
        .createTable('project_resources', table => {
            table.increments('project_task_id')
            // table.float('quantity').notNullable()
            table.integer('task_id')
                .unsigned()
                .notNullable()
                .references('task_id')
                .inTable('tasks')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            table.integer('project_id')
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
        .dropTableIfExists('prejects')
};