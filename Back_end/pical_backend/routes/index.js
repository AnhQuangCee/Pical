var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')

//Create data from Pical database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pical',
  password: '15069341Anhquang@',
  port: 5432,
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET DATA. */
router.get('/getData', function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  pool.query('SELECT * FROM pical_images', (err, response) => {
      if(err){
        console.log(err);
      }
      else{
        res.send(response.rows);
      }
  })
});

/* GET DATA. */
router.get('/getDataLogin', function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  pool.query('SELECT * FROM pical_account', (err, response) => {
      if(err){
        console.log(err);
      }
      else{
        res.send(response.rows);
      }
  })
});


// ADD_USER
router.get('/addUser', function(req, res, next) { 
  res.send('hello');
});

router.post('/addUser', function(req, res, next) { 

  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password; 
  // console.log(req.body);

  pool.query("INSERT INTO pical_account (username,email,password) values ($1,$2,$3)",[username,email,password],(err,response)=>{
    if(err) {
      res.send(err);
      res.send(0);
    }
    else {
      res.sendStatus(200)
    }
  })
});
module.exports = router;
