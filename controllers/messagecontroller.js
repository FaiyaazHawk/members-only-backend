const Message = require("../models/message")
const async = require("async")

//get all messages and display

exports.all_messages = (req,res,next) => {
    Message.find()///figure out how to sort by latest timestamp
        .exec(function (err,messages) {
            if (err) {
                return next(err);
            }
            res.json(messages)
            console.log('messages sent')
        })
}