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
        })
}
//get a single message

exports.get_message = (req,res,next) => {
    Message.findById(req.params.id)
        .exec(function (err,message) {
            if (err) {
                return next(err)
            }
            res.json(message)
        })
}