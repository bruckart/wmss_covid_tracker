var express = require('express');
var app = express();

// Set the view engine to embedded javascript
app.set('view engine', 'ejs');

//where the classroom grid and line order projects are
app.use(express.static('public'));

var bodyParser = require('body-parser')
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json())

// Used to parse JSON bodies (as sent by API clients)
// app.use(express.json()); 

const about = require('./routes/about')
app.use('/about', about)

const users = require('./routes/users')
app.use('/users', users)

const classrooms = require('./routes/classrooms')
app.use('/classrooms', classrooms)

const classroomgrid = require('./routes/classroomgrid')
app.use('/classroomgrid', classroomgrid)

const lineorder = require('./routes/lineorder')
app.use('/lineorder', lineorder)

const index = require('./routes/index')
app.use('/', index)


var server = app.listen(8000, function () 
{
    var host = server.address().address;
    var port = server.address().port;

    // console.log("Example app listening at http://%s:%s", host, port)
    console.log("app listening at http://localhost:8000")
 });
 

