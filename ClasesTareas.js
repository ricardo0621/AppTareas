class Tarea {
    constructor(titulo, descripcion, prioridad, categoria) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.categoria = categoria;
        this.estado = "pendiente"; // o "completada"
        this.fechaCreacion = new Date().toLocaleString();
    }

    marcarComoCompletada() {
        this.estado = "completada";
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

    obtenerTareas(usuario) {
        return this.tareasPorUsuario[usuario] || [];
    }

    marcarTareaComoCompletada(usuario, indice) {
        if (this.tareasPorUsuario[usuario] && this.tareasPorUsuario[usuario][indice]) {
            this.tareasPorUsuario[usuario][indice].marcarComoCompletada();
        }
    }

    eliminarTarea(usuario, indice) {
        if (this.tareasPorUsuario[usuario]) {
            this.tareasPorUsuario[usuario].splice(indice, 1);
        }
    }
}