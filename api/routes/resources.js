var express = require("express");
var router = express.Router();

router.get("/dashboard", function(req, res, next) {
    var response = {};
    let classes = ["BIO 2112", "MATH 2332", "CHEM 4003", "CS 3443"];
    response['classes'] = classes;


    res.send(response);
});

module.exports = router;