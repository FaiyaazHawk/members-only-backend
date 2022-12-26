var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//routers
var indexRouter = require('./routes/api');


var app = express();

//connection to mongoDB
//mongoose connection
const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://Fhawk:mongopassword@cluster0.awfm5pd.mongodb.net/memberschat?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', indexRouter);


module.exports = app;
