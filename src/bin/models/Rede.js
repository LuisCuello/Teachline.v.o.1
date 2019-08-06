const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RedeSchema = new Schema({
	url: String,
    nombre: String,
	descripcion: String,
    Noticia_id:{
        type: Schema.Types.ObjectId,
        ref: "Noticia"
    }
});

var Rede = mongoose.model("Rede", RedeSchema);
module.exports = Rede