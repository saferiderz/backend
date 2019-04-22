var express = require('express');
var router = express.Router();
const pool = require('../utils/databaseConfig');

router.get('/', function(req, res, next) {
  res.send('User endpoint');
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
  pool.query('SELECT * FROM user', (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

module.exports = router;
