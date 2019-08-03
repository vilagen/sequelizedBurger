var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controllers")

var PORT = process.env.PORT || 8080;

var app = express();
var db = require("./models")

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
    })
})