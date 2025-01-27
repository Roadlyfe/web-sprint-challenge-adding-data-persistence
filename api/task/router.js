// build your `/api/tasks` router here

const router = require('express').Router()
const Task = require('./model')

router.get('/', async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

router.post('/', (req, res) => {
  Task.insert(req.body)
  .then(newResource => {
    res.status(201).json(newResource[0])
  })
  .catch(err => {
    res.status(500).json({ message: "failed to create a resource"})
  })
})
 
module.exports = router