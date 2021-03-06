

const express = require('express')
let app = express.Router()

// https://medium.com/@codesprintpro/getting-started-sqlite3-with-nodejs-8ef387ad31c4
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('src/wmss_covid_tracker.db');

// console.log("\"classroom\" Table");
//Retrieving All Rows
db.all("SELECT name FROM classroom", (error, rows) => {
    rows.forEach((row) => {
        console.log(row.name);
    })
});

app.get('/', function (req, res)
{
    // res.send('Classrooms Page');
    res.render('classrooms');
});

module.exports = app