'use strict';
function registrarProyecto(){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_proyectos',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
          nNombreProyecto : paInfoProyecto[0],
          nNumCedula : paInfoProyecto[1],
          nTelefono : paInfoProyecto[2],
          nEmail : paInfoProyecto[3],
          nEmpresa : paInfoProyecto[4],
          nFechaCreacion : paInfoProyecto[5],
          nFechaFin : paInfoProyecto[6],
          nUbicacion : paInfoProyecto[7],
          nDescripcion : paInfoProyecto[8]
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}


function obtenerListaProyectos(){
    let listaProyectos = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listar_proyectos',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{    
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
    
    return listaProyectos;
}