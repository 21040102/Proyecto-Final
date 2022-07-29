const { request } = require("express");
const express = require("express");
const router = express.Router();
const usuarioModel = require("../models/usuario.Models");


router.get("/", (request, response) => {

    response.status(200).json({
        "message":"Estatus dentro de la API GET categorias"
    });
});



router.post("/", (request, response) => {

    response.status(200).json({
        "message":"Estatus dentro de la API POST categorias"
    });
});


router.delete("/", (request, response) => {

    response.status(200).json({
        "message":"Estatus dentro de la API Delete de categorias"
    });
});


router.put("/", (request, response) => {

    response.status(200).json({
        "message":"Estatus dentro de la API Put de categorias"
    });
});


module.exports = router; 