// const http = require('http');

const express = require('express');

// Next Time: Lesson 60 (Adding Middleware - 2:32)

const app = express();

app.use((req, res, next) => {});

app.listen(3000);