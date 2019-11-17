const mysql = require('mysql');

module.exports = function(app,connection) {
    app.get('/', function(req, res) {
        connection.query('SELECT * FROM users', function(err, data){
            (err)?res.end(err):res.json({users:data});
        })

    });
};