const express = require('express');
const app = express();
const mongooose = require('mongoose');
const dotenv = require('dotenv');

// Importing Routes
const registerRoute = require('./routes/userRoutes/register');
const loginRoute = require('./routes/userRoutes/login');
const profileRoute = require('./routes/userRoutes/profile');
const passwordRoute = require('./routes/userRoutes/resetPassword');
const editRoute = require('./routes/userRoutes/edit-profile');
const faq = require('./routes/faqRoute/faq');

// Importing Admin Routes
const adminRegisterRoute = require('./routes/adminRoutes/adminRegister');
const adminLoginRoute = require('./routes/adminRoutes/adminLogin');
const adminPasswordRoute = require('./routes/adminRoutes/adminResetPassword');
const adminStatusRoute  = require('./routes/adminRoutes/adminUserStatus');

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

app.use('/restaurant/admin/',adminLoginRoute);          // ADMiN Login

app.use('/restaurant/admin/',adminPasswordRoute);       // ADMiN Reset Password

app.use('/restaurant/admin/',adminStatusRoute);       // ADMiN Status

// Server Call
app.listen(5000, () =>{
    console.log("Server up and running at port 5000...Happy Coding !!");
})