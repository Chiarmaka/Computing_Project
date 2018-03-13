import express from 'express';
import mysql from 'mysql'

const db = mysql.createConnection({
    host      : 'localhost',
    user      : 'SandraIkeh',
    password  : 'chichi',
    database  : 'computingproject',
});

db.connect((err) => {
    if (err){
        throw err;
    }
    console.log('MySql connected');
});

connection.connect(function(error) {
    if(!!error) {
        console.log('Error');
    }
    else {
        console.log('Connected');
    }
});

app.get('/', function(req, resp) {
    connection.query("Select * From user", function(error, rows, fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log('Successful');
        }
    });
});
app.listen(3360);
