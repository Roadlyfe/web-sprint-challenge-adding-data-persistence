// build your `Task` model here
const db = require('../../data/dbConfig')


function find() {
    return db('tasks')
        .join('projects', 'projects.project_id', 'tasks.project_id')
        .select('tasks.task_notes', 'tasks.task_description', 'tasks.task_completed', 'projects.project_name', 'projects.project_description')    
        .then((projects) =>
            projects.map((proj) => ({
                ...proj,
                task_completed: proj.task_completed ? true : false,
            }))
        )
        .catch(err => console.log(err.message))
}

function insert(task) {
    return db('tasks')
        .insert(task, 'task_id')
        .then(([task_id]) => db('tasks').where({ task_id }))
        .then((tasks) =>
            tasks.map((task) => ({
                ...task,
                task_completed: task.task_completed ? true : false,
            }))
        )
        .catch(err => console.log(err.message))
}

module.exports = {
    find,
    insert,
}