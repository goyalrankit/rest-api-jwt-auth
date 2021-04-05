const express = require('express');
const routes = express.Router();
const User = require('../model/UserSchema');
const { validationPasswordReset } = require('../validations/validate');
const bcrypt = require('bcryptjs');

routes.post('/reset-password', async ( req, res ) =>{
    
    const { email, question,answer ,password } =  req.body;
  
    // Validation
    const {error} = validationPasswordReset(req.body);
        if(error)
            { return res.status(404).send(error.details[0].message);}

    try {        
        // Getting the Email    
        const userDetails = await User.findOne({email:email});

        // Email does not exist
        if(!userDetails){
            return res.status(404).send('Invalid Credentials');
        }

        // Matching the Security Answer
        if( question === userDetails.question && answer === userDetails.answer)
        {
            // Hash the New password
            const hashedPassword = await bcrypt.hash(password,12);

            userDetails.name     = userDetails.name,
            userDetails.email    = email,
            userDetails.phone    = userDetails.phone,
            userDetails.gender   = userDetails.gender,
            userDetails.password = hashedPassword,
            userDetails.cpassword= hashedPassword,
            userDetails.question = question,
            userDetails.answer   = answer

            res.status(200).send('Password is updated. Login with new password');
            await userDetails.save();       

        }else
        {
            res.status(404).send('Invalid Email or Secuirty Answer. Try Again');
        }
    } catch (err)
    { res.send(err.message);}
});


module.exports = routes;