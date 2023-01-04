const passport = require("passport")

//GET login page

exports.get_login = (req,res,next) => {
    res.send("login page")
}

// POST login page
exports.post_login = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  });

//general error page
exports.error_message = (req,res,next) => {
    res.send("Something went wrong")
}