exports.up = async function (knex) {
    await knex.schema
        .createTable('projects', table => {
            table.increments("project_id")
            table.varchar('project_name', 128).notNullable().unique()
            table.varchar('project_description', 256).notNullable()
            table.boolean('project_completed')
        })
        .createTable('resources', table => {
            table.increments("resource_id")
            table.varchar('resource_name', 128).notNullable().unique()
            table.varchar('resource_description', 256)
        })
        // .createTable('tasks', table => {
        //     table.increments("task_id") //should this also be called project_id for the join? 
        //     table.varchar('task_description', 256).notNullable()
        //     table.boolean('task_completed').notNullable().defaultTo(false)
            // table
            // .integer('project_id')
            // .unsigned()
            // .notNullable()
            // .references('project_id')
            // .inTable('projects')
            // .onDelete('RESTRICT')
            // .onUpdate('RESTRICT')
            //im not sure if I should attach projects to tasks here or do it like i did below. 
        //})
        // .createTable('project_resources', table => {
        //     table.increments('project_task_id')
        //     // table.float('quantity').notNullable()
        //     table.integer('task_id')
        //         .unsigned()
        //         .notNullable()
        //         .references('task_id')
        //         .inTable('tasks')
        //         .onDelete('RESTRICT')
        //         .onUpdate('RESTRICT')
        //     table.integer('project_id')
        //         .unsigned()
        //         .notNullable()
        //         .references('project_id')
        //         .inTable('projects')
        //         .onDelete('RESTRICT')
        //         .onUpdate('RESTRICT')
        // })

};


exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};