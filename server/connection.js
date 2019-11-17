var express = require('express');
var mysql = require('mysql')

const PORT = process.env.PORT || 3000;
const app = express();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'aadityakharel',
  database: 'mybanana'
})

connection.connect(function(err){
  (err)? console.log(err): console.log(connection);
});

require('html-routes.js')(app,connection)
connection.query('SELECT username FROM user', function (err, rows, fields) {
  if (err) throw err
  
  console.log('The solution is: ', rows[0].username)
});

connection.end()

