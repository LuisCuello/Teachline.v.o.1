const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
	descripcion: String,
	nombre: String,
    Recurso_id:[{
        type: Schema.Types.ObjectId,
        ref: "Recurso"
    }]
});

var Area = mongoose.model("Area", AreaSchema);
module.exports = Area
