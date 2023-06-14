'strict';

console.log("esta enlazado")

//variables
const libros = [
    [1, "Titulo1", "Descripcion 1", "../img/gato.png"],
    [2, "Titulo2", "Descripcion 2", "../img/gato.png"],
    [3, "Titulo3", "Descripcion 3", "../img/gato.png"],
    [4, "Titulo4", "Descripcion 4", "../img/gato.png"],
    [5, "Titulo5", "Descripcion 5", "../img/gato.png"],
    [6, "Titulo6", "Descripcion 6", "../img/gato.png"],
    [7, "Titulo7", "Descripcion 7", "../img/gato.png"],
    [8, "Titulo8", "Descripcion 8", "../img/gato.png"],
];
const campoTexto = document.querySelector('.entrada_texto');
const campoBoton = document.querySelector('.entrada_boton');

/* console.log(campoTexto)
console.log(campoTexto.required) */

campoTexto.addEventListener("blur", function (evento) {
    console.log("Lo siguiente es resultado del evento blur")
    console.log(evento.target.value);
});

campoTexto.addEventListener("input", function (evento) {
    console.log(evento)

})

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
console.log(verificaExisteSubcadena("Rocio", "Roc"));
console.log(verificaExisteSubcadena("Rocio", "io"));
console.log(verificaExisteSubcadena("Rocio", "a"));

function filtralibroporTitulo(titulo, libros) {

}