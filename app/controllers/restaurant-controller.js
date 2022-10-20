const Restaurant = require("../models/Restaurant");
const mongoose = require("mongoose");

module.exports = {
  readAll(req, res) {
    Restaurant.find()
      .then((restaurants) => {
        res.render("../views/allRestaurants.pug", { restaurants: restaurants });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  findRestaurantByName(req, res) {
    Restaurant.find(
      { name: req.body.name },
      { name: 1, _id: 0, address: 1, cuisine: 1 }
    )
      .then((restaurants) => {
        if (restaurants.length == 0) {
          res
            .status(404)
            .render("../views/findRestaurant.pug", { error: true });
        } else {
          res
            .status(200)
            .render("../views/findRestaurant.pug", { restaurants });
        }
      })
      .catch((err) => {
        res.send(err);
      });
  },
  findRestaurant(req, res) {
    res.render("../views/findRestaurant.pug");
  },
  findRestaurantByStreetAndFoodType(req, res) {
    let boroughList = Restaurant.find()
      .distinct("borough")
      .catch((err) => {
        res.send(err);
      });
    let cuisineList = Restaurant.find()
      .distinct("cuisine")
      .catch((err) => {
        res.send(err);
      });
    Restaurant.find(
      { borough: req.body.borough, cuisine: req.body.cuisine },
      { name: 1, _id: 0, address: 1, cuisine: 1, borough: 1 }
    )
      .then((restaurants) => {
        if (restaurants.length == 0) {
          res
            .status(404)
            .render("../views/findRestaurantByStreetAndFoodType.pug", {
              error: true,
              boroughList: boroughList,
              cuisineList: cuisineList,
            });
        } else {
          res
            .status(200)
            .render("../views/findRestaurantByStreetAndFoodType.pug", {
              restaurants: restaurants,
              boroughList: boroughList,
              cuisineList: cuisineList,
            });
        }
      })
      .catch((err) => {
        res.send(err);
      });
  },
  async loadSelectorForfindRestaurantStreetAndFood(req, res) {
    let boroughList = await Restaurant.find()
      .distinct("borough")
      .catch((err) => {
        res.send(err);
      });
    let cuisineList = await Restaurant.find()
      .distinct("cuisine")
      .catch((err) => {
        res.send(err);
      });
    res.render("../views/findRestaurantByStreetAndFoodType.pug", {
      boroughList: boroughList,
      cuisineList: cuisineList,
    });
  },
  async findBestRestaurantByBorough(req, res) {
    let boroughList = Restaurant.find()
      .distinct("borough")
      .catch((err) => {
        res.send(err);
      });

    Restaurant.aggregate([
      {
        $group: {
          _id: {
            borough: "$borough",
            name: "$name",
            firstGrades: {$first :"$grades.grade"},
            firstScore: {$first :"$grades.score"},
            address:"$address",
            cuisine:"$cuisine",
          },
        },
      },
     {
        $sort : { '_id.firstScore' : -1 , '_id.firstGrades' : -1 } }
        
    ])
      .then((restaurants) => {
        if (restaurants.length === 0) {
          res.status(404).render("../views/bestRestaurantbyBorough.pug", {
            error: true,
            boroughList: boroughList,
          });
        } else {
            res.status(200).render("../views/bestRestaurantbyBorough.pug", {
                boroughList: boroughList,
                restaurants:restaurants
              });
        }
      })
      .catch((err) => {
        res.send(err);
      });
  },
  async loadSelectorGetNumberOfA(req, res) {
    let boroughList = await Restaurant.find()
      .distinct("borough")
      .catch((err) => {
        res.send(err);
      });
    res.render("../views/getNumberOfA.pug", {
      boroughList: boroughList,
    });
  },
  async getNumberOfA(req, res) {
    // let boroughList = Restaurant.find()
    //   .distinct("borough")
    //   .catch((err) => {
    //     res.send(err);
    //   });

    Restaurant.aggregate([
    
      {
        $group: {
            _id: "$grades.grade",
            countNumberOfDocumentsForState: {
               $count: {}
            }
         }
      },
    //   { $match: {
    //     countNumberOfDocumentsForState : "A"
    // } },
    //  {
    //     $sort : { '_id.firstScore' : -1 , '_id.firstGrades' : -1 } }
    ])
      .then((restaurants) => {
        console.log(restaurants)
        if (restaurants.length === 0) {
          res.status(404).render("../views/getNumberOfA.pug", {
            error: true,
            // boroughList: boroughList,
          });
        } else {
            restaurants.map((element)=>{
                console.log(element)
            })
            // res.status(200).render("../views/getNumberOfA.pug", {
            //     // boroughList: boroughList,
            //     restaurants:restaurants
            //   });
        }
      })
      .catch((err) => {
        res.send(err);
      });
  },
  async loadSelectorForBestRestaurantByBorough(req, res) {
    let boroughList = await Restaurant.find()
      .distinct("borough")
      .catch((err) => {
        res.send(err);
      });
    res.render("../views/bestRestaurantbyBorough.pug", {
      boroughList: boroughList,
    });
  },
  homePage(req, res) {
    res.render("../views/index.pug");
  },
};
