

const express = require('express')
let app = express.Router()

app.get('/', function (req, res)
{
    // Send HomePage
    res.sendFile('index.html', { root: 'views' })
    
    // res.sendFile(__dirname + "/../views/index.html");
    // res.sendFile("views/index.html");
});

module.exports = app