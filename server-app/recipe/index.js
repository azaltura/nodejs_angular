const express = require('express');
const cors = require('cors');
const PORT = 8888;
const app = express();
const mysql = require('mysql');

app.use(cors());
app.use(express.json());


app.get('/recipe', function (req, res) {
    let data= req.body;
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'contact'

    });



    connection.connect(function(err) {
        connection.query('SELECT `id`, `name`, `instr` FROM `recipe`',data, 
        function (err, results, fields) {
                    if (err) { 
                console.log(err.sql)
                throw err;
            }
            console.log(results);
            connection.end();
            res.send(JSON.stringify(results));    
        });
    
    })



})







app.post('/recipe', function (req, res) {
    let data= req.body;
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'contact'

    });



    connection.connect(function(err) {
        connection.query('INSERT INTO `recipe` SET ?',data, 
        function (err, results, fields) {
                    if (err) { 
                console.log(err.sql)
                throw err;
            }
            console.log(results);
            connection.end();
            res.send(JSON.stringify(results));    
        });
    
    })



})


app.listen(PORT, function () {
    console.log('server started at port ' + PORT)
});