

//show login page

exports.get_login = (req,res,next) => {
    res.send("login page")
}
//general error page
exports.error_message = (req,res,next) => {
    res.send("Something went wrong")
}