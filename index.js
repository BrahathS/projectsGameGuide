const express = require("express");
// Create the express application object
const app = express();
const dotenv = require("dotenv");
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const path = require('path');

//creating port for connection
const port = 8000
//app.use(bodyParser.urlencoded({ extended: true }))

dotenv.config({path: './p.env'})

// Define the database connection
const db = mysql.createConnection ({
   host: process.env.DATABASE_HOST,
   user: process.env.DATABASE_USER,
   password: process.env.DATABASE_PWD,
   database: process.env.DATABASE
});

// const db = mysql.createConnection ({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'userlogin'
// });

// Connect to the database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

//Handle bars
app.set('view engine', 'hbs');

//giving access to current file loc
const publicDirectory = path.join(__dirname, './public');
//console.log(__dirname);
app.use(express.static(publicDirectory));

// testing Parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));
// testing the Parse JSON bodies
app.use(express.json());

app.use(cookieParser());

//define route
// Requires the main.js file inside the routes folder passing in the Express app and data as arguments. All the routes will go in this file
app.use('/', require('./routes/main'));
app.use('/aut', require('./routes/aut'));

// Start the web app listening
app.listen(port, () => console.log(`App listening on port ${port}!`))

app.use('/public', express.static("images"));

//app.get("/", (req,res) => {
 //res.send("<h1>Home page</h1>")
//res.render("index");
//});

//app.get("/register", (req,res) => {
//res.send("<h1>Hello Ohh NO</h1>")
 // res.render("register");
//});

//app.get("/login", (req,res) => {
//res.send("<h1> Logon</h1>")
  //res.render("login");
//});

// Requires the main.js file inside the routes folder passing in the Express app and data as arguments.  All the routes will go in this file
//require("./routes/main");

//src: https://github.com/learnable-content/nodejs-mysql