const db = require('../models');

module.exports = {
  //get all users
  getAll(req, res) {
    db.Users.findAll()
      .then((db) => res.json(db))
      .catch((error) => res.status(400).send(error));
  },
  //create new user
  create(req, res) {

    db.Users.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(function (db) {
        res.json(db)
      })
      // (user => res.status(201).send(users))
      .catch(error => res.status(400).send(error));


  },
  //Find By ID
  retrieve(req, res) {
    db.Users.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (db) {
        res.json(db)

      })
      .catch((error) => res.status(400).send(error));
  },
  // Update a User
  update(req, res) {
    db.Users.update({
      username: req.body.username,
      password: req.body.password
    },
      {
        where: {
          id: req.params.id
        }
      })
      // return Users
      //   .findByPk(req.params.userId)
      .then(function (db) {
        res.json(db)
      })

      .catch(error => res.status(400).send(error));
  },
  // Delete
  destroy(req, res) {
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (db) {
        res.json(db)
      })

      .catch(error => res.status(400).send(error));
  },
};
