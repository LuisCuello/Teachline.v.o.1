const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResenaSchema = new Schema({
	imagen: String,
	descripcion: String,
	metodologia: String,
	grado: Number,
	comentario: String,
    Recurso_id:{
        type: Schema.Types.ObjectId,
        ref: "Recurso"
    }
});

var Resena = mongoose.model("Resena", ResenaSchema);
module.exports = Resena