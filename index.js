const express = require("express");
var cookieParser = require('cookie-parser');

var userRoute = require('./routers/user.route');
var authRoute = require('./routers/auth.route');
var authMiddleware = require('./middlewares/auth.middleware')
var db = require('./db');

const port = 3000;

const app = express();
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cookieParser())

// app.get("/", (req, res) => res.send("Hello World!"));
app.get("/", (req, res) => {
  res.render("index", {
    name: "AAA",
  });
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
