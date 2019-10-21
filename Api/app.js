var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const corspermissions = require('./middlewares/corspermissions')
const { mongoose } = require('./db');

var movieRecordRouter = require('./routes/movieRecord');


var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/moviesRecord', movieRecordRouter);

module.exports = app;
