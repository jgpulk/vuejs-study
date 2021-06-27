const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', function (req, res) {
  res.send({
    message : "Hai"
  })
})
  
app.post('/register', function (req, res) {
  res.send({
    message : 'Hello '+ req.body.email +' ! Your user was registered succesfully'
  })
})
 
app.listen(3000)