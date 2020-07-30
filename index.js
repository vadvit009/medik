require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./src/db");
const session = require("express-session");
const passport = require("passport");
const {
  Product,
  User,
  Review,
  Categories,
  News,
  Orders,
} = require("./src/routes");

// app.use(
//   session({
//     resave: true,
//     saveUninitialized: true,
//     secret: process.env.SESSION_SECRET,
//     cookie: {
//       secure: true,
//       httpOnly: true,
//       expires: new Date(Date.now() + 60 * 60 * 1000),
//     },
//   })
// );
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

db();

app.disable("x-powered-by");
// access cors (temporary)
app.use(cors());

// parse application/x-www-form-urlencoded & application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", Product, User, Review, Categories, News, Orders);

// use static
app.use(express.static(path.resolve(__dirname, "./build")));

app.get("*", (req, res) => {
  res.header('Access-Control-Allow-Credentials', true)
  res.sendFile(path.resolve(__dirname, "./build/index.html"));
});

// handle 404 (user errors)
app.use((req, res, next) => {
  res.status(404).send(`<h2>Oops 404</h2> <h3>We think you are lost!</h3>`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server starting on port ${process.env.PORT}`);
});
