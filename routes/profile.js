const express = require('express');
const routes = express.Router();


const middle = require('./../middleware/verifyToken');

routes.get('/profile',middle,(req,res) =>
{
        res.status(200).json( {
            "name":"Name",
            "hello":"nsjnjs"
        });
})

module.exports = routes;
