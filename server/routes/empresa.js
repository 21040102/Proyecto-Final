const express = require("express");
const empresaModels = require("../models/empresa.Models");
const router = express.Router();

router.get("/:id", (request, response) => {

    const{id} = req.params
   const body = req.body
   empresamodel.findOne(
    {id: parseId(req.params.id)},
    body,
    (err, docs)=>{
        res.send({
            items : docs
        })
    }
)
});

router.post('/', (req, response) => {

    const empresa = new empresaModels(req.body);
    empresa.save()
    .then((EmpresaRegistrda) => {
       return response.status(200).json({
            msg:"Se ha registrado correctamente",
            status: 200,
            cont: {
                empresa: EmpresaRegistrda
            }
        });
        
    })
    .catch((err) => {
        return response.status(400).json({
            msg:"Error al registrar la empresa",
            status: 400,
            cont: {
                error: err
            }
        });
    });

});


router.get("/", (request, response) => {
   
   
     const registro =  empresaModels.find().exec()
    .then((registro) => {
        return response.status(200).json({
            msg:"Se consulto la tabla Empresa exitosamente",
            status: 200, 
            cont: {
                 registro
               
            }
        });

    })
    .catch((err) => {
            return response.status(500).json({
                msg:"Error al consultar los datos de la empresa",
                status: 500,
                cont: {
                    error: err
                }
            });
    });

});

router.put('/', (req, res) => {
    let body = req.body;
    empresaModels.findByIdAndUpdate({ _id: "62d58d06a6cbfaa685390187" }, {
            //ID DE PRUEBA CONECTADO A BD "62d58d06a6cbfaa685390187"
            $set: req.body
        },{new: true},
        function(error, info) {
            if (error) {
                res.json({
                    resultado: false,
                    msg: 'No se pudo modificar el registro de la empresa',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    msg: 'Se ha modificado el nombre de la empresa correctamente',
                    info: info
                })
            }
        }
    )
});


router.delete('/', (req, res) => {
    empresaModels.findByIdAndRemove({ _id: "" },{new: true},
        function(error, info) {
            if (error) {
                res.json({
                    resultado: false,
                    msg: 'No se pudo eliminar la empresa',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    msg: 'Se ha eliminado la empresa correctamente'
                })
            }
        }
    )
});




module.exports = router;