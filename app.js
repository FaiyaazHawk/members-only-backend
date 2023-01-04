var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');

//routers
var indexRouter = require('./routes/api');

//models
const User = require('./models/user');

var app = express();

//connection to mongoDB
//mongoose connection
const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://Fhawk:mongopassword@cluster0.awfm5pd.mongodb.net/memberschat?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//passportjs config
passport.use(new LocalStrategy(
    function(email, password, done) {
        User.findOne({email: email}), function (err, user) {
            if(err) {return done(err);}
            if(!user) {return done(null, false);}
            if(!user.verifyPassword(password)) {return done(null,false);}
            return done(null, user);
        }
    }
))

//route
app.use('/', indexRouter);


module.exports = app;
