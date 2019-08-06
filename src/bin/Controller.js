const mongoose = require("mongoose");
const Registro = require("./models/Registro");
const Resena = require("./models/Resena");
const Usuario = require("./models/Usuario");
const Area = require("./models/Area");
const Recurso = require("./models/Recurso");
const Noticia = require("./models/Noticia");
const Rede = require("./models/Rede")

class Controller {
    constructor(){
        this.connect();
    }


async connect(){
    try{
        await mongoose.connect(
            "mongodb+srv://Lcuello:U7l794qeVziywVmy@cluster0-dd1dd.mongodb.net/teachline?retryWrites=true&w=majority",
            {useNewUrlParser:true}
        );
        console.log("conectados a la base de datos")
    } catch(e){
        console.error(e)
    }
}

//buscar todos los usuarios
getUsuarios(res){
    Usuario.find({}, (err, usuario)=>{
        if(err) throw err;
        res.send(usuario);
    })
}
//aguegar un usuario
setUsuario(usuario, res){
    Usuario.create(usuario, function(err, newUsuario){
        if(err) throw err;
        res.send({status: 200, nU: newUsuario });
    })
}
//buscar usuario por su id
getUsuario(id, res){
    Usuario.find({_id:id}, (err, usuarios) => {
        if (err) throw err;
        res.send({ allUsuarios:usuarios});
    });
}
//actualizar usuario
updateUsuario(usuari, res){
    let {id, usuario, contrasena} = usuari;
    Usuario.updateOne(
        {_id: id},
        {$set:{usuario: usuario, contrasena: contrasena}}
    )
    .then(rawResponse => {
        res.send({menssage: "Usuario actializado", raw: rawResponse});
    })
    .catch(err =>{
        if (err) throw err;
    });
}
//eliminar usuario
delUsuario (id, res) {
        Usuario.deleteOne(
            {
            _id: id
            }, function (err) {
                if (err) throw err;
                res.send("Usuario eliminado")
            }
        )
    }
//ver todos los registros
getRegistros(res){
    Registro.find({}, (err, registros)=>{
        if(err) throw err;
        res.send(registros);
    })
}
//agregar registro
setRegistro(registro, res){
    Registro.create(registro, function(err, newRegistro){
        if(err) throw err;
        res.send({status: 200, nR:newRegistro});
    })
}
//buscar registro por su id
getRegistro(id, res){
    Registro.find({_id:id}, (err, registro) => {
        if (err) throw err;
        res.send({ allRegistros:registro});
    });
}
//actualizar registro
updateRegistro(registro, res){
    let {id, usuario, contrasena} = registro;
    Registro.updateOne(
        {_id: id},
        {$set:{usuario: usuario, contrasena: contrasena}}
    )
    .then(rawResponse => {
        res.send({menssage: "Registro actualizado", raw: rawResponse});
    })
    .catch(err =>{
        if (err) throw err;
    });
}
//eliminar registro
delRegistro (id, res) {
        Registro.deleteOne(
            {
            _id: id
            }, function (err) {
                if (err) throw err;
                res.send("Registro eliminado")
            }
        )
    }
//ver todas las reseñas
getResenas(res){
    Resena.find({}, (err, resenas)=>{
        if(err) throw err;
        res.send(resenas);
    })
}
//agregar reseña
setResena(resena, res){
    Resena.create(resena, function(err, newResena){
        if(err) throw err;
        res.send({status: 200, nE:newResena});
    })
}
//buscar reseña por su id
getResena(id, res){
    Resena.find({_id:id}, (err, resena) => {
        if (err) throw err;
        res.send({ allResenas:resena});
    });
}
//actualizar reseña
updateResena(resena, res){
    let {id, descripcion} = resena;
    Resena.updateOne(
        {_id: id},
        {$set:{descripcion: descripcion}}
    )
    .then(rawResponse => {
        res.send({menssage: "Reseña actializada", raw: rawResponse});
    })
    .catch(err =>{
        if (err) throw err;
    });
}
//eliminar reseñas
delResena (id, res) {
        Resena.deleteOne(
            {
            _id: id
            }, function (err) {
                if (err) throw err;
                res.send("Reseña eliminada")
            }
        )
    }
//mostrar todas las areas
getAreas(res){
    Area.find({}, (err, areas)=>{
        if(err) throw err;
        res.send(areas);
    })
}
//agregar areas
setArea(area, res){
    Area.create(area, function(err, newArea){
        if(err) throw err;
        res.send({status: 200, nA:newArea});
    })
}
//buscar area por su id
getArea(id, res){
    Area.find({_id:id}, (err, area) => {
        if (err) throw err;
        res.send({ allAreas:area});
    });
}
//actualizar areas
updateArea(area, res){
    let {id, descripcion, nombre} = area;
    Area.updateOne(
        {_id: id},
        {$set:{descripcion: descripcion, nombre: nombre}}
    )
    .then(rawResponse => {
        res.send({menssage: "Area actualizada", raw: rawResponse});
    })
    .catch(err =>{
        if (err) throw err;
    });
}
//eliminar areas
delArea (id, res) {
        Area.deleteOne(
            {
            _id: id
            }, function (err) {
                if (err) throw err;
                res.send("Area eliminada")
            }
        )
    }
//mostrar todos los recursos
getRecursos(res){
    Recurso.find({}, (err, recursos)=>{
        if(err) throw err;
        res.send(recursos);
    })
}
//agregar recurso
setRecurso(recurso, res){
    Recurso.create(recurso, function(err, newRecurso){
        if(err) throw err;
        res.send({status: 200, nC:newRecurso});
    })
}
//buscar recurso por su id
getRecurso(id, res){
    Recurso.find({_id:id}, (err, recurso) => {
        if (err) throw err;
        res.send({ allRecursos:recurso});
    });
}
//actualizar recursos
/*updateRecurso(recurs, res){
    let {id, recurso, descripcion} = recurs;
    Recurso.updateOne(
        {_id: id},
        {$set:{recurso: recurso, descripcion: descripcion}}
    )
    .then(rawResponse => {
        res.send({menssage: "Recurso actualizado", raw: rawResponse});
    })
    .catch(err =>{
        if (err) throw err;
    });*/

//eliminar recurso
delRecurso (id, res) {
        Recurso.deleteOne(
            {
            _id: id
            }, function (err) {
                if (err) throw err;
                res.send("Recurso eliminado")
            }
        )
    }
//-------------
//actualizar recurso id area
updateRecAreas(id_recurso, Area_id, res) {
    Recurso.updateOne({_id: id_recurso}, { $push: {Area_id: Area_id} })
        .then(rawResponse => {
            res.send({message: "Recurso updated", raw: rawResponse})
        })
        .catch(err => {
            if (err) throw err;
        })
}
//actualizar area id recurso
updateArec(id_area, Recurso_id, res) {
    Area.updateOne({_id: id_area}, { $push: {Recurso_id: Recurso_id} })
        .then(rawResponse => {
            res.send({message: "Area updated", raw: rawResponse})
        })
        .catch(err => {
            if (err) throw err;
        })
}
//actualizar usuario id registro
updateUsuReg(id_usuario, Registro_id, res) {
    Usuario.updateOne({_id: id_usuario}, { $push: {Registro_id: Registro_id} })
        .then(rawResponse => {
            res.send({message: "Usuario updated", raw: rawResponse})
        })
        .catch(err => {
            if (err) throw err;
        })
}
//actualizar reseña id recurso
updateResReg(id_resena, Recurso_id, res) {
    Resena.updateOne({_id: id_resena}, { $push: {Recurso_id: Recurso_id} })
        .then(rawResponse => {
            res.send({message: "Reseña updated", raw: rawResponse})
        })
        .catch(err => {
            if (err) throw err;
        })
}
//actualizar noticia id recurso
updateNotRec(id_noticia, Recurso_id, res) {
    Noticia.updateOne({_id: id_noticia}, { $push: {Recurso_id: Recurso_id} })
        .then(rawResponse => {
            res.send({message: "Noticia updated", raw: rawResponse})
        })
        .catch(err => {
            if (err) throw err;
        })
}
//actualizar redes id noticia
updateRedNot(id_red, Noticia_id, res) {
    Rede.updateOne({_id: id_red}, { $push: {Noticia_id: Noticia_id} })
        .then(rawResponse => {
            res.send({message: "Reseña updated", raw: rawResponse})
        })
        .catch(err => {
            if (err) throw err;
        })
}
//-------------
//mostrar todas las noticias
getNoticias(res){
    Noticia.find({}, (err, noticias)=>{
        if(err) throw err;
        res.send(noticias);
    })
}
//agregar noticia
setNoticia(noticia, res){
    Noticia.create(noticia, function(err, newNoticia){
        if(err) throw err;
        res.send({status: 200, nN:newNoticia});
    })
}
//buscar noticia por su id
getNoticia(id, res){
    Noticia.find({_id:id}, (err, noticia) => {
        if (err) throw err;
        res.send({ allNoticias:noticia});
    });
}
//actualizar noticia
updateNoticia(noticia, res){
    let {id, novedades} = noticia;
    Noticia.updateOne(
        {_id: id},
        {$set:{novedades: novedades}}
    )
    .then(rawResponse => {
        res.send({menssage: "Noticia actualizada", raw: rawResponse});
    })
    .catch(err =>{
        if (err) throw err;
    });
}
//eliminar noticia
delNoticia (id, res) {
        Noticia.deleteOne(
            {
            _id: id
            }, function (err) {
                if (err) throw err;
                res.send("Noticia eliminada")
            }
        )
    }
//mostrar todas las redes
getRedes(res){
    Rede.find({}, (err, redes)=>{
        if(err) throw err;
        res.send(redes);
    })
}
//agregar red
setRed(red, res){
    Rede.create(red, function(err, newRed){
        if(err) throw err;
        res.send({status: 200, nD:newRed});
    })
}
//buscar red por su id
getRed(id, res){
    Rede.find({_id:id}, (err, red) => {
        if (err) throw err;
        res.send({ allRedes:red});
    });
}
//actualizar red
updateRed(red, res){
    let {id, nombre, descripcion} = red;
    Rede.updateOne(
        {_id: id},
        {$set:{nombre: nombre, descripcion: descripcion}}
    )
    .then(rawResponse => {
        res.send({menssage: "Red actualizada", raw: rawResponse});
    })
    .catch(err =>{
        if (err) throw err;
    });
}
//eliminar red
delRed (id, res) {
        Rede.deleteOne(
            {
            _id: id
            }, function (err) {
                if (err) throw err;
                res.send("Red eliminada")
            }
        )
    }
}
exports.Controller = new Controller()
