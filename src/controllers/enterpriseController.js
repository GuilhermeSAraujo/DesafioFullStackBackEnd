const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Enterprise = require('../models/empresa');

const router = express.Router();


//router.use(authMiddleware);

router.get('/', async (req, res) => {  //list all enterprises

    try{
        const enterprise = await Enterprise.find();

        return res.send({ enterprise });

    }catch (err){
        return res.status(400).send({ error: 'Error loading enterprises' });
    }

});

router.get('/:enterprise_id', async (req, res) => {  //show enterprise by _id
    
    try{
        const enterprise = await Enterprise.findById(req.params.enterprise_id);

        return res.send({ enterprise });

    }catch (err){
        return res.status(400).send({ error: 'Error loading enterprise' });
    }

});

router.post('/', async (req, res) => {  //register enterprise 
    try{
        
        
        const enterprise = await Enterprise.create({ ...req.body }); //colocar unidade

        return res.send({ enterprise });

    } catch(err){
        return res.status(400).send({ error: 'Error creating new enterprise' });
    }

});

router.put('/:sensor_id', async (req, res) => {
    
});

router.delete('/:enterprise_id', async (req, res) => { //delete enterprise by _id
    try{
        await Enterprise.deleteOne({_id: req.params.enterprise_id});
        
        return res.send();

    }catch (err){
        return res.status(400).send({ error: 'Error deleting project' });
    }
});

module.exports = app => app.use('/enterprises', router);