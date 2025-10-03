let form = document.querySelector(".formulario-seccion");//busca un class (debe ser con queryselector y el nombre con un .)
let logincontainer = document.getElementById("login-container");// busca con un id
let tareascontainer = document.getElementById("tareas-container");//busca con un id
let cerrarseccion = document.getElementById("cerrar-sesion");
let bienvenida = document.getElementById("bienvenida");
let formTarea = document.getElementById("form-tarea");



class Usuario {
    constructor(usuario, contrasena) {
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
}

let user_prueba = new Usuario("ricar", "123456");

form.addEventListener("submit",(e)=>{
    e.preventDefault(); // evita recargar la página
    let userInput = document.getElementById("usuario").value;
    let passInput  = document.getElementById("contrasena").value;

    if(userInput === user_prueba.usuario && passInput === user_prueba.contrasena){
        logincontainer.style.display = "none";
        tareascontainer.classList.remove("hidden");

        // Solo actualiza el texto, no reemplaza todo el div
        bienvenida.textContent = `BIENVENIDO ${userInput}`;
        bienvenida.style.textAlign = "center"; // lo centra
       
    }else{
        alert("Usuario o contraseña incorrectos");
    }
});


//evento cerrar seccion
cerrarseccion.addEventListener("click",()=>{
    tareascontainer.classList.add("hidden");
    logincontainer.style.display = "block";  // vuelve a mostrar login
    form.reset(); // limpia los campos de usuario y contraseña
});


/// funcion y evento para crear o agregar tarea
let tareaIdCounter = 0; // contador global


function agregarTarea(taskName) {
    let lista = document.getElementById("lista-tareas");

    // crear <li>
    let tarea = document.createElement("li");
    tareaIdCounter++;
    tarea.id = "tarea-" + tareaIdCounter;

    // contenedor para TASK X + texto
    let contenido = document.createElement("div");
    contenido.classList.add("contenido-tarea");

    // span para el ID
    let idSpan = document.createElement("span");
    idSpan.textContent = `TASK ${tareaIdCounter}: `;
    idSpan.classList.add("tarea-id"); 


    // span para el texto
    let texto = document.createElement("span");
    texto.textContent = taskName;
    texto.classList.add("tarea-texto"); 

    // agregar TASK y texto dentro del contenedor
    contenido.appendChild(idSpan);
    contenido.appendChild(texto);


     // Botón para eliminar en cada li
     let btnEliminar = document.createElement("button");
     btnEliminar.textContent = "🗑️";
     btnEliminar.classList.add("btn-eliminar"); // clase para el CSS
     btnEliminar.addEventListener("click", () => {
         eliminarTarea(tarea.id);
     });

     // boton para completar
     let btnCompletar = document.createElement("button");
     btnCompletar.textContent = "✔️";
     btnCompletar.classList.add("btn-completar");
     btnCompletar.addEventListener("click", () => {
        moverACompletadas(tarea);
     });
 

     // armar <li>
     tarea.appendChild(contenido);
     tarea.appendChild(btnEliminar);
     tarea.appendChild(btnCompletar);
    // agregar la tarea a la lista
    lista.appendChild(tarea);
}

//evento del boton agregar
formTarea.addEventListener("submit", (e)=> {
    e.preventDefault(); // evita recargar
    let tarea = document.getElementById("nueva-tarea").value;
    agregarTarea(tarea);
    formTarea.reset(); // limpia el input
});


// funcion para eliminar tarea
function eliminarTarea(taskId) {
    let tarea = document.getElementById(taskId);
    if (tarea) {
        tarea.remove(); // elimina el <li>
    }
};


function moverACompletadas(tarea) {
    tarea.querySelector(".btn-completar").remove();
    tarea.classList.add("completada"); // aplica estilo
    document.getElementById("lista-completas").appendChild(tarea);
}

