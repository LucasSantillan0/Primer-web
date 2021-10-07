//OBJETOS
const boton1 = document.getElementById("botonPrincipal");
const selectores = document.getElementById("selectores");
const lista = document.getElementById("lista");
const seccion =document.getElementById("seccion");
const articulo=document.querySelector(".articulo").content;
const fragment =document.createDocumentFragment();
const form =document.getElementById("form");
var items =[]

//DECLARACIONES
boton1.onclick = x;

//FUNCIONES
function x (click){
    if (lista.style.height=="50px"){
        lista.style.height="0";
        lista.style.margin="0";
    }
    else{
        selectores.style.visibility ="visible"
        selectores.style.padding ="1rem";
        selectores.style.margin ="auto";
        lista.style.height="50px";
        lista.style.margin="50px";

    }
};
class item {
    constructor(nombre, precio, imagen){
        this.nombre=nombre;
        this.precio=precio;
        this.imagen=imagen;
    }
    push0 (){
        articulo.querySelector(" .contenedor .nombre").textContent=this.nombre;
        articulo.querySelector(".contenedor  .precio").textContent= "$" + this.precio;
        articulo.querySelector(".contenedor .imagen").style.backgroundImage = this.imagen;
        const clon =articulo.cloneNode(true);
        fragment.appendChild(clon);
        
    }
}
const pushAll = function(){
    seccion.innerHTML=""
    seccion.appendChild(fragment)
}
form.querySelector("#botonP").onclick = function(click){
    items.push (new item (form.querySelector("#nm").value, form.querySelector("#pr").value, form.querySelector("#im").value))
    items.forEach(element => {
        element.push0();
    });
    pushAll();
}
