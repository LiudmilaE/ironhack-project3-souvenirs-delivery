const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const passport = require('passport');
const User = require('./models/user');

mongoose.connect('mongodb://localhost/souvenirs-delivery');

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const authRoutes = require('./routes/auth');

app.use('/api', authRoutes);

//TODO protecting the route


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error message only in development mode
  res.status(err.status || 500);
  res.json({
  	error: req.app.get('env') === 'development' ? err : {};
  });
});

module.exports = app;
