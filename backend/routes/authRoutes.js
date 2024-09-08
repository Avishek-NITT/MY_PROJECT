const express = require('express')
const User = require('../Models/User')

const router = express.Router();


router.post( '/signup' , async(req,res) => {

    try{
        const newUser = new User({
          userName : req.body.userName,
          password : req.body.password, 
          email : req.body.email
        });

        await newUser.save();
        
        res.status(201).json({ message: 'User created successfully' });
        // res.json(req.body)

    }catch(error){
        res.status(400).json({ error: 'Error creating user' });
    }
});


module.exports = router;