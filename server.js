//jshint esversion:6

const express = require("express");

const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

app.get('/', function(req, res)  {
    res.send("<h1>Hello Jon</h1>");
})

app.get('/contact', function(req, res) {
    res.send("<p>Contact me at llcain@gmail.com</p>");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});