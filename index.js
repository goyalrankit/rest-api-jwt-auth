const express = require('express');
const app = express();
const mongooose = require('mongoose');
const dotenv = require('dotenv');

// Importing Routes
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const profileRoute = require('./routes/profile');
const passwordRoute = require('./routes/resetPassword');


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

app.use('/api/user/',registerRoute);    // Register

app.use('/api/user/',loginRoute);       // Login

app.use('/api/user/',profileRoute);     // Profile

app.use('/api/user/',passwordRoute);     // Reset Password

// Server Call
app.listen(5000, () =>{
    console.log("Server up and running at port 5000...Happy Coding !!");
})