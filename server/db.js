//connect to mysql database
const mysql = require('mysql');

//define the connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'crud'
});

//connect and log success or failure    
connection.connect((err) => {
if(err){
    console.error('Error connecting to crud database', err);
    return;
}
console.log('Connecting to crud database');
});

module.exports = connection;