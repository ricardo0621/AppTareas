// Recuperar usuario logueado, evitas que alguien escriba tareas.html en la barra del navegador y entre sin iniciar sesión.
let usuarioLogueado = sessionStorage.getItem("usuarioLogueado");
if (!usuarioLogueado) {
    alert("Debes iniciar sesión primero");
    window.location.replace("login.html");
}

// Crear instancia del gestor de tareas
let gestorTareas = new GestorTareas();

let btnCerrarSesion  = document.getElementById("cerrar-seccion");
let txtTituloTarea = document.getElementById("titulo-tarea");
let txtDescripcionTarea = document.getElementById("descripcion-tarea");
let btnAgregarTarea = document.getElementById("btn-agregarTarea");
let listaTareas = document.getElementById("lista-tareas");


// Función para limpiar los campos
function limpiarCampos() {
    txtTituloTarea.value = "";
    txtDescripcionTarea.value = "";
    document.getElementById("prioridad").value = "";
    document.getElementById("categoria").value = "";
}


function mostrarTareas(usuario) {
    listaTareas.innerHTML = ""; // Limpiar lista
    let tareas = gestorTareas.obtenerTareas(usuario);

    tareas.forEach((tarea, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <strong>${tarea.titulo}</strong> - ${tarea.descripcion} 
            [${tarea.prioridad}, ${tarea.categoria}] 
            <em>(${tarea.estado})</em>
            <button onclick="marcarCompletada(${index})">✅</button>
            <button onclick="eliminarTarea(${index})">❌</button>
        `;
        listaTareas.appendChild(li);
    });
}

//evento cerrar seccion
btnCerrarSesion.addEventListener("click",()=>{
    sessionStorage.removeItem("usuarioLogueado");
    alert("Sesión cerrada correctamente");
    window.location.replace("login.html");
});


//evento agregar tarea
btnAgregarTarea.addEventListener("click",(e)=>{
    e.preventDefault();
    let titulo = txtTituloTarea.value.trim();
    let descripcion = txtDescripcionTarea.value.trim();
    let prioridad = document.getElementById("prioridad").value;
    let categoria = document.getElementById("categoria").value;

    if(titulo === "" || descripcion === "" || prioridad === "" || categoria === ""){
        alert("Por favor, completa todos los campos de la tarea.");
        return;
    }

    // Crear tarea con la clase
    let nuevaTarea = new Tarea(titulo, descripcion, prioridad, categoria);
    // Guardarla en el gestor
    gestorTareas.agregarTarea(usuarioLogueado, nuevaTarea);

    // Mostrar en la lista
    mostrarTareas(usuarioLogueado);
    

    // Limpiar campos
    limpiarCampos();

});



window.marcarCompletada = function (index) {
    gestorTareas.marcarTareaComoCompletada(usuarioLogueado, index);
    mostrarTareas(usuarioLogueado);
};

window.eliminarTarea = function (index) {
    gestorTareas.eliminarTarea(usuarioLogueado, index);
    mostrarTareas(usuarioLogueado);
};