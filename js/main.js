    /*Modal*/ 
// Modal Header
let modalHeader = $('<div class="modal-header">')
let modalTitle = $('<h5 class="modal-title" id="modalCarritoLabel">')
let modalClose = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close">')
let iconClose = $('<span aria-hidden="true">')

modalTitle.html('Mi Pedido')
iconClose.html('&times;')
$(modalClose).append(iconClose)
$(modalHeader).append(modalTitle)    
$(modalHeader).append(modalClose)

// Modal body
let modalBody = $('<div class="modal-body">')
modalBody.html('No has agregado nada a tu pedido')

// Modal Footer
let modalFooter = $('<div class="modal-footer">')
let borrarPedido = $('<button type="button" class="btn btn-secondary" data-dismiss="modal">')
let confirmarPedido = $(' <button type="button" class="btn btn-primary">')

borrarPedido.html('Descartar Pedido')
$(modalFooter).append(borrarPedido)         //con este botón creare función para eliminar productos
confirmarPedido.html('Confirmar Pedido')
$(modalFooter).append(confirmarPedido)

// Modal Content
let modalContent = $('<div class="modal-content">')
$(modalContent).append(modalHeader)
$(modalContent).append(modalBody)
$(modalContent).append(modalFooter)

//Crear Modal
let divBtnModal = $('<div>')
let btnModal = $('<button type="button" class="btn" id="btnCarrito" data-toggle="modal" data-target="#modalCarrito">')
let modal = $('<div class="modal fade" id="modalCarrito" tabindex="-1" aria-labelledby="modalCarritoLabel" aria-hidden="true">')
let modalDialog = $('<div class="modal-dialog">')

$(divBtnModal).append(btnModal)    
btnModal.html('Ver Carrito')
$(modalDialog).append(modalContent)
$(modal).append(modalDialog)
$(divBtnModal).append(modal)

    /*guardarUsuario*/

//Variable función guardarUsuario
let tituloPrincipal = $("#titulo_principal")
let mensajePrincipal = $("#mensaje_principal")
let loginUsuario = $("#loginUsuario")
let usuario = $("#usuario")
let usuarioActivo = $("#guardarUsuario")

//Evento guardarUsuario
$("#guardarUsuario").click(guardarUsuario)

    /*mostrarOpciones*/

//Variables
let divProductos = $('<div id="boxProductos">')
let divFunda = $('<div id="boxFunda">')
let divChapa = $('<div id="boxChapa">')
let divPopsocket = $('<div id="boxPopsocket">')

$(divProductos).append(divFunda, divChapa, divPopsocket)

//Box Fundas
let titleFunda = $('<h4>')
let imgFunda = $('<img src="img/funda_glitter_js.jpg">')
let botonFunda = $('<input type="button" id="opcionFunda" value="Continuar">')

titleFunda.html('Fundas Presonalizadas')
$(titleFunda).appendTo(divFunda)
$(imgFunda).appendTo(divFunda)
$(botonFunda).appendTo(divFunda)

//Box Chapas
let titleChapa = $('<h4>')
let imgChapa = $('<img src="img/chapas_js.jpg">')
let botonChapa = $('<input type="button" value="Continuar">')

titleChapa.html('Chapas Personalizadas')
$(titleChapa).appendTo(divChapa)
$(imgChapa).appendTo(divChapa)
$(botonChapa).appendTo(divChapa)

//Box Popsockets
let titlePopsocket = $('<h4>')
let imgPopsocket = $('<img src="img/popsockets_js.jpg">')
let botonPopsocket = $('<input type="button" value="Continuar">')

divPopsocket.html('<h4>Popsockets Personalizados</h4>')
$(titlePopsocket).appendTo(divPopsocket)
$(imgPopsocket).appendTo(divPopsocket)
$(botonPopsocket).appendTo(divPopsocket)

//Evento mostrarOpciones
$("#guardarUsuario").click(mostrarOpciones)        


    /*Variables opcionFunda*/

//Marca Celular
let marcaCelular = $('<label>')
let selectMarca = addOptions(['Marca', 'Samsung', 'Iphone', 'Motorola']);

marcaCelular.html('Marca Celular')

//Material Funda
let materialFunda = $('<label>')
let selectMaterial = addOptions(['Material', 'PC: Plástico Rígido', 'TPU: Goma'])

materialFunda.html('Material Funda')

//Borde Funda
let bordeFunda = $('<label>')
let selectBorde = addOptions(['Estilo Borde', 'Transparente', 'Negro'])

bordeFunda.html('Borde Funda')

//Input agregar Funda
let agregarFunda = $('<input type="button" value="Agregar">')

//Evento opcionFunda
$(botonFunda).click(opcionFunda)

//selección
$(selectMarca).change(seleccion)
$(selectMaterial).change(seleccion)
$(selectBorde).change(seleccion)

//Variables agrega Funda a Carrito
let marcaEscogida = ""
let materialEscogido = ""
let bordeEscogido = ""
let productoFunda = new Object
let divProductoFunda = $('<div class="divProductoFunda">')
let itemProducto = $('<h4>')
let itemMarca = $('<li>')
let itemMaterial = $('<li>')
let itemBorde = $('<li>')

itemProducto.html('Funda Personalizada')
$(divProductoFunda).append(itemProducto, itemMarca, itemMaterial, itemBorde)

//Evento Agregar funda a Carrito
$(agregarFunda).click(fundaAgregada)


