"use strict";
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const username = "root";
const password = "example";
//routes
const routesRestaurant = require("./routes/restaurants");

const app = express();
const port = 3002;

app.set("view engine", "pug");
app.set("json spaces", 2);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// App middlewares
app.use(morgan("dev"));
app.use("/static", express.static("./static"));

// App routes
// app.use("/", "index.pug");
app.use("/", routesRestaurant);

// App initialisation

// Démarrage de l'application Node.js
mongoose.connect(`mongodb://${username}:${password}@mongo/ny?authSource=admin`);
mongoose.connection
  .once("open", () => {
    console.log("Connexion à Mongo réussie");
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .on("error", (error) => {
    console.warn("Warning", error);
  });
