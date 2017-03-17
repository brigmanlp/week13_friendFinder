//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express Configuration
var app = express();
var PORT = process.env.PORT || 8080;

// Using BodyParser NPM makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname, '/app/public')));

//Router: points our server to the app route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener: starts our server
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});