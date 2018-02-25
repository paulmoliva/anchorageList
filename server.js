const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');

const categories = require('./routes/categories');
const users = require('./routes/users');

const app = express();
app.use(bodyParser.json());
app.use(logger('dev'));

// Connect to Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/anchorageList');
var db = mongoose.connection;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/api/categories', categories);
app.use('/api/users', users);

app.listen(3000);
