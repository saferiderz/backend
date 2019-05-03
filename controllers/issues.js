const db =require('../models');

module.exports = {

    //Get all issues
    getAll(req, res) {
        db.Issues.findAll()
          .then((issues) => res.json(db))
          .catch((error) => res.status(400).send(error));
      },

     // Create newIssues
     create(req, res) {
        return Issues
          .create({
            issueType: req.body.issueType,
            
          })
          .then(issues => res.status(201).send(issues))
          .catch(error => res.status(400).send(error));
      },
       //Find By ID
       retrieve(req, res) {
        return Issues
          .findByPk(req.params.IssuesId)
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