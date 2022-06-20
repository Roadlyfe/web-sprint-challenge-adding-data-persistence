// build your server here and require it from index.js
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const projectsRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const tasksRouter = require('./task/router')

const server = express()

server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())

server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', tasksRouter)


server.use((err, req, res, next) => {
    // eslint-disable-line
    res.status(err.status || 500).json({ message: err.message})
})

module.exports = server