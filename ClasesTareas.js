class Tarea {
    constructor(titulo, descripcion, prioridad, categoria) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.categoria = categoria;
        this.fechaCreacion = new Date().toLocaleString();
    }
}

class GestorTareas {
    constructor() {
        // Estructura: { "Ricardo": [ {tarea1}, {tarea2} ] }
        this.tareasPorUsuario = {};
    }

    agregarTarea(usuario, tarea) {
        if (!this.tareasPorUsuario[usuario]) {
            this.tareasPorUsuario[usuario] = [];
        }
        this.tareasPorUsuario[usuario].push(tarea);
    }

 
}