var main = require('./routes/main.js');
var todo = require('./routes/todo');
var todoRouter = express.Router();
app.use('/todos', todoRouter);
app.get('/', main.index);
todoRouter.get('/',todo.all);
todoRouter.post('/create', todo.create);
todoRouter.post('/destroy/:id', todo.destroy);
todoRouter.post('/edit/:id', todo.edit);