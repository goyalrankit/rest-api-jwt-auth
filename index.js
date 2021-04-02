const express = require('express');
const app = express();

// Importing Routes
const authRoute = require('./routes/auth');

app.use('/api/user/',authRoute);



app.listen(5000, () =>{
    console.log("Server up and running at port 5000...Happy Coding !!");
})