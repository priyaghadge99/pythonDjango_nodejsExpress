const express = require("express");
// const port = require("./config");

const app = express();
const port = process.env.port || 3000
app.listen(port,()=> {
    console.log(`Server is listening : $(port)`,port);
})


exports.getAllUser = (_request,response) => {
  
    if(this.getAllUser==undefined){
        return "undefined"
    }
        userModel.findAllUsers({})
        .then(users=>{
            return response.status(200).json({
                status:true,
                data: users,
            });
        })
        .catch((err)=>{
            return response.status(500).json({
                status: false,
                error : err
            });
        });
    }
    

  

// module.exports =  getAllUser 