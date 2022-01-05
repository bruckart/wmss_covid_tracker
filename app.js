


// let http = require('http');
// let router = require('./routes');

var express = require('express');
var app = express();

// Set the view engine to embedded javascript
app.set('view engine', 'ejs');




// app.use(express.static('/public'));

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Parse URL-encoded bodies (as sent by HTML forms)
// app.use(express.urlencoded());
// Used to parse JSON bodies (as sent by API clients)
app.use(express.json()); 

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
 

// // app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', function (req, res) 
// {
//    //  console.log("Serving: " + __dirname + "/" + "index.html");
//     res.sendFile(__dirname + "/public/index.html");
// })

// // // This responds a POST request for the homepage
// // app.post('/', function (req, res)
// // {
// //     console.log("Got a POST request for the homepage");
// //     res.send('Hello POST');
// // })


// app.get('/add_user', function (req, res) 
// {
//     console.log("get add user");
//     res.sendFile( __dirname + "/public/" + "add_user.html" );
// })

// app.post('/add_user', function (req, res) 
// {
//     console.log("post add user");
//     res.sendFile( __dirname + "/public/" + "add_user.html" );
// })


// // app.get('/', function (req, res)
// // {
// //     console.log("Got a GET request for the homepage");
// //     res.send('Hello GET');
// // })


// //  // This responds a DELETE request for the /del_user page.
// // app.delete('/del_user', function (req, res)
// // {
// //     console.log("Got a DELETE request for /del_user");
// //     res.send('Hello DELETE');
// //  })
 
//  app.get('/users', function (req, res)
//  {
//    console.log("Got a GET request for /users");
//    //  res.send('Users');

//    // res.sendFile(__dirname + "/src/users.js");
//  })

//  app.get('/classrooms', function (req, res)
//  {
//     console.log("Got a GET request for /classrooms");
//     res.send('Classrooms');
//  })

//  app.get('add_user', function (req, res) {
//     console.log("questions");

//     // Prepare output in JSON format
//     response = {
//        first_name:req.query.first_name,
//        last_name:req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
//  })


//  // This responds a GET request for abcd, abxcd, ab123cd, and so on
//  app.get('/ab*cd', function(req, res) {   
//     console.log("Got a GET request for /ab*cd");
//     res.send('Page Pattern Match');
//  })





// let http = require('http');
// let url = require('url');


// let express = var app = express();

// // let fs = require('fs');

// http.createServer(function (req, res)
// {
//     var pathname = url.parse(req.url).pathname;
//     console.log("pathname=" + pathname);


//     if (pathname === "/")
//     {
//         res.writeHead(200, {
//             'Content-Type': 'text/plain'
//         });
//         res.end('Home Page\n');
//     }




// }).listen(8000, "127.0.0.1");
// console.log("Server running at http://127.0.0.1:8000");


// let handleRequest = (request, response) => {
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     fs.readFile('public/index.html', null, function (error, data) {
//         if (error) {
//             response.writeHead(404);
//             respone.write('Whoops! File not found!');
//         } else {
//             response.write(data);
//         }
//         response.end();
//     });
// };

// http.createServer(handleRequest).listen(8000);


// console.log("Hello, World.");


// <!DOCTYPE html>
// <html>
// <head>
// <body>
//     The WMSS COVID-19 Tracker
// </body>
// </html>
