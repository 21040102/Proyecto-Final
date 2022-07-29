const mongoose = require("mongoose");
const mongooseHidden = require("mongoose-hidden")();

const UsuarioSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: [true, "Es necesario ingresar tu Nombre"]
    },
    PrimerApellido:{
        type:String,
        required: [true, "Es necesario ingresar tu Primer Apellido"]
    },
    SegundoApellido:{
        type:String,
        required: [true, "Es necesario ingresar tu Segundo Apellido"]
    },

    correoElectronico:{
        type:String,
        required: [true, "Es necesario ingresar tu correo"]
    },

    password:{
        type:String,
        required: [true, "Es necesario ingresar tu contraseña"]
    },


    edad: Number,    
})


UsuarioSchema.plugin(mongooseHidden, {hidden:{password:true, _id:false}});

module.exports = mongoose.model("usuario", UsuarioSchema);