// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')


router.get('/', async (req, res) => {
    const resources = await Resource.find()
    res.json(resources)
})

router.post('/', async (req,res) => {
    const resource = req.body
    const newResource = await Resource(resource)
    res.json(newResource)
})
module.exports = router