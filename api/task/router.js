// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')


router.get('/', async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

router.post('/', async (req,res) => {
    const task = req.body
    const newTask = await Resource(task)
    res.json(newTask)
})
module.exports = router