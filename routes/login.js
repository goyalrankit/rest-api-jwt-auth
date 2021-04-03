const express = require('express');
const routes = express.Router();
const User = require('../model/UserSchema');
const { validationLogin } = require('../validations/validate');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Login User

routes.post('/login',async (req,res) => {
 
try {

        const {email, password} = req.body;

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

        // Create and assign a new Token
        const newToken = await jwt.sign({ _id:userDetails._id},process.env.SECRET_TOKEN);
      
        if(!newToken){
            res.status(400).send('Something went wrong. Try again');
        }
        return res.header({'login-token':newToken}).send(newToken);          
    } catch (error) {
        res.status(400).send(console.log(error));
        }
});


module.exports = routes;