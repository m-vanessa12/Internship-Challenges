 /******************************************************
 * PLEASE DO NOT EDIT THIS FILE
 * the verification process may break
 * ***************************************************/


var express= require('express');
var cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv'). config()
var app = express();

app.use(cors());
app .use('/public', express.static(process.cwd() + 'public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + 'views/index.html')
});


//List on port set in environment variable or default to 3000
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Node.js listening on port " + listener.address().port);
});


// connect your form with mysql db
const {
  createPool
} =require('mysql');


//create connection
const pool = createPool({
  host:"localhost",
  user:"root",
  password:"",
  database:"bict"
})


//access data in mysql database
pool.query('select * from data', (err, result, fields) => {
  if(err){
      return console.log(err);
  }

  return console.log(result);
})

module.exports=pool;
































