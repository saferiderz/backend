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
  //sign in user
  signin(req,response) {
    db.Users.findOne({
      where: {
        username: req.body.username
      }
    }).then(user => {
      if(user != null) {
        bcrypt
          .checkPass(req.body.password, user.password)
          .then(res => {
            if (res.status === 200) {
              jwt.sign({ user }, "secretkey", (err, token) => {
                return response
                  .status(200)
                  .json({
                    token,
                    userName: user.username,
                    isLoggedIn: res.login
                  })
              });
            } else {
              return response
                .status(500)
                .json({
                  isLoggedIn: false
                });
            }
          })
          .catch(error => {
            respose.json(error);
          });
      } else {
        return response
          .status(404)
          .json({
            isLoggedIn: false
          })
      }
    });
  },
  //create new user
  create(req,response) {
    bcrypt.newPass(req.body.password).then(function(res) {
      if (res.status === 200) {
        db.Users.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
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
                  firstname: newUserData.firstname,
                  lastname: newUserData.lastname,
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
