var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json());


var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'serasa_test_db'
});

app.get('/', function (req, res) {
    res.send('index.html')
  res.send('Buscando pessoas')
})
/*
app.post('/pessoa', function (req, res){
    connection.connect()

    var query = connection.query('INSERT INTO estoque SET ?', req.body, function (error, results, fields) {
        if (error) throw error;
        console.log("salvo com sucesso!!")
    })

    res.send(`salvo com sucesso!`)
    connection.end()
})
 */
app.listen(3000)
console.log("serviço rodando na porta 3000")

