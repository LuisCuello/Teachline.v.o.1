const express = require("express");
const app = express();
const { Controller } = require("./Controller");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("proyecto base de datos");
});
//mostrar todos los usuarios
app.get("/usuarios", (req, res) => {
  Controller.getUsuarios(res);
});
//agregar usuario
app.post("/usuarios", function(req, res){
  let {usuario} = req.body;
  Controller.setUsuario(usuario, res);
});
//buscar usuario por id
app.get("/usuarios/:id", function(req, res){
    let {id} = req.params;
    Controller.getUsuario(id, res);
});
//actualizar usuarios
app.put("/usuarios/:id", function(req, res){
    let usuari = req.body;
    usuari.id=req.params.id;
    Controller.updateUsuario(usuari, res);
});
//borrar usuario
app.delete("/usuarios/:id", function (req, res) {
  let { id } = req.params;
  Controller.delUsuario(id, res);
});
//mostrar todos los registros
app.get("/registros", (req, res) => {
  Controller.getRegistros(res);
});
//agregar registro
app.post("/registros", function(req, res) {
  let {registro} = req.body;
  Controller.setRegistro(registro, res);
});
//buscar registro por id
app.get("/registros/:id", function(req, res){
    let {id} = req.params;
    Controller.getRegistro(id, res);
});
//actualizar registro
app.put("/registros/:id", function(req, res){
    let registro = req.body;
    registro.id=req.params.id;
    Controller.updateRegistro(registro, res);
});
//borrar registro
app.delete("/registros/:id", function (req, res) {
  let { id } = req.params;
  Controller.delRegistro(id, res);
});
//mostrar todas las reseñas
app.get("/resenas", (req, res) => {
  Controller.getResenas(res);
});
//agregar reseña
app.post("/resenas", function(req, res) {
  let resena = req.body;
  Controller.setResena(resena, res);
});
//buscar reseña por id
app.get("/resenas/:id", function(req, res){
    let {id} = req.params;
    Controller.getResena(id, res);
});
//actualizar resena
app.put("/resenas/:id", function(req, res){
    let resena = req.body;
    resena.id=req.params.id;
    Controller.updateResena(resena, res);
});
//borrar resenas
app.delete("/resenas/:id", function (req, res) {
  let { id } = req.params;
  Controller.delResena(id, res);
});
//mostrar todas las areas
app.get("/areas", (req, res) => {
  Controller.getAreas(res);
});
//agregar areas
app.post("/areas", function(req, res) {
  let {area} = req.body;
  Controller.setArea(area, res);
});
//buscar areas por id
app.get("/areas/:id", function(req, res){
    let {id} = req.params;
    Controller.getArea(id, res);
});
//actualizar areaa
app.put("/areas/:id", function(req, res){
    let area = req.body;
    area.id=req.params.id;
    Controller.updateArea(area, res);
});
//borrar areas
app.delete("/areas/:id", function (req, res) {
  let { id } = req.params;
  Controller.delArea(id, res);
});
//mostrar todos los recursos
app.get("/recursos", (req, res) => {
  Controller.getRecursos(res);
});
//agregar recurso
app.post("/recursos", function(req, res) {
  let {recurso} = req.body;
  Controller.setRecurso(recurso, res);
});
//buscar recursos por id
app.get("/recursos/:id", function(req, res){
    let {id} = req.params;
    Controller.getRecurso(id, res);
});
//actualizar recursos
/*app.put("/recursos/:id", function(req, res){
    let recurso = req.body;
    recurso.id=req.params.id;
    Controller.updateRecurso(recurso, res);
});*/
//borrar recurso
app.delete("/recursos/:id", function (req, res) {
  let { id } = req.params;
  Controller.delRecurso(id, res);
});
//-----------
// Actualizar recurso id area

app.put('/recursos/:id_recurso', (req, res) => {
    let {id_recurso} = req.params;
    let {Area_id} = req.body;
    Controller.updateRecAreas(id_recurso,Area_id,res);
})
// Actualizar area id recurso

app.put('/areas/:id_area', (req, res) => {
    let {id_area} = req.params;
    let {Recurso_id} = req.body;
    Controller.updateArec(id_area,Recurso_id,res);
})
// Actualizar usuario id registro

app.put('/usuarios/:id_usuario', (req, res) => {
    let {id_usuario} = req.params;
    let {Registro_id} = req.body;
    Controller.updateUsuReg(id_usuario,Registro_id,res);
})
// Actualizar reseña id recurso

app.put('/resenas/:id_resena', (req, res) => {
    let {id_resena} = req.params;
    let {Recurso_id} = req.body;
    Controller.updateNotRec(id_resenas,Recurso_id,res);
})
// Actualizar noticias id recurso

app.put('/noticias/:id_noticia', (req, res) => {
    let {id_noticia} = req.params;
    let {Recurso_id} = req.body;
    Controller.updateResReg(id_noticia,Recurso_id,res);
})
// Actualizar res id noticia

app.put('/redes/:id_red', (req, res) => {
    let {id_red} = req.params;
    let {Noticia_id} = req.body;
    Controller.updateRedNot(id_red,Noticia_id,res);
})
//-----------
//mostrar todas las noticias
app.get("/noticias", (req, res) => {
  Controller.getNoticias(res);
});
//agregar noticias
app.post("/noticias", function(req, res) {
  let {noticia} = req.body;
  Controller.setNoticia(noticia, res);
});
//buscar noticias por id
app.get("/noticias/:id", function(req, res){
    let {id} = req.params;
    Controller.getNoticia(id, res);
});
//actualizar noticias
app.put("/noticias/:id", function(req, res){
    let noticia = req.body;
    noticia.id=req.params.id;
    Controller.updateNoticia(noticia, res);
});
//borrar noticias
app.delete("/noticias/:id", function (req, res) {
  let { id } = req.params;
  Controller.delNoticia(id, res);
});
//mostrar todas las redes
app.get("/redes", (req, res) => {
  Controller.getRedes(res);
});
//agregar una red
app.post("/redes", function(req, res) {
  let {red} = req.body;
  Controller.setRed(red, res);
});
//buscar redes por id
app.get("/redes/:id", function(req, res){
    let {id} = req.params;
    Controller.getRed(id, res);
});
//actualizar redes
app.put("/redes/:id", function(req, res){
    let red = req.body;
    red.id=req.params.id;
    Controller.updateRed(red, res);
});
//borrar redes
app.delete("/redes/:id", function (req, res) {
  let { id } = req.params;
  Controller.delRed(id, res);
});
exports.app = app;