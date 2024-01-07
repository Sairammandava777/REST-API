const express = require("express");
const app = express();

const path = require("path");
const apiRouter = require('./routes/api');
const mongoose = require("mongoose");
require("dotenv").config();

console.log("Hi");

//Connect to Mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));


app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("App is listening on Port 3000");
});