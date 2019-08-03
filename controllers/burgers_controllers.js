// importing the model burger
var express = require("express")
var router = express.Router()
var db = require("../models");

// creating Routers

router.get("/", function(req, res) {
    db.Burger.findAll({})
    .then(function(dbBurger) {
        var hbsBurgerObject = {
            burgers: dbBurger
        };
        console.log(hbsBurgerObject)
        res.render("index", hbsBurgerObject)
    });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.burger_name);
    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: false
    }).then(function(dbBurger) {
        res.json({id: dbBurger.insertId})
    })
})

router.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({devoured: true},
         {
             where: {
                 id: req.params.id
             }
         }).then(function(dbBurger) {
            console.log(dbBurger);
        if (dbBurger.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end()
        }
    });
});

module.exports = router