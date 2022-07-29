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
                user:"examplenodemailer2022@gmail.com",
                pass:"ddrbiyxfsxhjrxwp"
            }
        });
    }

    sendEmail(email,data){

        return new Promise((resolve,rejects) =>{
            const template = fs.readFileSync(path.resolve(__dirname, "../assets/template/template.html"), "utf-8");
            const compileTemplate =hogan.compile(template);


            this.transport.sendMail({
                from: '"UTMA" <examplenodemailer2022@gmail.com>',
                to: email,
                subject:"correo electronico de prueba",
                html: compileTemplate.render(),
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
