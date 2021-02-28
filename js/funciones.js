function articuloFunda (marcaCelular, materialFunda, colorBordes){
    this.marcaCelular = marcaCelular;
    this.materialFunda = materialFunda;
    this.colorBordes = colorBordes;
}

function guardarUsuario(){
    $(tituloPrincipal).text("Materializa tu esencia")
    $(mensajePrincipal).text("Bienvenido " + usuario.val() + ", ya podes comenzar tu pedido")
    $("#guardarUsuario").hide()
    $(usuario).hide()
    //$(loginUsuario).append("<p>Pedido</p>")
}

function mostrarOpciones(){
    $(loginUsuario).append(divProductos, divBtnModal)
    $(divProductos).append(divFunda, divChapa, divPopsocket)
}

function opcionFunda(){
    $(mensajePrincipal).hide()
    $(divChapa).hide()
    $(divPopsocket).hide()
    //Dom en divFunda
    $(imgFunda).hide()
    $(botonFunda).hide()
    $(divFunda).append(marcaCelular, selectMarca)
    $(divFunda).append(materialFunda, selectMaterial)
    $(divFunda).append(bordeFunda, selectBorde)
    $(divFunda).append(agregarFunda)
}

function seleccion(){
    marcaEscogida = $(selectMarca).val()
    materialEscogido = $(selectMaterial).val()
    bordeEscogido = $(selectBorde).val()
}

function fundaAgregada(){
    $(itemMarca).html(marcaEscogida)
    $(itemMaterial).html(materialEscogido)
    $(itemBorde).html(bordeEscogido)
    $(modalBody).html('')
    $(modalBody).append(divProductoFunda)
    productoFunda = new articuloFunda(marcaEscogida, materialEscogido, bordeEscogido)    
}