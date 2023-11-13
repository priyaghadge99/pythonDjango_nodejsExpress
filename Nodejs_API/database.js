const mysql = require("mysql")

const connection =  mysql.createConnection({
    user : "root",
    host : "localhost",
    password : 'root',
    database : 'productdb'
})

connection.connect()
console.log('connection successful')
connection.query('select * from product',(err,rows,fields)=>{
    if(err)throw err
    console.log('the solution is : ',fields.at(2))
    console.log('row',rows.at(2))
    console.log('err' ,err)
})

connection.end()
console.log("connection ended")