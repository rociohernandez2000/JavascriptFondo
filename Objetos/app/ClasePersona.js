'use strict';

class ClasePersona{
    constructor(nombre, apellido, edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    getEdad(){
        return this.edad;
    }

    setNombre(nombre){
        this.nombre=nombre;
    }
    setApellido(apellido){
        this.apellido=apellido;
    }
    setEdad(edad){
        this.edad=edad;
    }
}

const mensajero=new ClasePersona("Rocio", "Hernandez",20);

console.log(mensajero.getEdad())
