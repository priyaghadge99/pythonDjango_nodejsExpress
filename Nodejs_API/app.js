const express = require("express")
const app = express()
app.use(express.json())
// const port = require("./config.js")
// import port from "./config"
const port = process.env.port || 3000

app.listen(port , (err)=>{
    if(err) throw err
    console.log("Server Listening on PORT : ", port)

})


app.get('/status' , (request,response) =>{

    const status = {
        "status" : 'Running'
    }

    response.send(status)
    
}) 
// we’ll add a callback function as the second parameter,
// the request object (which contains details like the HTTP method, headers, and request body) and the response object (which defines the information that we want to send). 
