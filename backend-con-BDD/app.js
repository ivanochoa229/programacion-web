var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var qs = require('querystring');
require('./src/config/setupModel');

const careersRoutes = require('./src/routes/careersRoutes');
const levelsRoutes = require('./src/routes/levelsRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('query parse', str => {
    return qs.parse(str);
});

app.use('/api/careers', careersRoutes);
app.use('/api/levels', levelsRoutes);

module.exports = app;