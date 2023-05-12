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

console.log("----Cuenta Letra----")
function cuentaCaracteres(palabra, letra){
    let cuenta=0;
    for(let i=palabra.length; i>0; i--){
        const letraActual=palabra.substring(i, i-1);
        if(letraActual==letra){
            cuenta=cuenta+1
        }
    }
    return cuenta;
}
console.log(cuentaCaracteres("oso","o"));

console.log("---metodo Burbuja-----")
//metodo de ordenamiento de Burbuja
//arreglo desordenado
const array=[4,2,1,3];
function bubbleSort(arreglo){
    for(let i=0;i<arreglo.length;i++){
        for(let j=0; j<arreglo.length-i-1; j++){
            if(arreglo[j]>arreglo[j+1]){
                const temporal=arreglo[j+1];
                arreglo[j+1]=arreglo[j];
                arreglo[j]=temporal;
            }
        }

    }
    console.log(arreglo);
}
bubbleSort(array)

// construir una funcion que reciba un arreglo y una palabra 
// esta palabra puede ser "mayor" o "menor", si es mayor
// devuelve el mayor del arreglo y es es menor devuelve el menor.

console.log("----funcion arreglo mayor-menor----");
const arrayX=[53,31,12,108,4,22,0,24,29,8];
function filtrarArreglo(arreglo, palabra){
    for(let i=0; i<arreglo.length;i++){
        for (let j=0; j<arreglo.length-i-1; j++){
            if(arreglo[j]>arreglo[j+1]){
                const temporal=arreglo[j+1];
                arreglo[j+1]=arreglo[j];
                arreglo[j]=temporal;
            }
        }
    }
    if(palabra=="menor"){
        console.log(arreglo[0]);
    } else{
        console.log(arreglo[arreglo.length-1]);
    }
}

filtrarArreglo(arrayX,"mayor")