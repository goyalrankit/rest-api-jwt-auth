const express = require('express');
const routes = express.Router();

// Register User
routes.post('/register',(req,res)=>{
    res.send('Register');
})

// Login User

routes.post('/login',(req,res) => {
    res.send('Login');
})


module.exports = routes;