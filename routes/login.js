const express = require('express');
const routes = express.Router();
const User = require('../model/UserSchema');
const { validationLogin } = require('../validations/validate');
const bcrypt = require('bcryptjs');

// Login User

routes.post('/login',async (req,res) => {
 
try {

    const {email, password} = req.body;

    console.log(email);

    // Validation check using JOI
    // This return the JSon object, so just getting error from JSON 
    const {error} = validationLogin(req.body);
    if(error)    {
        return res.status(422).send( error.details[0].message);
    }


    const userDetails = await User.findOne({email:email});
    // Check If Email exist
    if(!userDetails)
    {   return res.status(400).send('Email or password are invalid'); }

    // Compare Password if email exist
     const validatePass =   await bcrypt.compare(password,userDetails.password);
     if(!validatePass){
            return res.status(400).send('Email or password does not match');    }

    return res.send('Login success');

    } catch (error) {
        res.status(400).send(console.log(error));
        }
});


module.exports = routes;