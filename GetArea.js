const express = require('express');
const app = express();
const mysql = require('mysql');


var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio1",
  password: "servicio1.123",
  database: "Mobasign"
});

connection.connect();

app.get('/rest/area', function (req, res) {

   
   connection.query('SELECT * FROM Area', function (error, results, fields)  {
	if (error) throw error;
	return res.send({ error: false, data: results, message: 'Todos list'});


});

});


app.listen(5432, function () {
 console.log('Node app is running on port 5432');

});