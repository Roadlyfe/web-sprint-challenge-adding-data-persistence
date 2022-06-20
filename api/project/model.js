// build your `Project` model here

const db = require('../../data/dbConfig')

const find = () => {
    return db('projects')
        .then((projects) =>
            projects.map((proj) => ({
                ...proj,
                project_completed: proj.project_completed ? true : false,
            }))
        )
        .catch(err => console.log(err.message))
}

const insert = (project) => {
    return db('projects')
        .insert(project)
        .then((project_id) => db('projects').where({ project_id }))
        .then((projects) => {
        
        // const project = projects[0]
        // project.project_completed = project.project_completed ? true : false
            projects.map((proj) => ({
               project_description: proj.project_description,
               project_name: proj.project_name,
               project_completed: proj.project_completed ? true : false,
            }))
            // return project
        })
        .catch(err => console.log(err.message))
}


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