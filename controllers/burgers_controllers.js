var express = require("express");
var router = express.Router();

// importing the model burger
var burger = require("../models/burger.js");

// creating Routers
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsBurgerObject = {
            burgers: data
        };
        console.log(hbsBurgerObject)
        res.render("index", hbsBurgerObject)
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create("burger_name", "devoured", req.body.burger_name, false, 
    function(result) {
        console.log(result)
        res.json({ id: result.insertId})
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.update({devoured: true}, condition, function(result) {
        console.log(result);
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end()
        }
    });
});

module.exports = router