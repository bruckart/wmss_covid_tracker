

const express = require('express')
let app = express.Router()

// https://medium.com/@codesprintpro/getting-started-sqlite3-with-nodejs-8ef387ad31c4
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('src/wmss_covid_tracker.db');

db.all("SELECT student_id, \
               first_name, \
               last_name, \
               student_email, \
               guardian_email, \
               line_order_position \
               FROM users", (error, rows) => {
    rows.forEach((row) => {
        console.log(row.first_name + " " + row.last_name);
    })
});

// Display All Users in the Database
app.get('/', function (req, res)
{
    // Render the views/users.ejs file.
    res.render('allusers');
});

app.get('/add', function (req, res)
{
    // console.log("adding a user to the database!");
    res.render('adduserform');
    // res.send('Adding User');
});

app.post('/add', function (req, res)
{
    console.log("adding a user to the database!");

    console.log("req=" + req);
    console.log("res=" + res);
    console.log("req body = " + req.body.student_id);
    console.log("req body = " + req.body.first_name);
    console.log("req body = " + req.body.last_name);


    // console.log("post student id=" + post.student_id);

    // console.log("Student ID: " + req.body.student_id);

    // res.render('adduserform');
    // res.send('Adding User');
});

// // Display the user with the specific id (e.g. users/add/1514981)
// app.get('/:id', function (req, res)
// {
//     console.log("users/id");
//     res.send('Users' + req.params.id);
// });

module.exports = app
