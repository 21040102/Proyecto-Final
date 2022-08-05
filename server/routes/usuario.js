const { request } = require("express");
const express = require("express");
const router = express.Router();
const usuarioModel = require("../models/usuario.Models");
const Email =require("../libraries/Email")
const parseId = (id)=>{
    return mongoose.Types.ObjectId(id)
}

router.get("/:id", (request, response) => {

        const{id} = req.params
       const body = req.body
       usuariomodel.findOne(
        {id: parseId(req.params.id)},
        body,
        (err, docs)=>{
            res.send({
                items : docs
            })
        }
    )
});

router.get("/", (request, response) => {
   
   
    const registro =  usuariomodel.find().exec()
   .then((registro) => {
       return response.status(200).json({
           msg:"Se consulto la tabla usuario exitosamente",
           status: 200, 
           cont: {
                registro
              
           }
       });

   })
   .catch((err) => {
           return response.status(500).json({
               msg:"Error al consultar los datos de los usuarios.",
               status: 500,
               cont: {
                   error: err
               }
           });
   });

});

router.post("/enviarEmail", (req, res) => {
    const strNombre =req.body.strNombre;
     const strCorreo = req.body.strCorreo;
     const strPrimerApellido = req.body.strPrimerApellido;
     const strSegundoApellido = req.body.strSegundoApellido;
     const nmbEdad = req.body.nmbEdad;
     const RgxEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
     const valido = RgxEmail.test(strCorreo);
     if (valido === false){
          return res.status(500).json({
            msg: "El correo es invalido",
            status: 500,
            cont: {

            }
        });
     }

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
            msg: "No se escribio ningun correo ",
            status: 200,
            cont: {
                error: error.message
            }
        });
    });
});

router.post("/", (request, response) => {
    const usuario = new usuarioModel(request.body);

    console.log(usuario);
    usuario.save()
    .then((UsuarioRegistrado) => {
       return response.status(200).json({
            msg:"Se ha registrado correctamente",
            status: 200,
            cont: {
                usuario: UsuarioRegistrado
            }
        });
        
    })
    .catch((err) => {
        return response.status(400).json({
            msg:"Error al registrar el usuario",
            status: 400,
            cont: {
                error: err
            }
        });
    });
});


router.delete('/', (req, res) => {
    const{id} = req.params
    usuariomodel.deleteOne(
     {id: parseId(req.params.id)},
     (err, docs)=>{
         res.send({
             items : docs
         })
     }
    )
});

router.put('/', (req, res) => {
    const{id} = req.params
    const body = req.body
    usuariomodel.updateOne(
     {id: parseId(req.params.id)},
     body,
     (err, docs)=>{
         res.send({
             items : docs
         })
     }
    )
 });


module.exports = router; 