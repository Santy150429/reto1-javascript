
usuario = {
    nombre: "Maria",
    apellido: "Gomez",
    edad: 25,
    direccion: {
        calle: "Candelaria",
        ciudad: "Bogota",
        pais: "Colombia"
    }
}

function presentarse (){
    console.log("Hola soy" + usuario.nombre);
    console.log("Tengo" + usuario.apellido);
    console.log("Vivo en" + usuario.direccion.calle);
    console.log("En" + usuario.direccion.ciudad);
    console.log("En" + usuario.direccion.pais);

}
presentarse();
console.log();