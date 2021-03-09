function articuloFunda (marcaCelular, materialFunda, colorBordes){
    this.marcaCelular = marcaCelular;
    this.materialFunda = materialFunda;
    this.colorBordes = colorBordes;
}

function articuloChapa (modeloChapa, tamanioChapa, nombreMascota, tipografiaChapa){
    this.modeloChapa = modeloChapa;
    this.tamanioChapa = tamanioChapa;
    this.nombreMascota = nombreMascota;
    this.tipografiaChapa = tipografiaChapa;
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
}

function addOptions(options) {      //es6 <--ESTUDIAR
    let select = $('<select>')
    options.forEach((o, i) => {
        let opt = $(`<option ${i === 0 ? 'selected disabled' : ''} value="${i === 0 ? '' : o}">`)
        opt.html(o);
        $(select).append(opt)
    });

    return select;
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

function opcionChapa(){
    $(mensajePrincipal).hide()
    $(divFunda).hide()
    $(divPopsocket).hide()

    //Dom en divChapa
    $(imgChapa).hide()
    $(botonChapa).hide()
    $(divChapa).append(modeloChapa, selectModeloChapa)
    $(divChapa).append(tamanioChapa, selectTamanio)
    $(divChapa).append(tipografiaChapa, selectTipografia)
    $(divChapa).append(nombreMascotaLabel, nombreMascota)
    $(divChapa).append(agregarChapa)
}

function seleccion(){
    marcaEscogida = $(selectMarca).val()
    materialEscogido = $(selectMaterial).val()
    bordeEscogido = $(selectBorde).val()
}

function selectChapa(){
    modeloChapaEscogido = $(selectModeloChapa).val()
    tamanioChapaEscogido = $(selectTamanio).val()
    tipografiaChapaEscogido = $(selectTipografia).val()
}

function fundaAgregada(){
    
    //ingreso en modal
    $(itemMarca).html(marcaEscogida)
    $(itemMaterial).html(materialEscogido)
    $(itemBorde).html(bordeEscogido)
    $(modalBody).html('')
    $(modalBody).append(divProductoFunda)
    productoFunda = new articuloFunda(marcaEscogida, materialEscogido, bordeEscogido)    
}

function chapaAgregada(){
    productoChapa = {
        'Cliente': usuario.val(),
        'modelo': modeloChapaEscogido,
        'tamanio': tamanioChapaEscogido,
        'tipografia': tipografiaChapaEscogido,
        'nombreMascota': nombreMascota.val()
    }

    $(modalBody).html('')
    $(itemModeloChapa).html(productoChapa.modelo)
    $(itemTamanioChapa).html(productoChapa.tamanio)
    $(itemTipografiaChapa).html(productoChapa.tipografia)
    $(itemNombreMascota).html(productoChapa.nombreMascota)

    $(divProductoChapa).appendTo(modalBody)
}