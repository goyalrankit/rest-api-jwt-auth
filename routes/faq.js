const express = require('express');
const routes = express.Router();
const middle = require('./../middleware/verifyToken');
const User = require('./../model/UserSchema');
const { validationQuestion } = require('./../validations/validate');


    routes.post('/faq',middle,async(req,res)=>{

        try {
            const { _id } = req.user;
        
            if(_id){
                const { question } = req.body;
                const queries = question;

             const results =  await  User.findByIdAndUpdate({_id:_id},{ $addToSet: {faq:{question:queries}}});

            //    const userDetails = await User.findById(_id);

            //    if(userDetails)
            //    {

            //        const { error } = validationQuestion(req.body);
            //        if(error){
            //             return res.status(422).send(error.details[0].message);
            //        }

            //        userDetails.name      =  userDetails.name,
            //        userDetails.email     =  userDetails.email,
            //        userDetails.phone     =  userDetails.phone,
            //        userDetails.gender    =  userDetails.gender,
            //        userDetails.password  =  userDetails.password,
            //        userDetails.cpassword =  userDetails.cpassword,
            //        userDetails.question  =  userDetails.question,
            //        userDetails.answer    =  userDetails.answer,
            //        userDetails.bio       =  userDetails.bio,
            //        userDetails.address   =  userDetails.address,
            //        userDetails.faq       =  userDetails.faq,question       

                //    const results = await userDetails.save();
                   if(results){
                    // console.log(userDetails);
                    return res.status(200).send('Question Posted' + results);

                   }
                   else
                   {                       res.status(400).send(results);                   }

              
            //    }
            }else{
                res.status(400).send('Login Again');
            }    
        }
        catch(err)
        {
            res.status(400).send(err.message);
        }


    });

module.exports = routes;