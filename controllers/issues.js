const db = require('../models');
const Op = db.Sequelize.Op
const moment = require('moment')

module.exports = {

  //Get all issuesf
  getAll(req, res) {
    db.Issues.findAll({
      where: {
        createdAt: {
          [Op.gte]: moment().subtract(30, 'days').toDate()
        }
      }
    })
      .then((db) => res.json(db))
      .catch((error) => res.status(400).send(error));
  },

  // Create newIssues
  create(req, res) {
    db.Issues.create({
      issueType: req.body.issueType,
      comment: req.body.comment,
      address: req.body.address,
      lat: req.body.lat,
      lon: req.body.lon,
      UserId: req.body.UserId
    })
      .then(issues => res.status(201).send(issues))
      .catch(error => res.status(400).send(error));
  },
  //Find By ID
  retrieve(req, res) {
    db.Issues.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (db) {
        res.json(db)

      })
      .catch((error) => res.status(400).send(error));
  },

  // Update a issues
  update(req, res) {
    db.Issues.update({
      issueType: req.body.issueType,
      comment: req.body.comment,
      address: req.body.address,
      lat: req.body.lat,
      lon: req.body.lon,
      UserId: req.body.UserId
    },
      {
        where: {
          id: req.params.id
        }
      })
      .then(function (db) {
        res.json(db)
      })

      .catch(error => res.status(400).send(error));
  },

  // Delete
  destroy(req, res) {
    db.Issues.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (db) {
        res.json(db)
      })

      .catch(error => res.status(400).send(error));
  },

  //end module exports
};