'use strict';

class ClasePersona{
    
    constructor(nombre, apellido, edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.personas = [];
        this.cantidadPersonas = 0;
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

    pideCantidadPersonas(){
        this.cantidadPersonas = prompt("¿Cuantas personas quieres registrar?");
        console.log("Vas a registrar: " + this.cantidadPersonas);
    }

    /*
    pideDatos(){
        for (let i = 0; i < this.cantidadPersonas; i++) {
            let personaActual = [];
            console.log("Estas ingresando a la persona numero: " + i);
            this.nombre = prompt("Ingresa el nombre: ");
            this.apellido=prompt("Ingresa apellido: ");
            this.edad=prompt("Ingresa edad: ");

            personaActual.push(this.nombre);
            personaActual.push(this.apellido);
            personaActual.push(this.edad);

            this.personas.push(personaActual);
        }
    }
*/
/*
    muestraPersonas(){
        this.personas.forEach(persona =>{
            console.log(persona[0]);
            console.log(persona[1]);
            console.log(persona[2]);
            console.log("------------")
        })
    }
*/
    pideDatosPorObjetos(){
        for (let i = 0; i < this.cantidadPersonas; i++) {
            
            console.log("Estas ingresando a la persona numero: " + i);
            const nombre = prompt("Ingresa el nombre: ");
            const apellido=prompt("Ingresa apellido: ");
            const edad=prompt("Ingresa edad: ");

            let personaActual = new ClasePersona(nombre, apellido, edad);
            this.personas.push(personaActual);
        }
        console.log(this.personas);
    }

}


const mensajero = new ClasePersona("Rocio", "Hernandez",20);
mensajero.nombre

mensajero.pideCantidadPersonas()
mensajero.pideDatosPorObjetos()


