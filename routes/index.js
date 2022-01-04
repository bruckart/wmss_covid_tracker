

const express = require('express')
let app = express.Router()

app.get('/', function (req, res)
{
    // res.send('Home Page');
    res.sendFile('index.html', { root: 'views' })
    
    // res.sendFile(__dirname + "/../views/index.html");
    // res.sendFile("views/index.html");
});

module.exports = app