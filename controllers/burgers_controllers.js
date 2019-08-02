// importing the model burger
var Burger = require("../models");

// creating Routers
router.get("/", function(req, res) {
    Burger.all(function(data) {
        var hbsBurgerObject = {
            burgers: data
        };
        console.log(hbsBurgerObject)
        res.render("index", hbsBurgerObject)
    });
});

router.post("/api/burgers", function(req, res) {
    Burger.create("burger_name", "devoured", req.body.burger_name, false, 
    function(result) {
        console.log(result)
        res.json({ id: result.insertId})
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    Burger.update({devoured: true}, condition, function(result) {
        console.log(result);
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end()
        }
    });
});

module.exports = router