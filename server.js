const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const movieRoutes = require("./routes/movie");
const bookingRoutes = require("./routes/booking");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Movie Booking API Running");
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});