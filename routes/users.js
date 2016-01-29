
var Firebase = require('firebase');
var express = require('express');
var router = express.Router();

var ref = new Firebase('https://user-auth-ch.firebaseio.com/');


/*
 GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

/* GET users listing. */
router.post('/register', function(req, res, next) {
	console.log('this is the email and password', req.body);
  ref.createUser(req.body, function(err, userData){
  	console.log('this is user data', userData);
    if(err) return res.status(400).send(err);   	
	});
});

/* GET users listing. */
router.post('/login', function(req, res, next) {
	console.log('in the login route');
  res.send('hit the login route');
});

module.exports = router;
