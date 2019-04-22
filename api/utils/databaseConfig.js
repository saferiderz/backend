const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'lg7j30weuqckmw07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'q6f44dcrlbgg1dyb',
    password: 'kwkzra83yi7hkvrc',
    database: 'zz0jcra8qbl5gpvk',
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;