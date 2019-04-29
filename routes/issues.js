var express = require('express');
var router = express.Router();
const pool = require('../utils/databaseConfig');
// const issues = require('../models/issues');

//TODO: Change to Sequizle and MVC Strucutre

router.get('/', function (req, res, next) {
  res.send('Issues Endpoint');
});



//User Routes
/* GET issues listing. */
router.get('/allIssues', function (req, res, next) {
  pool.query('SELECT * FROM issues', (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

// Display a single issue by type
router.get('/issues/:type', (request, response) => {
  const id = request.params.type;

  pool.query('SELECT * FROM issues WHERE issueType = ?', issueType, (error, result) => {
    if (error) throw error;

    response.send(result);
  });
});
  
// Add a new issues
router.post('/issues', (request, response) => {
  pool.query('INSERT INTO issues SET ?', request.body, (error, result) => {
    if (error) throw error;

    response.status(201).send(`New Issue added with ID: ${result.insertId}`);
  });
});

// Update an existing user
router.put('/issues/:id', (request, response) => {
  const id = request.params.id;

  pool.query('UPDATE issues SET ? WHERE id = ?', [request.body, id], (error, result) => {
    if (error) throw error;

    response.send('Issues updated successfully.');
  });
});

// Delete a user
router.delete('/issues/:id', (request, response) => {
  const id = request.params.id;

  pool.query('DELETE FROM issues WHERE id = ?', id, (error, result) => {
    if (error) throw error;
    response.send('Issue deleted.');
  });
});


module.exports = router;
