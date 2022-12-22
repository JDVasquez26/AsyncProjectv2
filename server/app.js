const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");



app.use(morgan("dev"));

app.use(express.json());

app.use(cors());

// app.use("/api", require("./api/index"));


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});


app.use((req, res) => {
    res.status(err.status || 404).send(err.message || 'Not found')
})
module.exports = app;