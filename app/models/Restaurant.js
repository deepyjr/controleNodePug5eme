const mongoose = require("mongoose");

const schema = mongoose.Schema({
  cuisine: {
    type: String,
  },
  name: {
    type: String,
  },
  address: {
    building: { type: String },
    zipcode: { type: String },
    street: { type: String },
  },
  cuisine: {
    type: String,
  },
  borough: {
    type: String,
  },
  grades: [
    {
      date: { type: Date },
      grade: { type: String },
      score: { type: Number },
    },
  ],
});

module.exports = mongoose.model("restaurants", schema);
