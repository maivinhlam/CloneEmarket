const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const userRoute = require("./routers/user.route");
const authRoute = require("./routers/auth.route");
const productRoute = require("./routers/product.route");
const cartRoute = require("./routers/cart.route");

const authMiddleware = require("./middlewares/auth.middleware");
const sessionMiddleware = require("./middlewares/session.middleware");

const port = 3000;
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);

app.use(express.static("public"));

app.use(cookieParser());

// app.get('/', (req, res) => res.send('Hello World!'));
app.get("/", (req, res) => {
  res.render("index", {
    name: "AAA",
  });
});

app.use("/users", authMiddleware.requireAuth, userRoute);
app.use("/auth", authRoute);
app.use("/cart", cartRoute);
app.use("/products", productRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
