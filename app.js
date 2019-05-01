const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
//for server
const http = require('http');
//Set up the express app
const app = express();
//Set port 
// This will be our application entry. We'll setup our server here.
const http = require('http');
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
// Log requests to the console
app.use(logger('dev'));
//Parse incoming data requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const models =require('./models');
//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine');
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
});
//Require our routes into the application
require('./routes')(app);
//default catch-all route that send back a welcome message
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
  }));
module.exports = app;
  