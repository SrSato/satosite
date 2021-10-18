const express = require('express');
const app = express();
const routes = require('./routes/routes');
const path = require('path');

/* Static Routing*/
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

/* Routing */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',routes);

module.exports = app;
