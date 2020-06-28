var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var AWSResources = require("./routes/resources");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/s3/sign', require('react-s3-uploader/s3router')({
  accessKeyId: 'AKIA3ENAIKTK2KB2V5HQ', // optional you can set set your AWS_ACCESS_KEY_ID by ENV
  secretAccessKey: 'ZPLFj9JDBXf+WQX6Ya9sRGanHur0VHQLW4JviS/E', // optional you can set your AWS_SECRET_ACCESS_KEY by ENV
  bucket: "s3-bucket-v2",
  signatureVersion: 'v2',
  ACL: 'private', // this is default
  uniquePrefix: true // (4.0.2 and above) default is true, setting the attribute to false preserves the original filename in S3
}));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/resources', AWSResources)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
