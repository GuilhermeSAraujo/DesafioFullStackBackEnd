const express = require('express');
const authMiddleware = require('../middlewares/auth');

const User = require('../models/user');

const router = express.Router();

//router.use(authMiddleware);

router.get('/:user_id', async (req, res) => {  //show user by _id
    
    try{
        const user = await User.findById(req.params.user_id);

        return res.send({ user });

    }catch (err){
        return res.status(400).send({ error: 'Error loading user' });
    }

});

router.delete('/:user_id', async (req, res) => { //delete user by _id
    try{
        await User.deleteOne({_id: req.params.user_id});
        
        return res.send();

    }catch (err){
        return res.status(400).send({ error: 'Error deleting user' });
    }
});

module.exports = app => app.use('/users', router);