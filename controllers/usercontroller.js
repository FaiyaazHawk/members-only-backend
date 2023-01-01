
const async = require("async");
const {body, validationResult} = require('express-validator')

//models
const User = require("../models/user");




//brings up list of all users
exports.all_users = (req,res,next) => {
    User.find()///figure out how to sort by latest timestamp
        .exec(function (err,users) {
            if (err) {
                return next(err);
            }
            res.json(users)
        })
}
//GET signup page
exports.signup_get = (req,res,next) => {
    res.send("signup page")
}
//POST signup page and user creation
exports.signup_post = (req,res,next) => {

}
