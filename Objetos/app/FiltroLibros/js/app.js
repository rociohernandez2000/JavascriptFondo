'strict';

console.log("esta enlazado")

//variables
const libros = [
    [1, "La teoria del todo6", "Descripcion 1", "../img/gato.png"],
    [2, "El monje que vendio su ferrari", "Descripcion 2", "../img/gato.png"],
    [3, "Base de datos", "Descripcion 3", "../img/gato.png"],
    [4, "Inteligencia artificial", "Descripcion 4", "../img/gato.png"],
    [5, "Inteligencia artificial", "Descripcion 5", "../img/gato.png"],
    [6, "EL monje que vendio su ferrari", "Descripcion 6", "../img/gato.png"],
    [7, "Inteligencia artificial con datos", "Descripcion 7", "../img/gato.png"],
    [8, "Policia moderna", "Descripcion 8", "../img/gato.png"],
];
const campoTexto = document.querySelector('.entrada_texto');
const campoBoton = document.querySelector('.entrada_boton');

/* console.log(campoTexto)
console.log(campoTexto.required) */

/*
campoTexto.addEventListener("blur", function (evento) {
    console.log("Lo siguiente es resultado del evento blur")
    console.log(evento.target.value);
});
*/

campoTexto.addEventListener("input", function (evento) {
   //  console.log(evento.target.value)
    const cadenaBusqueda = evento.target.value;
    const librosFiltrados = filtraLibrosPorTituloYDescripcion(cadenaBusqueda, libros, 1, 2);

});

campoBoton.addEventListener("click", function (evento) {
    console.log(evento);
})

// mientras el campo de texto este vacio, el boton estara deshabilitado
//DOM Level 1,2,3
/* function imprimir(){
    console.log("Imprimiendo desde el DOM")
} */
function verificaExisteSubcadena(cadena, subcadena) {
    const longitudaBuscar = subcadena.length;
    let bandera = false;
    for (let i = 0; i < cadena.length; i++) {
        const subcadenaTemporal = cadena.substring(i, i + longitudaBuscar)
        //console.log(subcadenaTemporal)
        if (subcadenaTemporal.length == longitudaBuscar) {
            if (subcadenaTemporal == subcadena) {
                bandera = true
                //console.log(subcadenaTemporal)
            }
        } else {
            break;
        }
    }
    return bandera;
}
/*
console.log(verificaExisteSubcadena("Rocio", "Roc"));
console.log(verificaExisteSubcadena("Rocio", "io"));
console.log(verificaExisteSubcadena("Rocio", "a"));
*/
// true si esta, false sino.
function filtraLibroPorTitulo(subcadena, libro, indiceTitulo) {
    const tituloLibro = libro[indiceTitulo];
    // console.log(verificaExisteSubcadena(tituloLibro, subcadena));
    if(verificaExisteSubcadena(tituloLibro, subcadena)){
        // console.log(`La subcadena ${subcadena} esta contenida en el titulo ${tituloLibro}`)
        return true;
    }
    return false;
}


function filtraLibroPorDescripcion(subcadena, libro, indiceDescripcion){
    const descripcionLibro = libro[indiceDescripcion];
    // console.log(verificaExisteSubcadena(descripcionLibro, subcadena));
    if(verificaExisteSubcadena(descripcionLibro, subcadena)){
        // console.log(`La subcadena ${subcadena} esta contenida en el titulo ${descripcionLibro}`)
        return true;
    }
    return false;
}

function filtraLibrosPorTituloYDescripcion(subcadena, libros, indiceTitulo, indiceDescripcion){
    const librosFiltrados = libros.filter( libro => {
        if(filtraLibroPorTitulo(subcadena, libro, indiceTitulo) || filtraLibroPorDescripcion(subcadena, libro, indiceDescripcion)){
            return libro;
        }
    });
    // console.log(librosFiltrados)
    return librosFiltrados;
}

filtraLibrosPorTituloYDescripcion('6', libros, 1, 2);