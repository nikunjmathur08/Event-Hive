const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express()

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//connect to mongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    throw error;
  }
};


//middlewares
app.use("/api/auth",require("./api/routes/authRoutes.js"));
app.use("/api/event",require("./api/routes/eventRoutes.js"));
app.use("/api/club",require("./api/routes/clubRoutes.js"));
app.use("/api/subscribe",require("./api/routes/subRoutes.js"));
app.use("/api/user",require("./api/routes/userRoutes.js"));


app.listen(4000, () =>{
  connect()
  console.log(`Server is running on port 4000`);
});