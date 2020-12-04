const express = require("express");
const router = express.Router();

// import model (burger.js) to use its database functions
const burger = require("../models/burger.js");

//Routes
// router to get all burgers
router.get("/", (req, res) => {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log("handlebars object:");
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(["burger_name"], [req.body.burger_name], (result) => {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

// code for setting devour to true (devour burger)
router.put("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.updateOne(
    {
      devoured: true,
    },
    condition,
    (result) => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;
