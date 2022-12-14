const nodemailer =require("nodemailer");
const fs =require('fs');
const path =require('path');
const hogan =require('hogan.js');
const { resolve } = require("path");
const { rejects } = require("assert");
const { response } = require("../routes");
const { model } = require("mongoose");


class Email{

    constructor(){
        this.transport = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user:"utm21040102@utma.edu.mx",
                pass:"vztfgddksmjeonbq"
            }
        });
    }

    sendEmail(email,data){

        return new Promise((resolve,rejects) =>{
            const template = fs.readFileSync(path.resolve(__dirname, "../assets/template/index.html"), "utf-8");
            const compileTemplate =hogan.compile(template);

            console.log(data);


            this.transport.sendMail({
                from: '"Proyecto" <utm21040102@utma.edu.mx>',
                to: email,
                subject:"correo electronico personal",
                html: compileTemplate.render({strNombre: data.strNombre, strPrimerApellido: data.strPrimerApellido, strSegundoApellido: data.strSegundoApellido, nmbEdad: data.nmbEdad}),
            }).then((response) => {
                resolve(response)
            })
            .catch((error) =>{
                rejects(error)
            });
        });
    }
}


module.exports = new Email();