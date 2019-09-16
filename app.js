const mysql = require('mysql');
const express = require('express');
const port = 4300;
const app = express();

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sa123',
    database: 'crud_db'
});

conn.connect((err) => {
    // if (err) console.log('Error :', err);
    if (err) throw err;


    console.log('Database connected');

});

app.post('/addClass', (req, res) => {

    console.log('request body', req.body)

})

app.listen(port, () => {
    console.log('serve is listning at', port);
})