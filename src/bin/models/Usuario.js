const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
	usuario: String,
	contrasena: String,
	Registro_id: {
		type: Schema.Types.ObjectId,
		ref: "Registro"
	}

});

var Usuario = mongoose.model("Usuario", UsuarioSchema);
module.exports = Usuario