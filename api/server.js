const express = require('express');

const cors = require('cors');
const helmet = require('helmet');


const ResourcesRouter = require('../resources/resources-router.js');
const ProjectsRouter = require('../projects/projects-router.js');
const TasksRouter = require('../tasks/tasks-router.js');

const server = express();
server.use(express.json());
server.use(helmet());

server.use(cors());

server.use('/api/resources', ResourcesRouter);
server.use('/api/projects', ProjectsRouter);
server.use('/api/tasks', TasksRouter);

server.use((err, req, res, next) => {
    console.log(err, "server error");
    res.json({message: "ERROR!"})
})

module.exports = server;