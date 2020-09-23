var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createRoomRouter = require('./routes/createRoom');
var BookARoomRouter= require('./routes/BookARoom');
var ListRoomRouter= require('./routes/ListRooms');
var ListallCustomerRouter= require('./routes/ListallCustomers');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/createRoom',createRoomRouter);
app.use("/BookARoom", BookARoomRouter);
app.use("/ListRooms", ListRoomRouter);
app.use("/ListallCustomers", ListallCustomerRouter);
module.exports = app;
