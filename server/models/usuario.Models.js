const mongoose= require("mongoose");
const parseId= (id) => {return mongoose.Types.ObjectId(id)}

const UsuarioSchema = mongoose.Schema({
    strNombre : {
        type: String,
        required: [true,"Es necesario ingresar el Nombre"]
    },
    strPrimerApellido :{
        type: String,
        required: [true,"Es necesario ingresar los apellidos"]
    },
    strSegundoApellido:{
        type: String,
        required: [true,"Es necesario ingresar el Segundo Apellido"]
    },
    nmbEdad :Number,

    idPuesto:{
        type: mongoose.Types.ObjectId, 
        required:[true, "descripcion"]
    },

    credenciales: 
        {
            strCorreo : {type: String, required : true , unique: false },
            strPassword : {type: String, required : true, unique: false}
        }
    

})

module.exports = mongoose.model("usuario", UsuarioSchema);