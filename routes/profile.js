const express = require('express');
const routes = express.Router();


const middle = require('./../middleware/verifyToken');

routes.get('/profile',middle,(req,res) =>
{
    // Gets the User Id and from that user Id we can get info
    res.send(req.user);
})

module.exports = routes;
