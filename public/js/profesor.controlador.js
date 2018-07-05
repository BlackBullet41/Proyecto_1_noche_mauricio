'use strict';

ImprimirProyecto();
let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener ('click' , obtenerDatosProyecto);

let inputNombreProyecto = document.querySelector('#txtNombreProyecto')
let inputNumCedula = document.querySelector('#txtNumCedula')
let inputTelefono = document.querySelector('#txtTelefono')
let inputEmail = document.querySelector('#txtEmail')
let inputEmpresa = document.querySelector('#txtEmpresa')
let inputFechaCreacion = document.querySelector('#txtFechaCreacion')
let inputFechaFin = document.querySelector('#txtFechaFin')
let inputUbicacion = document.querySelector('#txtUbicacion')
let inputDescripcion = document.querySelector('#txtDescripcion')

function obtenerDatosProyecto(){
    let infoProyecto = [];
    let = xError = false;

    let nNombreProyecto = inputNombreProyecto.Value;
    let nNumCedula = inputNumCedula.Value;
    let nTelefono = inputTelefono.Value;
    let nEmail = inputEmail.Value;
    let nEmpresa = inputEmpresa.Value;
    let nFechaCreacion = inputFechaCreacion.Value;
    let nFechaFin = inputFechaFin.Value;
    let nUbicacion = inputUbicacion.Value;
    let nDescripcion = inputDescripcion.Value;
    infoProyecto.push(nNombreProyecto,nNumCedula,nTelefono,nEmail,nEmpresa,nFechaCreacion,nFechaFin,nUbicacion,nDescripcion)
    
    bError = validar();
    if(bError == true){
   
        console.log('No se pudo registrar el usuario');
    }else{
        registrarPersona(infoPersona);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El usuario se registró adecuadamente',
            confirmButtonText : 'Entendido'
        });
        imprimirListaPersonas();
        limpiarFormulario();
    }
    
};


