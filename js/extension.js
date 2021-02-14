//Bienvenida
function articuloFunda (modeloCelular, materialFunda, colorBordes){
    this.modeloCelular = modeloCelular;
    this.materialFunda = materialFunda;
    this.colorBordes = colorBordes;
}

let titulo = document.getElementById("titulo_principal")

let ingreso = document.getElementById("login_usuario")

let usuario = document.getElementById("loginUsuario")

document.getElementById("guardarUsuario").addEventListener("click", guardarUsuario)

function guardarUsuario(){
    //guardo el nombre del usuario
    let usuarioName = document.getElementById("usuario")

    //creo el mensaje de bienvenida
    ingreso.removeChild(usuario)
    ingreso.removeChild(document.getElementById("mensaje_principal"))
    
    let bienvenida = document.createElement("h3")
    let saludo = document.createTextNode("Bienvenido " + usuarioName.value + ", ya puedes comenzar tu pedido!")

    bienvenida.appendChild(saludo)
    ingreso.appendChild(bienvenida)

    //comenzamos el pedido
    crearOpciones()
}

let samsung = ["Samsung A30", "Samsung A50", "Samsung A9", "Samsung S9", "Samsung S8", "Samsung S7", "Samsung S8 plus", "Samsung S10 plus"]
let iphone = ["Iphone XR", "Iphone XR Max", "Iphone X", "Iphone 11 Pro", "Iphone 9", "Iphone 9 plus"]
let motorola = ["Moto G7 play", "Moto G7 Power", "Moto G7", "Moto G6", "Moto G6 plus"]


function crearOpciones(){
    titulo.innerHTML = "Materializa tu esencia"

    //variables
    let divProductos = document.createElement("div")
    let divFunda = document.createElement("div")
    let divChapa = document.createElement("div")
    let divPopsocket = document.createElement("div")
    let titleFunda = document.createElement("h4")
    let titleChapa = document.createElement("h4")
    let titlePopsocket = document.createElement("h4")
    let titleTextFunda = document.createTextNode("Fundas Personalizadas")
    let titleTextChapa = document.createTextNode("Chapas Personalizadas")
    let titleTextPopsocket = document.createTextNode("Popsockets Personalizadas")
    //variables Marca Celular
    let selectModelo = document.createElement("select")
    let opcionModelo = document.createElement("option")
    let opcionModeloUno = document.createElement("option")
    let opcionModeloDos = document.createElement("option")
    let opcionModeloTres = document.createElement("option")
    let labelSelect = document.createElement("label")
    let tituloSelect = document.createTextNode("Modelo Celular")
    let tituloModelo = document.createTextNode("Modelo")
    let opcionUno = document.createTextNode("Samsung")
    let opcionDos = document.createTextNode("Iphone")
    let opcionTres = document.createTextNode("Motorola")
    //Variables Material Funda
    let selectMaterial = document.createElement("Select")
    let labelMaterial = document.createElement("label")
    let opcionMaterial = document.createElement("option")
    let opcionMaterialUno = document.createElement("option")
    let opcionMaterialDos = document.createElement("option")
    let nameMaterial = document.createTextNode("Material")
    let tituloMaterial = document.createTextNode("Material Funda")
    let materialUno = document.createTextNode("PC: Plastico Rígido")
    let materialDos = document.createTextNode("TPU: Goma")
    //Variable Bordes Funda
    let selectBordes = document.createElement("select")
    let labelBordes = document.createElement("label")
    let opcionBordes = document.createElement("option")
    let opcionBordesUno = document.createElement("option")
    let opcionBordesDos = document.createElement("option")
    let nameBordes = document.createTextNode("Estilo Borde")
    let tituloBordes = document.createTextNode("Estilo Borde")
    let bordesUno = document.createTextNode("Transparente")
    let bordesDos = document.createTextNode("Negro")
    //Botón Carrito
    let botonCarrito = document.createElement("button")
    let textCarrito = document.createTextNode("Agregar")
    
    //DOM
    ingreso.appendChild(divProductos)
    divProductos.appendChild(divFunda)
    divProductos.appendChild(divChapa)
    divProductos.appendChild(divPopsocket)
    divFunda.appendChild(titleFunda)
    titleFunda.appendChild(titleTextFunda)
    divChapa.appendChild(titleChapa)
    titleChapa.appendChild(titleTextChapa)
    divPopsocket.appendChild(titlePopsocket)
    titlePopsocket.appendChild(titleTextPopsocket)
    //DOM Selección Marca Celular
    divFunda.appendChild(labelSelect)
    divFunda.appendChild(selectModelo)
    labelSelect.appendChild(tituloSelect)
    selectModelo.appendChild(opcionModelo)
    selectModelo.appendChild(opcionModeloUno)
    selectModelo.appendChild(opcionModeloDos)
    selectModelo.appendChild(opcionModeloTres)
    opcionModelo.appendChild(tituloModelo)
    opcionModeloUno.appendChild(opcionUno)
    opcionModeloDos.appendChild(opcionDos)
    opcionModeloTres.appendChild(opcionTres)
    selectModelo.setAttribute("id", "modeloSelect")
    document.getElementById("modeloSelect").addEventListener("change", seleccion)
    //DOM Material Funda
    divFunda.appendChild(labelMaterial)
    divFunda.appendChild(selectMaterial)
    labelMaterial.appendChild(tituloMaterial)
    selectMaterial.appendChild(opcionMaterial)
    selectMaterial.appendChild(opcionMaterialUno)
    selectMaterial.appendChild(opcionMaterialDos)
    opcionMaterial.appendChild(nameMaterial)
    opcionMaterialUno.appendChild(materialUno)
    opcionMaterialDos.appendChild(materialDos)
    selectMaterial.addEventListener("change", seleccion)
    //DOM Bordes Funda
    divFunda.appendChild(labelBordes)
    divFunda.appendChild(selectBordes)
    labelBordes.appendChild(tituloBordes)
    selectBordes.appendChild(opcionBordes)
    selectBordes.appendChild(opcionBordesUno)
    selectBordes.appendChild(opcionBordesDos)
    opcionBordes.appendChild(nameBordes)
    opcionBordesUno.appendChild(bordesUno)
    opcionBordesDos.appendChild(bordesDos)
    selectBordes.addEventListener("change", seleccion)
    //DOM Agregar Carrito
    divFunda.appendChild(botonCarrito)
    botonCarrito.appendChild(textCarrito)
    
    //CSS and Attributes
    divProductos.setAttribute("id", "boxProductos")
    divFunda.setAttribute("id", "boxFunda")
    divChapa.setAttribute("id", "boxChapa")
    divPopsocket.setAttribute("id", "boxPopsocket")
    
    botonCarrito.addEventListener("click", agregarCarrito)
    let modeloEscogido = ""
    let materialEscogido = ""
    let bordeEscogido = ""
    function seleccion(){
        modeloEscogido = selectModelo.options[selectModelo.selectedIndex].text //FUNCIONA
        materialEscogido = selectMaterial.options[selectMaterial.selectedIndex].text //FUNCIONA
        bordeEscogido = selectBordes.options[selectBordes.selectedIndex].text //FUNCIONA
        return (modeloEscogido, materialEscogido, bordeEscogido)
    } 
    
    function agregarCarrito(){
        let primerProducto = new articuloFunda (modeloEscogido, materialEscogido, bordeEscogido)
        let divProducto = document.createElement("div")
        let textProducto = document.createTextNode("Haz anexado a tu pedido una funda con las siguientes especificaciones: *" + primerProducto.modeloCelular + " * "  + primerProducto.materialFunda + " * " + primerProducto.colorBordes)
        ingreso.appendChild(divProducto)
        divProducto.appendChild(textProducto)
        divProducto.setAttribute("style", "margin-top: 40px")
        //return (primerProducto.modeloCelular, primerProducto.materialFunda, primerProducto.colorBordes)
    }
    
}






//opciones para el pedido
/* por ahora inutil
let opciones = document.getElementsByClassName("prompt__variable")
console.log(opciones)


ya que manejo las opciones que el usuario puede escoger con la misma clase, pense que
podría obtener sus datos con el siguiente for, podría crear una función con la cual obtenga
y devuelva datos de esa manera? o no es muy eficaz?   


for (let i=0; i < opciones.length; i++){
    console.log(opciones[2])
    console.log(opciones[2].innerHTML)
    console.log(opciones[2].getElementsByTagName("option"))
    console.log(opciones[2].textContent)
    break
}
*/









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





let modeloChapa = ["Uno", "Dos", "Tres", "Cuatro"]
let tamanioChapa = ["Chico", "Mediano"]
let tipografiaChapa = ["Fuente 1", "Fuente 2", "Fuente 3", "Fuente 4"] 


