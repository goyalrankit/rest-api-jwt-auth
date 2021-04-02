const express = require('express');
const app = express();
const mongooose = require('mongoose');
const dotenv = require('dotenv');

// Importing Routes
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const profileRoute = require('./routes/profile');


// Helps to load the Env files
dotenv.config();


// Connecting to Database
mongooose.connect(
    process.env.DB_CONNECT,
    {
         useUnifiedTopology: true,
         useNewUrlParser: true,          
    },() => {    console.log('Connected to Database');
});


// Middleware
app.use(express.json());


// Route Middleware 

// Register
app.use('/api/user/',registerRoute);
// Login
app.use('/api/user/',loginRoute);
// Profile
app.use('/api/user/',profileRoute);


// Server Call
app.listen(5000, () =>{
    console.log("Server up and running at port 5000...Happy Coding !!");
})