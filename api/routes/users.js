var express = require('express');
var router = express.Router();
const pool = require('../utils/databaseConfig');

router.get('/', function(req, res, next) {
  res.send('User endpoint');
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
  //TODO: Implement Getting user logic
  res.send('respond with a resourcesss');
});


router.get('/login', function (req, res, next) {
  res.json({
      username: "streetuser1",
      password: 123,

  });
});

module.exports = router;
