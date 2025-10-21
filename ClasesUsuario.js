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
        // Verificar si ya existe un usuario con el mismo nombre de usuario
        const existe = this.usuarios.some(
            (u) => u.usuario.toLowerCase() === usuario.usuario.toLowerCase()
        );
    
        if (existe) {
            alert("⚠️ El nombre de usuario ya está registrado. Intenta con otro.");
            return false; // no se registra
        }


        this.usuarios.push(usuario);
        alert("✅ Usuario registrado con éxito");
        this.mostrarUsuarios();
        return true; // se registra
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