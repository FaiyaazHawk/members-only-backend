var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//GET login page
router.get('/login', function(req, res, next) {
  res.send("login page");
});
//POST login page
router.post('/login', function(req,res,next){
  res.send("successful login")
})
//GET all messages
router.get('/messages', function(req,res,next){
  res.send("all messages")
})
// GET message create page
router.get('/createmessage', function (req,res,next) {
  res.send("create message get")
})
//POST message create page
router.post('/createmessage', function (req,res,next){
  res.send("create message post")
})


module.exports = router;
