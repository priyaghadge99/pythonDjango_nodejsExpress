const express = require("express");
const getposts = require('./route/SampleTest/post.js');

const router = express.Router();

router.get("/",getposts);

exports.router= router; 
