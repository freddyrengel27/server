const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const routes = require("./routes/routes.js");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan("dev"));

app.use("/hutritBack", routes);

module.exports = app;