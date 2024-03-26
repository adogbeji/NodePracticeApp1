// const http = require('http');

const express = require('express');

// Next Time: Lesson 61 (How Middleware Works - 0:33)

const app = express();

app.use((req, res, next) => {
    console.log('First Middleware!');
    next();
});

app.use((req, res, next) => {
    console.log('Second Middleware!');
})

app.listen(3000);