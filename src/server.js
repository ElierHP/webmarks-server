const express = require("express");
const port = 5000;
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");
const folderRoute = require("./routes/folder");
const linkRoute = require("./routes/link");

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
app.use(cors());

// Passport Config
app.use(passport.initialize());
app.use(passport.session());

// Connect Mongoose
mongoose.connect(process.env.DB_HOST).catch((error) => handleError(error));

// Routes
app.use("/folders", folderRoute);
app.use("/links", linkRoute);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${5000}/`);
});
