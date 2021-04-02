const express = require('express');
const app = express();
const mongooose = require('mongoose');
const dotenv = require('dotenv');
// Importing Routes
const authRoute = require('./routes/auth');




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
app.use('/api/user/',authRoute);



app.listen(5000, () =>{
    console.log("Server up and running at port 5000...Happy Coding !!");
})