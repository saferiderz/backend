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

// Display a single user by ID
router.get('/users/:id', (request, response) => {
  const id = request.params.id;

  pool.query('SELECT * FROM user WHERE id = ?', id, (error, result) => {
      if (error) throw error;

      response.send(result);
  });
});

 // Add a new user
 router.post('/users', (request, response) => {
  pool.query('INSERT INTO user SET ?', request.body, (error, result) => {
      if (error) throw error;

      response.status(201).send(`User added with ID: ${result.insertId}`);
  });
});

// Update an existing user
router.put('/users/:id', (request, response) => {
  const id = request.params.id;

  pool.query('UPDATE user SET ? WHERE id = ?', [request.body, id], (error, result) => {
      if (error) throw error;

      response.send('User updated successfully.');
  });
});

// Delete a user
router.delete('/users/:id', (request, response) => {
  const id = request.params.id;

  pool.query('DELETE FROM user WHERE id = ?', id, (error, result) => {
      if (error) throw error;
      response.send('User deleted.');
  });
});

module.exports = router;
