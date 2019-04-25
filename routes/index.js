const models = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.Issues ]
  }).then(function(users) {
    res.render('index', {
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});

module.exports = router;
