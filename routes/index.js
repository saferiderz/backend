const usersController = require('../controllers/users');
const issuesController = require('../controllers/issues');
module.exports = (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Uh OH. Looks like you\'ve found our api!',
}));

// users CRUD routes
app.post('/api/users/create', usersController.create);
app.get('/api/users', usersController.getAll);
app.get('/api/users/:id', usersController.retrieve);
app.put('/api/users/:usersId', usersController.update);
app.delete('/api/users/:usersId', usersController.destroy);

//issues CRUD routes
app.post('/api/issues/create', issuesController.create);
app.get('/api/issues', issuesController.getAll);
app.get('/api/issues/:id', issuesController.retrieve);
app.put('/api/issues/:issuesId', issuesController.update);
app.delete('/api/issues/:issuesId', issuesController.destroy);

};
