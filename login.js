let dialogo = document.getElementById("dialogo-registro");
let btnGuardar = document.getElementById("btn-guardar");
let btnCancelar = document.getElementById("btn-cancelar");
let btnCrearCuenta = document.getElementById("btn-crearCuenta");
let txtnombre = document.getElementById("txt-nombre");
let txtusuario = document.getElementById("txt-usuario");
let txtcontrasena = document.getElementById("txt-contrasena");
let usuarioAcceso = document.getElementById("txt-usuario-acceso");
let contrasenaAcceso = document.getElementById("txt-contrasena-acceso");
let btnAcceso = document.getElementById("btn-acceso");

const gestionUsuario = new GestionUsuario();// consulta la clase padre para empezar a guardar en el array

function cancelarCrearCuenta(){
    dialogo.close();//permite cerrar la ventana emergente
}

function limpiarFormularioCreacion(){
    document.getElementById("formulario-registro").reset();
}

//este es el evento de crear cuenta
btnCrearCuenta.addEventListener("click", (e)=>{
    e.preventDefault(); // evita el envío del formulario en caso que el boton no se declare type button
    dialogo.showModal();// permite mostrar una ventana emergente
});

btnGuardar.addEventListener("click",(e)=>{
    e.preventDefault();

    const usuario1 = new Usuario(
        txtnombre.value,
        txtusuario.value,
        txtcontrasena.value);
    
    gestionUsuario.registrarUsuario(usuario1);//llama la funcion registrarUsuario de la clase gestionUsuario
    dialogo.close();
    limpiarFormularioCreacion();
});

//este es el evento de cerrar el dialogo desde el evento llama la funcion
btnCancelar.addEventListener("click", cancelarCrearCuenta);


//evento del boton acceder
btnAcceso.addEventListener("click", (e)=>{
    e.preventDefault();
    let usuario = usuarioAcceso.value;
    let contrasena = contrasenaAcceso.value;

    let usuarioEncontrado = gestionUsuario.verificarUsuario(usuario, contrasena)
    if(usuarioEncontrado){
        alert("Bienvenido");
    }else{
        alert("Usuario o contraseña incorrectos");
    }
    /**
         if(usuarioEncontrado){
                // Guardar el nombre del usuario en sessionStorage para mostrarlo luego si quieres
            sessionStorage.setItem('usuarioLogueado', usuarioEncontrado.nombre);

                // Redirigir a la página de tareas
            window.location.href = "tareas.html";
        }else{
                alert("Usuario o contraseña incorrectos");
            }


         window.location.href	Sí	Cuando está bien regresar
         window.location.replace	No	Cuando no quieres que vuelva   
     */
});
