const db =require('../models');

module.exports = {

    //Get all issuesf
    getAll(req, res) {
      db.Issues.findAll()
      .then((db)=> res.json(db))
      .catch((error) => res.status(400).send(error));
      },

     // Create newIssues
     create(req, res) {
        db.Issues.create({
            issueType: req.body.issueType,
            comment: req.body.comment,
            address: req.body.address,
            lat: req.body.lat,
            lon: req.body.lon

            
          })
          .then(issues => res.status(201).send(issues))
          .catch(error => res.status(400).send(error));
      },
       //Find By ID
       retrieve(req, res) {
        db.Issues.findOne(req.params.id)
          .then((issues) => {
            if (!issues) {
              return res.status(404).send({
                message: 'Issue Not Found',
              });
            }
            return res.status(200).send(issues);
          })
          .catch((error) => res.status(400).send(error));
      },
    
      // Update a issues
      update(req, res) {
        return Issues
          .findByPk(req.params.issuesId)
          .then(issues => {
            if (!issues) {
              return res.status(404).send({
                message: 'Issue Not Found',
              });
            }
            return Issues
              .update({
                name: req.body.issueType || issues.issueType,
              })
              .then(() => res.status(200).send(issues))
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },
    
      // Delete
      destroy(req, res) {
        return Issues
          .findByPk(req.params.issuesId)
          .then(issues => {
            if (!issues) {
              return res.status(400).send({
                message: 'Issues Not Found',
              });
            }
            return issues
              .destroy()
              .then(() => res.status(204).send())
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },
    
      //end module exports
    };