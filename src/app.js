const express = require('express');
const app = express();
const cors = require("cors");
const db = require('./model/repository');

app.use(cors());
app.use(express.json());
db.connect();

// app.use("/");

module.exports = app