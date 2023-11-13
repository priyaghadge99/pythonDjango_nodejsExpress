const express = require("express");
const morgan = require('morgan');
const dotenv = require('dotenv');
const port = require('./config.js')
var userRoutes = require("./route.js");

const app = express();

// dotenv.config();

// Middleware
// app.use(morgan('dev'));
// app.use(app.userRoutes)
app.use('/user',userRoutes);