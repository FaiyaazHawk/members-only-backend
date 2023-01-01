#! /usr/bin/env node

console.log("Script that populates some users and messages")
// Get arguments passed on command line
var userArgs = process.argv.slice(2);
//modules needed
const async = require('async')
const User = require('../backend/models/user')
const Message = require('../backend/models/message')

//mongoose setup

const mongoose = require('mongoose');
const mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//temp storage

var users = []
var messages = []

//function to create message

function messageCreate(title, timestamp, message, author, cb) {
    messageDetails = {title:title, timestamp:timestamp, message:message, author:author}

    let mess = new Message(messageDetails) 
    mess.save(function (err) {
        if(err) {
            cb(err, null)
            return
        }
        console.log('new message' + mess)
        messages.push(mess)
        cb(null,mess)
    })
}

//function to create user

function userCreate(first_name, last_name, user_name, email, password, member, admin, messages, cb) {
    const userDetail = {first_name:first_name, last_name:last_name, user_name:user_name, email:email, password:password, member:member, admin:admin, messages:messages}

    let user = new User(userDetail)
    user.save(function (err) {
        if(err) {
            cb(err,null)
            return
        }
        console.log('New User' + user)
        users.push(user)
        cb(null, user)
    })

}

//function to generate user to db

function createUsers(cb) {
    async.series([
        function(callback) {
            userCreate('Test', "User1", "Dummy1", "test@user.com", "password", false, false,[], callback)
        }
    ], cb)
}

// function to generate messages to db

function createMessages(cb) {
    async.series([
        function(callback) {
            messageCreate('test title', Date.now(), 'Hello there', users[0], callback)
        },
        function(callback) {
            messageCreate('dummy title', Date.now(), 'lorem ipsum', users[0], callback)
        },
        function(callback) {
            messageCreate('placeholder title', Date.now(), "Dummy message", users[0], callback)
        } 
    ], cb)
}

//function to load all
async.series([
    createUsers,
    createMessages,
],
function(err,results) {
    if(err) {
        console.log('final err: '+ err)
    }
    else {
        console.log('success')
    }
    mongoose.connection.close();
}
)