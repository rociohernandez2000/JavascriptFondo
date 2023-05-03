console.log("Enlazado")

//for each si modifica los elementos del arreglo
const edades=[23,14,64,1,2,3,4,5,77,2,23,5];
console.log("--forEach--");
edades.forEach(edad =>{
    console.log(edad);
});

//map; sin modificar el arreglo original puedo modificar los valores del arreglo
//copia temporal 
console.log("----map---");
edades.map(edad => {
    edad=edad+1;
    console.log(edad);
});

console.table(edades);

//metodo filter, filtra un arreglo
console.log("---filter---");
const arregloFilter=edades.filter(edad => {
    return edad>5; //aqui puede ser un filtro de strings o numeros
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


//funcion que recibe una cadena y una letra, dicha funciona tendra que contar vuantas veces aparece la letra en la cadena
//Ejemplo: cuentaCaracteres("Ferrari","r")=3