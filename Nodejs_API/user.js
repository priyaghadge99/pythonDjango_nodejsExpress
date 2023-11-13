const Datatype = require("sequelize")
const roles = require("./config")
const userModel = {
    id : {
        type: Datatype.INTEGER,
        autoIncrement :true,
        primaryKey: true
    },
    username : {
        type : Datatype.STRING,
        allowNull : false,
        unique:true
    }, 
    email : {
        type : Datatype.STRING,
        allowNull : false,
        unique:true
    },
    password : {
        type : Datatype.STRING,
        allowNull : false,
        unique:true
    } 
    
    

}




module.exports= {
    initialize: (sequelize) =>{
        this.model = sequelize.define("user", userModel);
    },

    createUser: (user)=>{
        return this.model.create(user);
    }
};

