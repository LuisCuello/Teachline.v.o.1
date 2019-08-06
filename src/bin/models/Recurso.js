const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecursoSchema = new Schema({
	recurso: String,
	descripcion: String,
    Area_id:[{
        type: Schema.Types.ObjectId,
        ref: "Area"
    }],
    Usuario_id:{
        type: Schema.Types.ObjectId,
        ref: "Usuario"
    }
});

var Recurso = mongoose.model("Recurso", RecursoSchema);
module.exports = Recurso