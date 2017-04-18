const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const port = 3001;
const morgan = require('morgan');
const db = require('sqlite'); //added sqlite req to doc 
const DB_NAME = './database.sqlite';

//                  middleware
//————————————————————————————————————————————————
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());



//                external routes
//————————————————————————————————————————————————

// login route using passport for authentication
const login = require('./routes/login');
app.use('/login', login);

// api route
const api = require('./routes/api');
app.use('/api', api);


//                   routes
//————————————————————————————————————————————————
  //render page placeholder
  app.get('/', (req, res,) => {
    db.all(`SELECT id, name from Users()
    FROM Users
    INNER JOIN Post_id on user.id = post.user_id
    WHERE user.id = ${req.params.user_id}`)
        .then((data) => {
            res.header('Content-Type', 'application/json');
            res.send({ data });
        })
        .catch((e) => {
            console.log(e);
            res.status(401);
        });
});


// POST method route 
app.post('/api/', function (req, res) {
	db.all('SELECT * FROM Users')
        .then(() => {
            return db.run("INSERT INTO Post (description) values ($id)", req.body)
        })
        .then((Users) => {

            // *SUPER IMPORTANT* always broadcast to update the UI
            SocketInst.broadcast('LOAD_BUFFER');
            // END 

            return db.get('SELECT * FROM Users WHERE user.id = ?', [users.lastID])
        })
        .then((data) => {
            res.header('Content-Type', 'application/json');
            res.send({ user: data });
        })
        .catch((e) => {
            res.status(401);
        });
});


//                 start
//————————————————————————————————————————————————

app.listen(port, ()=>{
  console.log('Server running on port: '  + port);
})


Promise.resolve()
    .then(() => db.open(DB_NAME, { Promise }))
    .then(() => db.migrate({ force: 'last' }))
    .then(() => app.listen(port))
    .then(() => {
        console.log(`Server started on port ${port}`)
     })
    .catch(err => console.error(err.stack))

