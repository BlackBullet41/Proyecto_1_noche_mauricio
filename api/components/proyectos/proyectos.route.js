'use strict';
const express = require('express');
const router = express.Router();
const proyectos = require('./proyectos.api');


router.route('/registrar_proyectos')
    .post(function(req, res){
    proyectos.registrarProyecto(req, res);
});

router.route('/listar_proyectos')
    .get(function(req, res){
    proyectos.listarProyectos(req, res);
});


module.exports = router;