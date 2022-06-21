// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', async (req, res) => {
    const resources = await Resource.find()
    res.json(resources)
})

router.post('/', (req, res) => {
    Resource.insert(req.body)
    .then(newResource => {
      res.status(201).json(newResource[0])
    })
    .catch(err => {
      res.status(500).json({ message: "failed to create a resource"})
    })
  })

module.exports = router


// router.post('/', async (req,res) => {
//     const resource = req.body
//     const newResource = await Resource.insert(resource)
//     res.json(newResource)
// })