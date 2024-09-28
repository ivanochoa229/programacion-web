var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var careerRouter = require('./routes/careerRoutes');
var levelRouter = require('./routes/levelRoutes');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/career', careerRouter);
app.use('/level', levelRouter);

app.listen(3000, () => {
    console.log(`Server on port 3000`);
});

module.exports = app;
