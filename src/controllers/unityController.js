const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Unity = require('../models/unidade');

const router = express.Router();


//router.use(authMiddleware);

router.get('/', async (req, res) => {  //list all units

    try{
        const unity = await Unity.find().populate('enterprise');

        return res.send({ unity });

    }catch (err){
        return res.status(400).send({ error: 'Error loading units' });
    }

});

router.get('/:unity_id', async (req, res) => {  //show unity by _id
    
    try{
        const unity = await Unity.findById(req.params.unity_id);

        return res.send({ unity });

    }catch (err){
        return res.status(400).send({ error: 'Error loading unity' });
    }


});

router.post('/', async (req, res) => {  //register unity 
    try{
        
        
        const unity = await Unity.create({ ...req.body  }); //colocar empresa

        console.log(req.body);

        return res.send({ unity });

    } catch(err){
        return res.status(400).send({ error: 'Error creating new unity' });
    }

});

router.put('/:sensor_id', async (req, res) => {
    
});

router.delete('/:unity_id', async (req, res) => { //delete unity by _id
    try{
        await Unity.deleteOne({_id: req.params.unity_id});
        
        return res.send();

    }catch (err){
        return res.status(400).send({ error: 'Error deleting unity' });
    }
});

module.exports = app => app.use('/units', router);