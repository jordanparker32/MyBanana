var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'aadityakharel',
  database: 'mybanana'
})

connection.connect()

connection.query('SELECT username FROM user', function (err, rows, fields) {
  if (err) throw err
  
  console.log('The solution is: ', rows[0].username)
})

connection.end()

