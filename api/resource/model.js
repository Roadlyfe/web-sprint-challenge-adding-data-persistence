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

module.exports = {
    find,
    insert,
}