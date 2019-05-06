const usersController = require('../controllers/users');
const issuesController = require('../controllers/issues');
module.exports = (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Uh OH. Looks like you\'ve found our api!',
}));

// users CRUD routes
app.post('/api/users/signin', usersController.signin);
app.post('/api/users/create', usersController.create);
app.get('/api/users', usersController.getAll);
app.get('/api/users/:id', usersController.retrieve);
app.put('/api/users/:id', usersController.update);
app.delete('/api/users/:id', usersController.destroy);

//issues CRUD routes
app.post('/api/issues/create', issuesController.create);
app.get('/api/issues', issuesController.getAll);
app.get('/api/issues/:id', issuesController.retrieve);
app.put('/api/issues/:id', issuesController.update);
app.delete('/api/issues/:id', issuesController.destroy);

};
