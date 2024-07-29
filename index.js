const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const locationRoutes = require("./Routes/locationRoutes");
const { restaurant } = require("./Controllers/restaurantControler");

const port = process.env.PORT || 5000;

// middleware
app.use(
    cors({
      origin: [
        "http://localhost:3000",
      ],
  
      credentials: true,
    })
  );


  app.use(express.json());

  app.use('/api', locationRoutes);
  app.use('/api' , restaurant)

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://khabar-kinbo:1jkzCQUhMWIcmJaT@cluster0.ruyf0su.mongodb.net/Khabar-Kinbo?retryWrites=true&w=majority"
    );
    console.log("Server is Connected to Database");
  } catch (err) {
    console.log("Server is NOT connected to Database", err.message);
  }
};
connectDb();

app.get("/", (req, res) => {
    res.send("resturent");
  });
  
  app.listen(port, () => {
    console.log(`resturent running in ${port}`);
  });