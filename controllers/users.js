const Users = require('../models').Users;

module.exports = {
    //get all users
    getAll(req, res) {
        return Users
        .findAll()
        .then((User)=> res.status(200).send(users))
        .catch((error) => res.status(400).send(error));
    },
    //create new user
    create(req, res) {
        return Users
        .create({
            username: req.body.username,
            password: req.body.password
        })
        .then(user => res.status(201).send(users))
        .catch(error => res.status(400).send(error));

    },
     //Find By ID
     retrieve(req, res) {
        return Users
          .findByPk(req.params.userId)
          .then((users) => {
            if (!users) {
              return res.status(404).send({
                message: 'User Not Found',
              });
            }
            return res.status(200).send(users);
          })
          .catch((error) => res.status(400).send(error));
      },
      // Update a list
      update(req, res) {
        return Users
          .findByPk(req.params.userId)
          .then(users => {
            if (!users) {
              return res.status(404).send({
                message: 'List Not Found',
              });
            }
            return users
              .update({
               username: req.body.username || users.name,
              })
              .then(() => res.status(200).send(users))
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },
        // Delete
        destroy(req, res) {
            return Users
              .findByPk(req.params.userId)
              .then(users => {
                if (!users) {
                  return res.status(400).send({
                    message: 'User Not Found',
                  });
                }
                return Users
                  .destroy()
                  .then(() => res.status(204).send())
                  .catch((error) => res.status(400).send(error));
              })
              .catch((error) => res.status(400).send(error));
          },
};
