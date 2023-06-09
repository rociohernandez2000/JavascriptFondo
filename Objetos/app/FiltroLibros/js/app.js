'strict';

console.log("esta enlazado")

//variables
const campoTexto=document.querySelector('.entrada_texto');
const campoBoton=document.querySelector('.entrada_boton');

console.log(campoTexto)
console.log(campoTexto.required)

campoTexto.addEventListener("blur",function(evento) { 
    console.log("Lo siguiente es resultado del evento blur")
    console.log(evento.target.value);
});

campoTexto.addEventListener("input",function(evento){
    console.log(evento)

})

campoBoton.addEventListener("click", function(evento){
    console.log(evento);
})

// mientras el campo de texto este vacio, el boton estara deshabilitado