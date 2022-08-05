const express = require("express");
const puestomodels = require("../models/puesto.Models");
const router = express.Router()


router.get("/:id", (request, response) => {

    const{id} = req.params
   const body = req.body
   puestomodel.findOne(
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

    const Puesto= new puestomodels(req.body);
    Puesto.save()
    .then((PuestoRegistrdo) => {
       return response.status(200).json({
            msg:"Se ha registrado correctamente",
            status: 200,
            cont: {
                maestro: PuestoRegistrdo
            }
        });
        
    })
    .catch((err) => {
        return response.status(400).json({
            msg:"Error al registrar el puesto",
            status: 400,
            cont: {
                error: err
            }
        });
    });

});


router.get("/", (request, response) => {
   
   
     const registro =  puestomodels.find().exec()
    .then((registro) => {
        return response.status(200).json({
            msg:"Se consulto la tabla Puestos exitosamente",
            status: 200, 
            cont: {
                 registro
               
            }
        });

    })
    .catch((err) => {
            return response.status(500).json({
                msg:"Error al consultar Puestos.",
                status: 500,
                cont: {
                    error: err
                }
            });
    });

});

router.put('/', (req, res) => {
    let body = req.body;
    puestomodels.findByIdAndUpdate({ _id: "62d58d06a6cbfaa685390187" }, {
            
            $set: req.body
        },{new: true},
        function(error, info) {
            if (error) {
                res.json({
                    resultado: false,
                    msg: 'No se pudo modificar el registro del Puesto',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    msg: 'Se ha modificado el Puesto correctamente',
                    info: info
                })
            }
        }
    )
});


router.delete('/', (req, res) => {
    puestomodels.findByIdAndRemove({ _id: "" },{new: true},
        function(error, info) {
            if (error) {
                res.json({
                    resultado: false,
                    msg: 'No se pudo eliminar el puesto',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    msg: 'Se ha eliminado el puesto correctamente'
                })
            }
        }
    )
});




module.exports = router;