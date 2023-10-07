/* ***********************
 * Required Statements
 *************************/
//imports the express module from 
const express = require('express');
const bodyParser = require('body-parser');


//allows us to access the express package and use the functions in it
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.json())



/* ***********************
* Routes
*************************/
//import baseController
// app.get('/', baseController.buildHome);

// Profile route
app.use('/', require("./routes/index.js"))



require('dotenv').config();

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});