const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');

const categories = require('./routes/categories');
const users = require('./routes/users');

const UserModel =require('./models/user');

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

var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

var store = new MongoDBStore(
  {
    uri: 'mongodb://localhost:27017/connect_mongodb_session_test',
    collection: 'mySessions'
  });

// Catch errors
store.on('error', function(error) {
  assert.ifError(error);
  assert.ok(false);
});

app.use(require('express-session')({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  // Boilerplate options, see:
  // * https://www.npmjs.com/package/express-session#resave
  // * https://www.npmjs.com/package/express-session#saveuninitialized
  resave: true,
  saveUninitialized: true
}));

app.use( (req, res, next) => {
  console.log('Hello ' + JSON.stringify(req.session.id));
  next();
});


app.get('/', (req, res) => {
  UserModel.User.find({sessionToken: req.session.id},
    (err, foundUser) => {
      console.log(foundUser);
      let currentUser;
      if(err) currentUser = null;
      else currentUser = foundUser[0];
      res.render('index', {currentUser: currentUser});
  });
});

app.use('/api/categories', categories);
app.use('/api/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.render('index');
  // next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err.message);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);
