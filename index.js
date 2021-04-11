const express = require('express');
const app = express();
const mongooose = require('mongoose');
const dotenv = require('dotenv');

// Importing Routes
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const profileRoute = require('./routes/profile');
const passwordRoute = require('./routes/resetPassword');
const editRoute = require('./routes/edit-profile');
const faq = require('./routes/faq');

// Importing Admin Routes
const adminRegisterRoute = require('./adminRoutes/adminRegister');


// Helps to load the Env files
dotenv.config();


// Connecting to Database
mongooose.connect(
    process.env.DB_CONNECT,
    {
         useUnifiedTopology : true,
         useNewUrlParser    : true,
         useCreateIndex     : true,
         useFindAndModify   : false          
    },() => {    console.log('Connected to Database');
});


// Middleware
app.use(express.json());


// Route Middleware 
app.use('/restaurant/user/',registerRoute);             // Register

app.use('/restaurant/user/',loginRoute);                // Login

app.use('/restaurant/user/',profileRoute);              // Profile

app.use('/restaurant/user/',passwordRoute);             // Reset Password

app.use('/restaurant/user/',editRoute);                 // Edit Profile 

app.use('/restaurant/user/',faq);                       // FAQ 


app.use('/restaurant/admin/',adminRegisterRoute) ;      // ADMiN Register


// Server Call
app.listen(5000, () =>{
    console.log("Server up and running at port 5000...Happy Coding !!");
})