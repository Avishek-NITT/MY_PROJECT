const express = require('express')


const router = express.Router();


router.post( '/signup' , async(req,res) => {

    //do info checking and saving here


    console.log("info recieved.!!!\n");

    res.json({
        success: true,
        message: "User registered successfully"
    });
});


module.exports = router;