//Crear Modal
let divBtnModal = $('<div>')
    let btnModal = $('<button type="button" class="btn" id="btnCarrito" data-toggle="modal" data-target="#modalCarrito">')
    $(divBtnModal).append(btnModal)    
        btnModal.html('Ver Carrito')
let modal = $('<div class="modal fade" id="modalCarrito" tabindex="-1" aria-labelledby="modalCarritoLabel" aria-hidden="true">')
$(divBtnModal).append(modal)
    let modalDialog = $('<div class="modal-dialog">')
    $(modal).append(modalDialog)
        let modalContent = $('<div class="modal-content">')
        $(modalDialog).append(modalContent)
            let modalHeader = $('<div class="modal-header">')
            $(modalContent).append(modalHeader)
                let modalTitle = $('<h5 class="modal-title" id="modalCarritoLabel">')
                $(modalHeader).append(modalTitle)    
                    modalTitle.html('Mi Pedido')
                let modalClose = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close">')
                $(modalHeader).append(modalClose)
                    let iconClose = $('<span aria-hidden="true">')
                    $(modalClose).append(iconClose)
                        iconClose.html('&times;')
            let modalBody = $('<div class="modal-body">')
            $(modalContent).append(modalBody)
                modalBody.html('No has agregado nada a tu pedido')
            let modalFooter = $('<div class="modal-footer">')
            $(modalContent).append(modalFooter)
                let borrarPedido = $('<button type="button" class="btn btn-secondary" data-dismiss="modal">')
                $(modalFooter).append(borrarPedido)         //con este botón creare función para eliminar productos
                    borrarPedido.html('Descartar Pedido')
                let confirmarPedido = $(' <button type="button" class="btn btn-primary">')
                $(modalFooter).append(confirmarPedido)
                    confirmarPedido.html('Confirmar Pedido')

//Variable función guardarUsuario
let tituloPrincipal = $("#titulo_principal")
let mensajePrincipal = $("#mensaje_principal")
let loginUsuario = $("#loginUsuario")
let usuario = $("#usuario")
let usuarioActivo = $("#guardarUsuario")

//Evento guardarUsuario
$("#guardarUsuario").click(guardarUsuario)

//variable función mostrarOpciones
let divProductos = $('<div id="boxProductos">')
    let divFunda =     $('<div id="boxFunda">')
    let divChapa =     $('<div id="boxChapa">')
    let divPopsocket = $('<div id="boxPopsocket">')
    //html Variables
    divFunda.html('<h4>Fundas Personalizadas</h4>')
        let imgFunda = $('<img src="img/funda_glitter_js.jpg">')
        $(imgFunda).appendTo(divFunda)
        //divFunda.append('<img src="img/funda_glitter_js.jpg">')
        let botonFunda = $('<input type="button" id="opcionFunda" value="Continuar">')
        $(botonFunda).appendTo(divFunda)
        //divFunda.append('<input type="button" id="opcionFunda" value="Continuar">')
    divChapa.html('<h4>Chapas Personalizadas</h4>')
        divChapa.append('<img src="img/chapas_js.jpg">')
        divChapa.append('<input type="button" value="Continuar">')
    divPopsocket.html('<h4>Popsockets Personalizados</h4>')
        divPopsocket.append('<img src="img/popsockets_js.jpg">')
        divPopsocket.append('<input type="button" value="Continuar">')

//Evento mostrarOpciones
$("#guardarUsuario").click(mostrarOpciones)        

//Variables opcionFunda
let marcaCelular = $('<label>')
    marcaCelular.html('Marca Celular')
let selectMarca = $('<select>')
    let opcionMarcaLabel = $('<option>')
    $(selectMarca).append(opcionMarcaLabel)
        opcionMarcaLabel.html('Marca')
    let opcionMarcaUno = $('<option value="Samsung">')     //parece no hace falta el value 
    $(selectMarca).append(opcionMarcaUno)
        opcionMarcaUno.html('Samsung')
    let opcionMarcaDos = $('<option value="Iphone">')      //parece no hace falta el value     
    $(selectMarca).append(opcionMarcaDos)
        opcionMarcaDos.html('Iphone')
    let opcionMarcaTres = $('<option value="Motorola">')   //parece no hace falta el value         
    $(selectMarca).append(opcionMarcaTres)
        opcionMarcaTres.html('Motorola')
let materialFunda = $('<label>')
    materialFunda.html('Material Funda')
let selectMaterial = $('<select>')
    let opcionMaterialLabel = $('<option>')
    $(selectMaterial).append(opcionMaterialLabel)
        opcionMaterialLabel.html('Material')
    let opcionMaterialUno = $('<option>')
    $(selectMaterial).append(opcionMaterialUno)
        opcionMaterialUno.html('PC: Plástico Rígido')
    let opcionMateriaDos = $('<option>')
    $(selectMaterial).append(opcionMateriaDos)
        opcionMateriaDos.html('TPU: Goma')
let bordeFunda = $('<label>')
    bordeFunda.html('Borde Funda')
let selectBorde = $('<select>')
    let opcionBordeLabel = $('<option>')
    $(selectBorde).append(opcionBordeLabel)
        opcionBordeLabel.html('Estilo Borde')
    let opcionBordeUno = $('<option>')
    $(selectBorde).append(opcionBordeUno)
        opcionBordeUno.html('Transparente')
    let opcionBordeDos = $('<option>')
    $(selectBorde).append(opcionBordeDos)
        opcionBordeDos.html('Negro')
let agregarFunda = $('<input type="button" value="Agregar">')

//Evento opcionFunda
$(botonFunda).click(opcionFunda)

//Variables Selección Funda
let marcaEscogida = ""
let materialEscogido = ""
let bordeEscogido = ""

//Evento Selección
$(selectMarca).change(seleccion)
$(selectMaterial).change(seleccion)
$(selectBorde).change(seleccion)

//Variables agrega Funda a Carrito
let productoFunda = new Object
let divProductoFunda = $('<div class="divProductoFunda">')
    let itemProducto = $('<h4>')
        itemProducto.html('Funda Personalizada')
    let itemMarca = $('<li>')
    let itemMaterial = $('<li>')
    let itemBorde = $('<li>')
$(divProductoFunda).append(itemProducto, itemMarca, itemMaterial, itemBorde)

//Evento Agregar funda a Carrito
$(agregarFunda).click(fundaAgregada)
