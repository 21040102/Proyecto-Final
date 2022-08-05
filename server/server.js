const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("colors");
require("./config/config");
const app = express();
const routes  = require("./routes/index");


app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());
 

app.use("/api",routes);




mongoose.connect(process.env.URLDB,{})
.then(() => {
    console.log("[MONGOOB]".green + "DATABASE CONECTION SUCCESSFULLY");
})
.catch((err) => {
    console.log("[MONGOOB]".red + "DATABASE CONECTION FAILED" + err);
});


app.listen(process.env.PORT,()=> {
    console.log("Se esta escuchando en el puerto ".magenta +  process.env.PORT.green)
});