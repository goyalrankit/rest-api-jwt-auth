const express = require('express');
const routes = express.Router();
const User = require('../model/UserSchema');
const { validationRegister } = require('../validations/validate');


// Register User

routes.post('/register', async (req,res)=>{

    const { name , email , password,cpassword } = req.body;

    // Validation check using JOI
    // This return the JSon object, so just getting error from JSON 
    const {error} = validationRegister(req.body);
    if(error)
    {
        return res.status(422).send( error.details[0].message);
    }


    // Create a new user 
    try {
        const registerUser = await new User({
            name: name,
            email: email,
            password: password,
            cpassword: cpassword,
        });


        // Email already exist
        const emailExist = await User.findOne({email:email});
        if(emailExist){
        return res.status(400).send('Email already Exist, Try registering with new Email');
        }

        // Saving user in Database
        if (registerUser) {
            registerUser.save();
            res.send(registerUser);
            res.status(200).json({ message: "User Registered Succesfully" });
           } else {
            return res.status(422).json({ error: "Not Registered" });
            }
     } catch (error){ 
            res.status(400).send(console.log(error));
        }
})

// // Login User
// routes.post('/login',(req,res) => {
//     res.send('Login');
// })


module.exports = routes;