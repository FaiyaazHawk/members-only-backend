var express = require('express');
var router = express.Router();

const message_controller = require("../controllers/messagecontroller");
const user_controller = require("../controllers/usercontroller")
const auth_controller = require("../controllers/auth_controller")

/* GET home page. */
router.get('/', function (req,res,next) {
  res.send("Home page")
});

//GET user list
router.get('/users', user_controller.all_users);

//GET login page
router.get('/login', auth_controller.get_login);
//POST login page
router.post('/login', auth_controller.post_login)

//GET error page
router.get ('/error', auth_controller.error_message);

//GET signup page
router.get('/signup', user_controller.signup_get)
//POST signup page
router.post('/signup', user_controller.signup_post)
//GET all messages
router.get('/messages', message_controller.all_messages)

//GET a message
router.get('/messages/:messageid', message_controller.get_message)

// GET message create page
router.get('/createmessage', message_controller.createMessage_get)
//POST message create page
router.post('/createmessage', message_controller.createMessage_post)


module.exports = router;
