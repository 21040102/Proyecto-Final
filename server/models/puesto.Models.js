const mongoose = require("mongoose");
const mongooseHidden = require("mongoose-hidden")();

const puestoSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: [true, "Es necesario ingresar tu Nombre"]
    },
    Empresa:{
        type:String,
        required: [true, "Es necesario ingresar el nombre de la Empresa"]
    }
})


puestoSchema.plugin(mongooseHidden, {hidden:{password:true, _id:false}});

module.exports = mongoose.model("puesto", puestoSchema);