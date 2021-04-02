const express = require('express');
const routes = express.Router();
const User = require('./../model/UserSchema');

// Validation dependency
const Joi = require('@hapi/joi');

// Validation Schema
const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    
    email: Joi.string()
        .required()    
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .min(6)
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    cpassword: Joi.ref('password')

});


// Register User

routes.post('/register', async (req,res)=>{

    const { name , email , password,cpassword } = req.body;

    // This return the JSon object, so just getting error from JSON 
    const {error} = schema.validate(req.body)

    if(error)
    {
        return res.status(422).send( error.details[0].message);
    }


    // if( !name |! email |! password |!cpassword)
    // {
    //     return res.status(422).json( {error:'One or more field are empty'});
    // }

    try {
    const registerUser = await new User({
        name: name,
        email: email,
        password: password,
        cpassword: cpassword,
    });

        if (registerUser) {
            registerUser.save();
            res.send(registerUser);
            res.status(200).json({ message: "User Registered Succesfully" });
        } else {
            return res.status(422).json({ error: "Not Registered" });
        }
    } catch (error) { res.status(400).send(console.log(error))}


})

// // Login User
// routes.post('/login',(req,res) => {
//     res.send('Login');
// })


module.exports = routes;