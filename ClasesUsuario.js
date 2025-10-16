class Usuario{
    constructor(nombre,usuario,contrasena){
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
}

class GestionUsuario{
    constructor(){
        this.usuarios = [];
    }

    registrarUsuario(usuario){
        this.usuarios.push(usuario);
        alert("Usuario registrado con exito");
        this.mostrarUsuarios();
    }

    mostrarUsuarios(){
        console.log(this.usuarios);
    }

    
    verificarUsuario(usuario, contrasena){

        return this.usuarios.find((busca)=>
            busca.usuario === usuario && busca.contrasena === contrasena);
        }
            /**
             * esto es lo que hace verificar usuario
             "rc0621" === "rc0621" && "1234" === "1234"
            Si no encuentra coincidencia, devuelve undefined.
            */
}