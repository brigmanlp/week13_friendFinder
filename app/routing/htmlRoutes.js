//Path:the path package is used to get the correct file path for our html
var path = require("path");

//Routing
module.exports = function(app) {
    //Basic route that sends the use to the homepage
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    //route that sends the user to the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    //If no matching route is found default to home
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};