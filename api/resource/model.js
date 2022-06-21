// build your `Resource` model here
const db = require('../../data/dbConfig')

const find = () => {
    return db('resources')
        .then((resource) =>
           resource.map((proj) => ({
                ...proj,
                project_completed: proj.project_completed ? true : false,
            }))
        )
        .catch(err => console.log(err.message))
}

const insert = (project) => {
    return db('resources')
        .insert(project, 'resource_id')
        .then(([resource_id]) => db('resources').where({ resource_id }))
        .then((resources) =>
            resources.map((proj) => ({
                resource_name: proj.resource_name,
                // project_completed: proj.project_completed ? true : false,
            }))
        )
        .catch(err => console.log(err.message))
}

   // .then((resources) =>
        //     resources.map((proj) => ({
        //         resource_name: proj.resource_name,
        //         // project_completed: proj.project_completed ? true : false,
        //     }))
        // )

//...proj,
//task get join 
// i still need to figure out the rest of the method


// {
//  return db('tasks as t')
//  .join('projects as p', 't.project_id', 'p.project_id')
//  .select(
//     't.task_description',
//     't.task_notes',
//     't.task_completed', 
//     'p.project_name',
//     'p.project_description'
//     ).then()
// //refactor this for task_completed?
// // tasks.map((task) => ({
// //     ...task,
// //     task_completed: task.task_completed ? true : false,
// // }))


// //I either need to make seeds or make my post routes so I have data.

// }


module.exports = {
    find,
    insert,
}