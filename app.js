const express = require('express')
const app = express();
const parser = require('body-parser');
const port = 3001;
const morgan = require('morgan');
<<<<<<< HEAD
const db = require('sqlite'); //added sqlite req to doc 
const DB_NAME = './database.sqlite';
=======
const db = require('sqlite')

//                  db integration
//————————————————————————————————————————————————
const DB_NAME = './data/db.sqlite'; // defines db filepath + filename
>>>>>>> e852c2ec9c43149682d7a98cd295250c2a63e2d4

//                  middleware
//————————————————————————————————————————————————

app.use('/', express.static('./public'));
app.use(morgan('dev'));
app.use(parser.json());


//                external routes
//————————————————————————————————————————————————

const api = require('./routes/api'); // going to create some sort of super-admin route to view all data, ya heard?
app.use('/api', api);

const login = require('./routes/login'); // route for login and signup.
app.use('/login', login);

const profile = require('./routes/profile'); // route for login and signup.
app.use('/profile', profile);

//                   routes
//————————————————————————————————————————————————
<<<<<<< HEAD
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

=======

app.get('/', (req,res)=>{
  // if user logged in, render followed users
    // else prompt login

})
>>>>>>> e852c2ec9c43149682d7a98cd295250c2a63e2d4





//                 start
//————————————————————————————————————————————————

<<<<<<< HEAD
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

=======

// V IMPORTANT STUFF
// Sqlite statements return promises so to start things off we inialize the db session and if needed, clear previous data
Promise.resolve()
  .then(() => db.open(DB_NAME, { Promise })) // starts DB Session
  // .then(() => db.migrate({ force : 'last' })) // uncomment to reset db
  .then(app.listen(port)) // start server
  .then(()=> { console.log('Server running on port: '  + port) })
  .catch(err => console.error(err.stack))
>>>>>>> e852c2ec9c43149682d7a98cd295250c2a63e2d4
