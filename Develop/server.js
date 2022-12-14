// Setting up express and other tools
const express = require("express");
const db = require("./config");

// Setting up routers
const moviesRoute = require("./routes/movies.js")
const reviewsRoute = require("./routes/reviews.js")

// Setting up middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Calling routes
app.use("/api", moviesRoute);
app.use("/api", reviewsRoute);

// Listening to port
app.listen(3001, () => console.log("Listening on http://localhost:3001"));