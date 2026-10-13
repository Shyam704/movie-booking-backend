const express = require("express");

const Movie = require("../models/Movie");

const router = express.Router();


// Get All Movies

router.get("/", async (req, res) => {
  try {

    const movies = await Movie.find();

    res.json(movies);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// Add Movie

router.post("/", async (req, res) => {
  try {

    const movie = await Movie.create(req.body);

    res.status(201).json(movie);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// Delete Movie

router.delete("/:id", async (req, res) => {
  try {

    await Movie.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Movie Deleted"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;