const express = require('express');
const app = express();
const cors = require("cors");
const db = require('./model/repository');
const router = require('./router/cadastro-vacinaRoutes');

app.use(cors());
app.use(express.json());
db.connect();

app.use("/", router);

module.exports = app