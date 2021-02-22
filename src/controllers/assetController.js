const express = require('express');
const authMiddleware = require('../middlewares/auth');


const Asset = require('../models/ativo');

const router = express.Router();


//5router.use(authMiddleware);

router.get('/', async (req, res) => {  //list all assets
    try{
        const assets = await Asset.find().populate('responsible');  //colocar unidade

        return res.send({ assets });

    }catch (err){
        return res.status(400).send({ error: 'Error loading assets' });
    }
});

router.get('/:sensor_id', async (req, res) => {  //show asset by sensor_id
    
    try{
        const assets = await Asset.findOne({ sensor_id: req.params.sensor_id }).populate('responsible');

        return res.send({ assets });

    }catch (err){
        return res.status(400).send({ error: 'Error loading project' });
    }
});

router.post('/', async (req, res) => {  //register asset 
    try{
        console.log(req.body);
        
        const asset = await Asset.create({ ...req.body, responsible: req.userId });
        
        console.log(asset);

        return res.send({ asset });

    } catch(err){
        return res.status(400).send({ error: 'Error creating new project' });
    }

});

router.put('/:sensor_id', async (req, res) => {
    
});

router.delete('/:sensor_id', async (req, res) => { //delete asset by sensor_id
    try{
        await Asset.deleteOne({ sensor_id: req.params.sensor_id });

        return res.send();

    }catch (err){
        return res.status(400).send({ error: 'Error deleting project' });
    }
});

module.exports = app => app.use('/assets', router);