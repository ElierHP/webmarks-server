const express = require("express");
const port = 5000;
const session = require("express-session");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();

// Config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// Connect Mongoose
mongoose.connect(process.env.DB_HOST).catch((error) => handleError(error));

//Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${5000}/`);
});
