const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    genre: {
      type: String,
      required: true
    },

    language: {
      type: String,
      required: true
    },

    duration: {
      type: String,
      required: true
    },

    rating: {
      type: Number,
      default: 0
    },

    price: {
      type: Number,
      required: true
    },

    poster: {
      type: String,
      required: true
    },

    showTime: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Movie", movieSchema);