const db = require('../models');
const bcrypt = require("../helpers/bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  //get all users
  getAll(req, res) {
    db.Users.findAll({})
      .then((db) => res.json(db))
      .catch((error) => res.status(400).send(error));
  },
  //create new user
  create(req,response) {
    bcrypt.newPass(req.body.password).then(function(res) {
      if (res.status === 200) {
        db.Users.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          username: req.body.username,
          password: res.passwordHash
        }).then(newUserData => {
          if (res.status === 200) {
            jwt.sign({ newUserData }, "secretkey", (err, token) => {
              return response
                .status(200)
                .json({
                  token,
                  firstName: newUserData.firstName,
                  lastName: newUserData.lastName,
                  email: newUserData.email,
                  username: newUserData.username,
                  password: newUserData.password
                })
            });
          } else {
            return response.status(404).json({ message: "Failed at line 44" });
          }
        });
      } else {
        response.json({ error: "Something Went Wrong 48" });
      }
    });
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
