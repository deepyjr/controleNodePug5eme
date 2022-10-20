Restaurant = require("../controllers/restaurant-controller");
const express = require("express");
var routerRestaurant = express.Router();

routerRestaurant.get("/", Restaurant.homePage);
routerRestaurant.get("/restaurant", Restaurant.findRestaurant);
routerRestaurant.post("/restaurant", Restaurant.findRestaurantByName);

routerRestaurant.get(
  "/restaurant-by-road",
  Restaurant.loadSelectorForfindRestaurantStreetAndFood
);
routerRestaurant.post(
  "/restaurant-by-road",
  Restaurant.findRestaurantByStreetAndFoodType
);
routerRestaurant.get(
  "/best-restaurant-by-borough",
  Restaurant.loadSelectorForBestRestaurantByBorough
);
routerRestaurant.post(
  "/best-restaurant-by-borough",
  Restaurant.findBestRestaurantByBorough
);
routerRestaurant.get(
    "/number-of-A",
    Restaurant.loadSelectorGetNumberOfA
  );
routerRestaurant.post(
    "/number-of-A",
    Restaurant.getNumberOfA
  );
// app.delete('/cart', CartController.deleteAll);

module.exports = routerRestaurant;
