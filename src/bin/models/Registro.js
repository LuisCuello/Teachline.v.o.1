const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegistroSchema = new Schema({
    nombre1: String,
    nombre2: String,
    apellido1: String,
    apellido2: String,
    identificacion: Number,
    fnacimiento: Number,
    correo: String,
    genero: String,
    usuario: String,
    contrasena: String,

});

var Registro = mongoose.model("Registro", RegistroSchema);
module.exports = Registro