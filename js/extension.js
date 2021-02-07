//Bienvenida

let titulo = document.getElementById("titulo_principal")
//console.log(titulo)
//console.log(titulo.innerHTML)

let ingreso = document.getElementById("login_usuario")
//console.log(ingreso)

let usuario = document.getElementById("loginUsuario")
//console.log(usuario)

let usuarioName = document.getElementById("usuario")
//console.log(usuarioName.value)

//Suponemos que el usuario ingresa su nombre mediante el input
usuarioName = prompt("Por Favor Ingresa tu nombre")
//console.log(usuarioName)

ingreso.removeChild(usuario)
ingreso.removeChild(document.getElementById("mensaje_principal"))

let bienvenida = document.createElement("h3")
let saludo = document.createTextNode("Bienvenido " + usuarioName + ", ya puedes comenzar tu pedido!")

bienvenida.appendChild(saludo)
ingreso.appendChild(bienvenida)

//opciones para el pedido

let opciones = document.getElementsByClassName("prompt__variable")
console.log(opciones)

/*
ya que manejo las opciones que el usuario puede escoger con la misma clase, pense que
podría obtener sus datos con el siguiente for, podría crear una función con la cual obtenga
y devuelva datos de esa manera? o no es muy eficaz?   
*/

for (let i=0; i < opciones.length; i++){
    console.log(opciones[2])
    console.log(opciones[2].innerHTML)
    console.log(opciones[2].getElementsByTagName("option"))
    console.log(opciones[2].textContent)
    break
}










//Pedido


let productos = ["Fundas Personalizadas", "Chapas Personalizadas", "Popsockets Personalizados"]

function articuloFunda (modeloCelular, materialFunda, colorBordes){
    this.modeloCelular = modeloCelular;
    this.materialFunda = materialFunda;
    this.colorBordes = colorBordes;
}

function articuloChapa (modeloChapa, tamanioChapa, nombreMascota, tipografiaChapa){
    this.modeloChapa = modeloChapa;
    this.tamanioChapa = tamanioChapa;
    this.nombreMascota = nombreMascota;
    this.tipografiaChapa = tipografiaChapa;
}

let samsung = ["Samsung A30", "Samsung A50", "Samsung A9", "Samsung S9", "Samsung S8", "Samsung S7", "Samsung S8 plus", "Samsung S10 plus"]
let iphone = ["Iphone XR", "Iphone XR Max", "Iphone X", "Iphone 11 Pro", "Iphone 9", "Iphone 9 plus"]
let motorola = ["Moto G7 play", "Moto G7 Power", "Moto G7", "Moto G6", "Moto G6 plus"]

let modeloCelular = [samsung, iphone, motorola]

let modeloChapa = ["Uno", "Dos", "Tres", "Cuatro"]
let tamanioChapa = ["Chico", "Mediano"]
let tipografiaChapa = ["Fuente 1", "Fuente 2", "Fuente 3", "Fuente 4"] 


