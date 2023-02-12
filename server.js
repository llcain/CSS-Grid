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


app.get('/about', function(req, res) {
    res.send("<p>I am a self-taught Fullstack Developer. I enjoy contributing to and fixing issues on open-source projects. I like to learn new technologies and dabble in various Frontend development skils. I am looking to work on Reactjs projects. I've worked on react projects before. Check out my portfolio by clicking on the link below. What can I help you with? I am really good at what I do. Business Idea: I can fix it!! What do you need? Converting figma design to responsive mobile...styling website with CSS, Sass, or Bootstrap...implementing an API using Express...connecting to a database like mongodb</p>")
})

app.get('/hobbies', function(req, res) {
    res.send("<ul><li>Coding</li></ul><ul><li>Listening to music</li></ul><ul><li>Taking pictures</li></ul>");
})

app.get('/projects', function(req, res) {
    res.send("<ul><li>Portfolio</li></ul><ul><li>My Blog</li></ul><ul><li>To-do List</li></ul>");
})

app.get('/news', function(req, res) {
    res.send("<h2>News</h2><p>THis is the coming news</p>");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});