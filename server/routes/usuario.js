const { request } = require("express");
const express = require("express");
const router = express.Router();
const usuarioModel = require("../models/usuario.Models");
const Email =require("../libraries/Email")

router.get("/", (request, response) => {

    response.status(200).json({
        "message":"Estatus dentro de la API GET categorias"
    });
});

router.post("/enviarEmail", (req, res) => {
    const strNombre =req.body.strNombre;
     const strCorreo = req.body.strCorreo;
     const strPrimerApellido = req.body.strPrimerApellido;
     const strSegundoApellido = req.body.strSegundoApellido;
     const nmbEdad = req.body.nmbEdad;

     console.log(req.body);

    Email.sendEmail(strCorreo, {strNombre, strCorreo, strPrimerApellido, strSegundoApellido, nmbEdad})
    .then((response) =>{
        return res.status(200).json({
            msg: "Enviado exitosamente",
            status: 200,
            cont: {
                response
            }
        });
    })
    .catch((error) => {
        return res.status(200).json({
            msg: "Error ",
            status: 200,
            cont: {
                error: error.message
            }
        });
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