const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
	novedades: String,
    Recurso_id: {
        type: Schema.Types.ObjectId,
		ref: "Recurso"
    }
});

var Noticia = mongoose.model("Noticia", NoticiaSchema);
module.exports = Noticia