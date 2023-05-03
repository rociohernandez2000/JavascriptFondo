console.log("Enlazado");

/*
const edades = [1,2,3,4,5,3,1,8];

console.table(edades);

const personas = [
    ["Fernando", "23"],
    ["maucicio", "26"]
];

console.table(personas);
*/

const edades = [23,14,64,1,2,3,4,77];
console.log("--forEach--");
edades.forEach( edad =>{
    console.log(edad);
});


console.log("--map--");
edades.map( edad => {
    edad = edad + 1;
    console.log(edad);
});
console.table(edades)


console.log("--filter--");
const arregloFilter = edades.filter( edad => {
    return edad > 5;
});
console.log(arregloFilter);

const nombreAInvertir = "Berenice";
console.log("--- funcion que invierte cadena --- ")
function invierteCadena(nombre){
    let caracteres = "";
    for(let i = nombre.length - 1; i > -1; i--){
        caracteres = caracteres + nombre[i];
    }
    console.log(caracteres);
}

invierteCadena(nombreAInvertir);


console.log("-- substring --")
function invierteCadena2(nombre){
    let nombreInvertido = "";
    for (let i = nombre.length; i > 0; i--) {
        nombreInvertido = nombreInvertido + nombre.substring(i, i-1);
    }
    console.log(nombreInvertido)
}

invierteCadena2("Computadora");

// function que recibe una cadena y una letra, dicha funcion tendra que contar cuantas veces aparece la letra en la cadena.
// Ejemplo: cuentaCaracteres("Ferrari", "r") = 3