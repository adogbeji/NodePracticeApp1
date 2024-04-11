// const http = require('http');

const express = require('express');

// Next Time: Lesson 62 (Express.js - Looking Behind the Scenes - 2:06)

const app = express();

app.use((req, res, next) => {
    console.log('First Middleware!');
    next();
});

app.use((req, res, next) => {
    console.log('Second Middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);