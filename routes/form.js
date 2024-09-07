const PData = require('../models/Project.js');
const TData = require('../models/Talks.js');
const express = require('express');
const router = express.Router();


router.get('/test', (req, res)=>{
    res.status(200).send('Everything is fine')
})

router.post('/submit', async (req, res) => {
    console.log(req.body);   
    try {
        const {
            project_name,about,category,conducting_org,qcategory,questions,ImageSet,tutorial } = req.body;

        const newProjectData = new PData({project_name,about,category,conducting_org,qcategory,questions,ImageSet,tutorial});

        await newProjectData.save();

        res.status(201).json({ message: 'data submitted in mongo' });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to submit data' });
    }

});


router.get('/projects', async (req, res) => {
    try {
        const projects = await PData.find(); 
        res.status(200).json(projects); 
    } catch (error) {
        console.error('Error ', error);
        res.status(500).json({ error: 'Failed to get projects' });
    }
});

router.get('/projects/:id', async (req, res) => {
    try {
        const project = await PData.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        console.error('Error fetching project :', error);
        res.status(500).json({ error: 'Failed to fetch project' });
    }
});

router.post('/projects/vote', async (req, res) => {
    const { projectId, imageIndex, option } = req.body;

    try {
        const project = await PData.findById(projectId); 

        if (!project.ImageSet[imageIndex].votes) {
            project.ImageSet[imageIndex].votes = {};
        }

        const imageVotes = project.ImageSet[imageIndex].votes;
        
        imageVotes.set(option, (imageVotes.get(option) || 0) + 1);

        project.markModified(`ImageSet.${imageIndex}.votes`);

        console.log(imageVotes);

        await project.save();

        res.status(200).json({ message: 'Vote updated', votes: imageVotes });

    } catch (error) {
        console.error('Error :', error);
        res.status(500).json({ error: 'Failed ' });
    }
});

router.post('/submit/talks', async (req, res) => {
        const {text} = req.body;
        try {
            let tData = await TData.findOne();

            if (!tData) {
                tData = new TData({ content: [] });
            }

            tData.content.push(text);

            await tData.save();

            res.status(200).json({ message: 'Success', data: tData });
        } catch (error) {
            res.status(500).json({ message: 'Failed', error });
        }
    
});

router.get('/talks', async (req, res) => {
    try{
        const Tdata = await TData.findOne();

        if(!Tdata){
            Tdata = [];
        } 

        res.status(200).json({ message: 'Success', data: Tdata.content });
    }
    catch(error){
        res.status(500).json({ message : 'Error', error});
    }
})

module.exports = router;