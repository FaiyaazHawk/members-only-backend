var express = require('express');
var router = express.Router();

const message_controller = require("../controllers/messagecontroller");


/* GET home page. */
router.get('/', message_controller.all_messages);
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
//GET a message
router.get('/messages/:messageid', function (req,res,next) {
  res.send('pull single message')
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
