// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');

// For Next Time: Begin styling pages (Lesson 74)

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {  // 'Catch-all' middleware for unhandled routes
    // res.status(404).send('<h1>Page Not Found!</h1>');
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);