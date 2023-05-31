'use strict';

class ClaseAuto{
    //variables globales: Puede ser utilizada en todo el bloque padre. solo se utilizan en clases
    //variables locales: Pueden ser usadas en todo el bloque padre. No pueden ser usadas en clases
    //cada atributo de cada clase tiene sus metodos getters y setters (obtener y colocar)
    constructor(marca, color){
        this.marca=marca;
        this.color=color;
    }

    //funcion obtener marca, dentro de las clases no se coloca la palabra function

    getMarca(){
        return this.marca;
    }
    getColot(){
        return this.color;
    }

    setMarca(marca){
        this.marca=marca;
    }

    setColor(color){
        this.color=color;
    }
}

//modificadores de acceso: public-default:permite acceso en todo lugar y sin restriccion
//private(_): permite acceso solo mediante metodos publicos
//protected(#): permite usar variables y funciones solo dentro de la clase

//El new es el constructor, ahi paso los datos que son los argumentos
const mensajero=new ClaseAuto("Ford","Rojo");
console.log(mensajero.getMarca())