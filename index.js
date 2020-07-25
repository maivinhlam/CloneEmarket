const express = require("express");

var userRoute = require('./routers/user.route');
const port = 3000;

const app = express();
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

var db = require('./db');

// app.get("/", (req, res) => res.send("Hello World!"));
app.get("/", (req, res) => {
  res.render("index", {
    name: "AAA",
  });
});

app.use('/users', userRoute);


app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
