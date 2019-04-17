const express = require("express");
const router = express.Router();
router.get("/", function (req, res, next) {
    res.json({
        message: "This is the endpoint"
    });
});

router.get('/api/testAPI', function (req, res, next) {
    res.json({
        username: "streetuser1",
        password: 123,

    });
});

module.exports = router;
