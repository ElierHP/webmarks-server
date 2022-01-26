const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const folderRoute = require("./routes/folder");
const linkRoute = require("./routes/link");
const userRoute = require("./routes/user");
const User = require("./models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local");

require("dotenv").config();
const app = express();

// Config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("trust proxy", 1);
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: process.env.DB_HOST,
      touchAfter: 24 * 3600,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      domain: process.env.BASE_URL,
      _expires: 2629800000,
      secure: true,
      sameSite: "none",
    },
  })
);

app.use(
  cors({
    origin: process.env.BASE_URL,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

// Passport Config
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connect Mongoose
mongoose
  .connect(process.env.DB_HOST || "mongodb://localhost:27017/webmarks-api")
  .catch((error) => console.log(error));

// Routes
app.use("/folders", folderRoute);
app.use("/links", linkRoute);
app.use("/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Connected!");
});
