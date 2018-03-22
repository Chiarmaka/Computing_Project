import express from 'express';
import mongoose from 'mongoose';
import mysql from 'mysql';
var app = express();
import bodyParser from'body-parser';
 var server = require('http').createServer(app);
  var io = require('socket.io')(server);

/*
var  express = require('express');
var app = express();
var mysql = require('mysql'); */
//var bodyParser = require('body-parser');
import routes from './src/routes/crmRoutes';
import http from 'http';
import dataFormat from'dateformat';

//create connection
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

//const app = express();
///const PORT = 3360;

//mongoose connection
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/CRMdb',{
    //useMongoClient: true
//});

//body parser 
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());

//routes(app);
/*
var now = new Date();

app.set('view engine', 'ejs');4

app.use('/js', express.static(__dirname + '/node_modules/bootstarp/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstarp/dist/css'));

const siteTitle = "**HELPLINE BLING**";
const baseURL = "http://localhost:3360/"

*/

app.get('/', (req, res, next) =>
  // res.send(`Node and express server is running on port ${PORT}`)
   res.sendFile(__dirname + '/public/index.html')
);

app.use(express.static('public'));

io.on('connection', function(client) {
    console.log('Client connected...');

    client.on('join', function(data) {
        console.log(data);
    });

    client.on('messages', function(data){
        client.emit('thread', data);
        client.broadcast.emit('thread', data);
    });
  });
 server.listen(3360);

/*
app.listen(PORT, () =>
   console.log(`your server is running on port ${PORT}`)
);
*/
 

/*
app.get('/', function (req, res) {
   // let sql = 'SELECT * from user';
   // let query = db.query(sql, (err, results) => {
      //  if(err) throw err;
        //console.log(results);
       db.query("SELECT * from user", function (err, results) {
        res.render('pages/index', {
            siteTitle : siteTitle,
            pageTitle : "Welcome",
            items : results
        });
           

    });
});

app.get('/user/add', function (req, res) {
    
         res.render('pages/add-user.ejs', {
             siteTitle : siteTitle,
             pageTitle : "Add new staff",
             items : ''
         });
            
 
     });

app.post('/user/add', function(req, res) {
    var query = "INSERT INTO `user` (FirstName,LastName) VALUES (";
    query += " '"+req.body.FirstName+"',";
    query += " '"+req.body.LastName+"')";

    db.query(query, function (err, results) {
        res.redirect(baseURL);
    }); 
}); */

