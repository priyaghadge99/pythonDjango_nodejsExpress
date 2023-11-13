const express = require("express");

// const routeget = require("router");
const { getposts } = require("./post");

const app = express();

const port = process.env.port || 3000

app.listen(port , ()=> {
    console.log(`Sample node js application running on port` , port)
})


app.use('/',getposts)

