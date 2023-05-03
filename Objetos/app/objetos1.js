console.log("Conectado");


// asi se crea un obsjeto
const persona = {
    nombre: "Paola",
    edad: 28,
    altura: 1.60,
    casado: true
}


// asi se verifica su tipo
console.log(typeof persona);

// como ver los valores dentro del objeto?
console.log(persona.edad);
console.log(persona.nombre);
console.log(persona['casado'])

console.log("ahora imprimiendo mediante variables");
let nombre1 = persona.nombre;
let edad1 = persona['edad'];
console.log(nombre1 + " " + edad1);
console.log(`${nombre1} ${edad1}`);

// destructuring
console.log("Usando destructuring")

const { nombre, edad, casado } = persona;
console.log(nombre)
console.log(edad)
console.log(casado)

// Objetos anidades
// JSON - > JavaScript Object Notation

console.log("-------Objetos anidados--------")

const producto = {
    nombreP: "IPhone 14",
    color: "rojo",
    precio: 12000,
    almacenamiento: {
        almacenamiento1: "128gb",
        almacenamiento2: "256gb",
        almacenamiento3: "512gb",
    }
}

console.log(producto.almacenamiento.almacenamiento2)
console.log(producto['almacenamiento'].almacenamiento3)

console.log("----aplicando destructuring---")
// aplicando destructuring 
const { nombreP, color, precio, almacenamiento: { almacenamiento1, almacenamiento2, almacenamiento3 } } = producto;
console.log(nombreP);
console.log(precio);
console.log(almacenamiento1);
console.log(almacenamiento2);
console.log(almacenamiento3);

// Crear un objeto de un auto, objeto anidado de 3 niveles

console.log("-------Objeto auto--------")
const auto = {
    marca: "Tesla",
    color: {
        color1: "rojo",
        color2: "negro",
        color3: "blanco"
    },
    modelo: {
        modelo1: "modelo S",
        year: {
            year1: "2022",
            year2: "2023",
            year3: "2024"
        },
        modelo2: "modelo X", 
        year: { 
            year1: "2022", 
            year2: "2023", 
            year3: "2024" 
        },
        modelo3: "modelo Y", 
        year: { 
            year1: "2022", 
            year2: "2023", 
            year3: "2024" 
        }
    }
}
const{marca, color: {color1,color2,color3}, modelo:{modelo1, year:{year1}}}=auto;
console.log(marca);
console.log(color1);
console.log(color2);
console.log(color3);
console.log(modelo1,year1)


console.log(auto.modelo.modelo1);
console.log(auto.modelo.year.year1);
console.log(auto.modelo.modelo3);
console.log(auto.modelo.year.year3)