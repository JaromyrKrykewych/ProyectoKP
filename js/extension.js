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

alert("Bienvenido a Kiwik! Accediste a generar tu pedido de diseño de chapa personalizada")
alert("En la sección Galeria podrás encontrar nuestros modelos de chapas, comencemos tu pedido!")
let modeloUno = prompt("Que modelo deseas para tu funda",modeloChapa.toString())
modeloUno = modeloUno.toUpperCase()
for (let i=0; i < modeloChapa.length; i++){
    if (modeloUno == modeloChapa[i].toUpperCase()){
        console.log("Haz escogido el modelo " + modeloUno)        
    }  /*else {
        alert("No ingresaste un valor valido, por ende se te asignará el modelo: " + modeloChapa[0])
        modeloUno = modeloChapa[0]
        console.log("Se te ha asignado el modelo " + modeloUno)
        break
        }*/   
}
let tamanioUno = prompt("Que tamaño de chapa precisas",tamanioChapa.toString())
tamanioUno = tamanioUno.toLowerCase()
for (let i=0; i < tamanioChapa.length; i++){
    if (tamanioUno == tamanioChapa[i].toLowerCase()){
        console.log("Haz escogido el tamaño " + tamanioUno)
        //break        
    } /*else if (tamanioUno != tamanioChapa[i].toLowerCase()){
        alert("El tamaño no es valido, por favor escoge una opción valida")
        tamanioUno = prompt("Que tamaño deseas para tu chapa",tamanioChapa.toString())
        tamanioUno = tamanioUno.toLowerCase()
        if ( tamanioUno == tamanioChapa[i].toLowerCase()){
            console.log("Haz escogido el modelo " + tamanioUno)
            break
        } else {
            alert("No ingresaste un valor valido, por ende se te asignará el tamaño: " + tamanioChapa[0])
            tamanioUno = tamanioChapa[0]
            console.log("Se te ha asignado el modelo " + tamanioUno)
            break
        }
    }*/
}
let nombreUno = prompt("Decime el nombre de tu mascota")
console.log(nombreUno)

let tipografiaUno = prompt("Por último escoge la tipografía para imprimir el nombre de tu mascota", tipografiaChapa.toString())
tipografiaUno = tipografiaUno.toLowerCase()
for (let i=0; i < tamanioChapa.length; i++){
    if (tipografiaUno == tipografiaChapa[i].toLowerCase()){
        console.log("Haz escogido la tipografía " + tipografiaUno)
        //break        
    }
}
let clienteUno = [modeloUno, tamanioUno, nombreUno, tipografiaUno]
console.log(clienteUno)

let numeroUno = prompt("Deseas agregar un numero de contacto para imprimir?","Ej: 911 xxxx xxxx")

clienteUno.push(numeroUno)
console.log(clienteUno)


//console.log(productos, iphone, motorola)

