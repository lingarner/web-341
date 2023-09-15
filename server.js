/* ***********************
 * Required Statements
 *************************/
//imports the express module from 
const express = require('express');

//allows us to access the express package and use the functions in it
const app = express();
const  baseController = require('./controllers/baseController')

/* ***********************
 * Routes
 *************************/
//import baseController
app.get('/', baseController.buildHome);

// Profile route
app.use('/people', require("./routes/index.js"))



const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});