const mongoose = require("mongoose");
const mongooseHidden = require("mongoose-hidden")();

const empresaSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: [true, "Es necesario ingresar tu Nombre"]
    },
    RazonSocial:{
        type:String,
        required: [true, "Es necesario ingresar tu Razon Socila"]
    } 
})


empresaSchema.plugin(mongooseHidden, {hidden:{password:true, _id:false}});

module.exports = mongoose.model("empresa", empresaSchema);

