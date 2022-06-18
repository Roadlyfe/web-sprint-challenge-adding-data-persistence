// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res) => {
 const projects = await Project.find()
 res.json(projects)
})

router.post('/', async (req, res) => {
    const project = req.body
    const newProject = await Project.insert(project)
    res.json(newProject)
})
module.exports = router