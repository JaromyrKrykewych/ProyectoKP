function articuloFunda (modeloCelular, materialFunda, colorBordes){
    this.modeloCelular = modeloCelular;
    this.materialFunda = materialFunda;
    this.colorBordes = colorBordes;
}

function guardarUsuario(){
    //guardo el nombre del usuario
    usuarioName = document.getElementById("usuario")

    //creo el mensaje de bienvenida
    ingreso.removeChild(usuario)
    ingreso.removeChild(document.getElementById("mensaje_principal"))
    saludo = document.createTextNode("Bienvenido " + usuarioName.value + ", ya puedes comenzar tu pedido!")

    bienvenida.appendChild(saludo)
    ingreso.appendChild(bienvenida)

    titulo.innerHTML = "Materializa tu esencia"
}


function mostrarOpciones(){
    //DOM
    ingreso.appendChild(divProductos)
    ingreso.appendChild(divCarrito)
    divProductos.appendChild(divFunda)
    divProductos.appendChild(divChapa)
    divProductos.appendChild(divPopsocket)
    divFunda.appendChild(titleFunda)
    divFunda.appendChild(imgFunda)
    divFunda.appendChild(continuarF)
    titleFunda.appendChild(titleTextFunda)
    divChapa.appendChild(titleChapa)
    divChapa.appendChild(imgChapa)
    divChapa.appendChild(continuarC)
    titleChapa.appendChild(titleTextChapa)
    divPopsocket.appendChild(titlePopsocket)
    divPopsocket.appendChild(imgPopsocket)
    divPopsocket.appendChild(continuarP)
    titlePopsocket.appendChild(titleTextPopsocket)

    //CSS and Attributes
    divProductos.setAttribute("id", "boxProductos")
    divFunda.setAttribute("id", "boxFunda")
    divChapa.setAttribute("id", "boxChapa")
    divPopsocket.setAttribute("id", "boxPopsocket")
    imgFunda.setAttribute("src", "img/funda_glitter_js.jpg")
    imgChapa.setAttribute("src", "img/chapas_js.jpg")
    imgPopsocket.setAttribute("src", "img/popsockets_js.jpg")
}

function opcionFunda(){
    //Rediseño de la página
    ingreso.removeChild(bienvenida)
    divProductos.removeChild(divChapa)
    divProductos.removeChild(divPopsocket)
    divFunda.removeChild(imgFunda)
    divFunda.removeChild(continuarF)
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
    //DOM Boton Agregar Carrito
    divFunda.appendChild(agregarF)
}

function opcionChapa(){
     //Rediseño de la página
     ingreso.removeChild(bienvenida)
     divProductos.removeChild(divFunda)
     divProductos.removeChild(divPopsocket)
     divChapa.removeChild(imgChapa)
     divChapa.removeChild(continuarC)
}

function opcionPopsocket(){
    //Rediseño de la página
    ingreso.removeChild(bienvenida)
    divProductos.removeChild(divChapa)
    divProductos.removeChild(divFunda)
    divPopsocket.removeChild(imgPopsocket)
    divPopsocket.removeChild(continuarP)
}

function seleccion(){
    modeloEscogido = selectModelo.options[selectModelo.selectedIndex].text //FUNCIONA
    materialEscogido = selectMaterial.options[selectMaterial.selectedIndex].text //FUNCIONA
    bordeEscogido = selectBordes.options[selectBordes.selectedIndex].text //FUNCIONA
}

function agregarCarrito(){
    productoFunda = new articuloFunda (modeloEscogido, materialEscogido, bordeEscogido) //FUNCIONA
    modalBody.appendChild(divProductoFunda)
    textItemModelo.innerHTML = productoFunda.modeloCelular      //NO FUNCIONA
    textItemMaterial = productoFunda.materialFunda              //NO FUNCIONA
    textItemBorde = productoFunda.borde                         //NO FUNCIONA
}