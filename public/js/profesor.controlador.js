'use strict';

imprimirListaProyectos();
let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener ('click' , obtenerDatosProyecto);

let inputNombreProyecto = document.querySelector('#txtNombreProyecto');
let inputNumCedula = document.querySelector('#txtNumCedula');
let inputTelefono = document.querySelector('#txtTelefono');
let inputEmail = document.querySelector('#txtEmail');
let inputEmpresa = document.querySelector('#txtEmpresa');
let inputFechaCreacion = document.querySelector('#txtFechaCreacion');
let inputFechaFin = document.querySelector('#txtFechaFin');
let inputUbicacion = document.querySelector('#txtUbicacion');
let inputDescripcion = document.querySelector('#txtDescripcion');

function obtenerDatosProyecto(){
    let infoProyecto = [];
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
    
        registrarProyecto(infoProyecto);
    
        imprimirListaProyectos();
        limpiarFormulario();
    }

    
    
    function imprimirListaProyectos(){
        let listaProyectos = obtenerListaProyectos();
        let tbody = document.querySelector('#tblProyectos tbody');
        tbody.innerHTML = '';
    
        for(let i = 0; i < listaProyectos.length; i++){
            let row = tbody.insertRow();
            let cNombreProyecto = fila.insertCell();
            let cNumCedula = fila.insertCell();
            let cTelefono = fila.insertCell();
            let cEmail = fila.insertCell();
            let cEmpresa = fila.insertCell();
            let cFechaCreacion = fila.insertCell();
            let cFechaFin = fila.insertCell();
            let cUbicacion = fila.insertCell();
            let cDescripcion = fila.insertCell();
            
    
            cNombreProyecto.innerHTML = listaProyectos[i]['nombre_proyecto'];
            cNumCedula.innerHTML = listaProyectos[i]['numero_cedula'];
            cTelefono.innerHTML = listaProyectos[i]['telefono'];
            cEmail.innerHTML = listaProyectos[i]['email'];
            cEmpresa.innerHTML = listaProyectos[i]['empresa'];
            cFechaCreacion = listaProyectos[i]['fecha_creacion'];
            cFechaFin = listaProyectos[i]['fecha_fin'];
            cUbicacion = listaProyectos[i]['ubicacion'];
            cDescripcion = listaProyectos[i]['descripcion'];
            
        }
    
};


    function limpiarFormulario(){
       inputNombreProyecto.value = '';    
        inputNumCedula.value = '';
        inputTelefono.value ='';
        inputEmail.value = '';
        inputEmpresa.value = '';
        inputFechaCreacion.value ='';
        inputFechaFin.value ='';
        inputUbicacion.value ='';
        inputDescripcion.value ='';
    }




