const express = require("express");

const Booking = require("../models/Booking");

const router = express.Router();


// Book Ticket

router.post("/", async (req, res) => {
  try {

    const booking = await Booking.create({
      userId: req.body.userId,
      movieId: req.body.movieId,
      seats: req.body.seats,
      totalAmount: req.body.totalAmount
    });

    res.status(201).json({
      success: true,
      booking
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// Get All Bookings

router.get("/", async (req, res) => {
  try {

    const bookings = await Booking.find()
      .populate("userId")
      .populate("movieId");

    res.json(bookings);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// Get Booking By User

router.get("/user/:id", async (req, res) => {
  try {

    const bookings = await Booking.find({
      userId: req.params.id
    }).populate("movieId");

    res.json(bookings);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;