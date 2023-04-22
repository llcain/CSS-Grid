//jshint esversion:6

// Requiring module
const express = require("express");
const bodyParser = require("body-parser");

// Using Node.js 'require()'
const mongoose = require('mongoose');

// Creating express object
const app = express();

var https = require('https');
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

app.get('/', function(req, res)  {

    res.sendFile(__dirname + "/index.html");

    
});

app.post("/", function(req, res) {
    

    const apiKey = "1b0432bacda37d07b28fa1092e287c7f";
    const query = req.body.cityName
    const unit = "metric"
    const url ="https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<h1>The temperature in " + query + " is " + temp + " degress Celcius.</h1>")
            res.write("<img src=" + imageURL + ">")
            res.send()
        })
    })

})

// app.get('/contact', function(req, res) {
//     res.send("<p>Contact me at llcain@gmail.com</p>");
// })


// app.get('/about', function(req, res) {
//     res.send("<p>I am a self-taught Fullstack Developer. I enjoy contributing to and fixing issues on open-source projects. I like to learn new technologies and dabble in various Frontend development skils. I am looking to work on Reactjs projects. I've worked on react projects before. Check out my portfolio by clicking on the link below. What can I help you with? I am really good at what I do. Business Idea: I can fix it!! What do you need? Converting figma design to responsive mobile...styling website with CSS, Sass, or Bootstrap...implementing an API using Express...connecting to a database like mongodb</p>")
// })

// app.get('/hobbies', function(req, res) {
//     res.send("<ul><li>Coding</li></ul><ul><li>Listening to music</li></ul><ul><li>Taking pictures</li></ul>");
// })

// app.get('/projects', function(req, res) {
//     res.send("<ul><li>Portfolio</li></ul><ul><li>My Blog</li></ul><ul><li>To-do List</li></ul>");
// })

// app.get('/news', function(req, res) {
//     res.send("<h2>News</h2><p>THis is the coming news</p>");
// })

// Function to serve all static files
// inside public directory.

app.use('/images', express.static('images'));
app.use(express.static('public'));

app.listen(3000, function() {
    console.log("Server started on port 3000");
});