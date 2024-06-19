const cookieParser = require('cookie-parser');
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = express()
const cors = require('cors');
app.use(cors());
const connect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.use(cookieParser());
app.use(express.json());
//middlewares
app.use("/api/auth",require("./api/routes/authRoutes.js"));
app.use("/api/event",require("./api/routes/eventRoutes.js"));

app.listen(4000, () =>{
  connect()
  console.log(`Server is running on port 4000`);
});