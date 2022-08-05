const express = require("express");
const app = express();
const usuario = require ("./usuario");
const puesto = require ("./puesto");
const empresa = require ("./empresa");

app.use("/usuario", usuario);
app.use("/empresa", empresa);
app.use("/puesto", puesto);

module.exports = app;