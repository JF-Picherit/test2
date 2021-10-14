const cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const PostsRepository = require('./repositories/posts.pg');
const UsersRepository = require('./repositories/users.pg');

const postsController = require('./controllers/posts.controller');
const usersController = require('./controllers/users.controller');

const postRoutes = require("./routes/posts.route");
const userRoutes = require('./routes/users.route.js');

const postsRepository = new PostsRepository();
const usersRepository = new UsersRepository();

var app = express();
const port = 5000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/posts', postRoutes(express, postsController(postsRepository)))
app.use('/users', userRoutes(express, usersController(usersRepository)));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send({ error: 'Not found' })
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).send({ error: err })
});

app.listen(port, () => {
  console.log(`Adresse du serveur: http://localhost:${port}`);
});

module.exports = app;
