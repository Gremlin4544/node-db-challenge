const express = require('express');

const Projects = require('./projects-model.js')

const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.getProjects()
    .then(projects => {
        res.json({projects, message: 'Qui-Gon - its working! Its working!'})
    })
    .catch(err => {
        next(err)
    })
})

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(response => {
        res.status(200).json({ message: 'Qui-Gon - its working! Its working!'});
    })
    .catch(err => {
        res.status(500).json({error: 'Unable to retrieve projects'});
    });
});

router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.addProject(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new project' });
        }); 
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Projects.getProject(id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: `Unable to retrieve project of id ${id}`});
    });
})

router.get('/:id/resources', (req, res) => {
    const id = req.params.id;
    Projects.getProjectResources(id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({error: `Unable to retrieve resources for project of id ${id}`});
        });
});

router.get('/:id/details', (req, res) => {
    const id = req.params.id;
    Projects.getProjectWithDetails(id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({error: `Unable to retrieve details for project of id ${id}`});
        });
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Projects.removeProject(id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: `Unable to delete project with id ${id}`});
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedProject = req.body;
    Projects.updateProject(id, updatedProject)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: `Unable to update project with id ${id}`});
    });
});

module.exports = router;