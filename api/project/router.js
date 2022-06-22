// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res) => {
 const projects = await Project.find()
 res.json(projects)
})

router.post('/', (req, res) => {
  Project.insert(req.body)
  .then(newProject => {
    res.status(201).json(newProject[0])
  })
  .catch(err => {
    res.status(500).json({ message: "failed to create a project"})
  })
})
module.exports = router
