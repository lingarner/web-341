//imports the express module from 
const express = require('express'); 

//allows us to access the express package and use the functions in it
const app = express();
 
app.get('/', (req, res) => {
  res.send("Hello");
});
 

const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});