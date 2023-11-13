const express = require("express")
const { model } = require("./user.js");
const usercontroller = require("./usercontroller.js");

const route = express.Router()
// route.use('/',getAllUser);

const app = express();

// dotenv.config();

// Middleware
// app.use(morgan('dev'));
// app.use(app.userRoutes)
app.use('/user',route);
route.get('/', usercontroller.getAllUser);
route.post('/adduser',model.createUser)

module.exports = {route};
