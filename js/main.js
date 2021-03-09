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

/*
$(document).ready(function(){
    $.ajax({
        url: 'https://worldtimeapi.org/api/timezone/america/argentina/Buenos_Aires',
        type: 'GET',
        dataType: 'json'
    }).done(function(data){
        console.log(data)
        $("#fecha_hora").html( "Buenos Aires, " + data.datetime)
    }).fail(function(xhr, status, error){
        console.log(xhr, status, error)
    })
})*/
$("#clima").click(function(){
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=3433955&appid=9d307f28651f2b5ec8f3e8ca27dc8410',
        type: 'GET',
        dataType: 'json'
    }).done(function(result){
        console.log(result.main.temp)
        $("#fecha_hora").html("La temperatura es de " + Conversion(parseInt(result.main.temp)) + " °C y vientos de " + result.wind.speed + " km/h"  )
    })
})
function Conversion (valor){
    let celcius = 0
    celcius = (valor - 273,15)   
    return celcius
}

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

//Evento Escoger opcion
$(botonFunda).click(opcionFunda)
$(botonChapa).click(opcionChapa)

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

    /* variables opcionChapas */

//Modelo Chapa
let modeloChapa = $('<label>')
let selectModeloChapa = addOptions(['Modelo Chapa', 'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho'])

modeloChapa.html('Modelo Chapa')

//Tamaño Chapa
let tamanioChapa = $('<label>')
let selectTamanio = addOptions(['Tamaño Chapa', 'Chico', 'Mediano'])

tamanioChapa.html('Tamaño Chapa')

//Tipografía Chapa
let tipografiaChapa = $('<label>')
let selectTipografia = addOptions(['Tipografía', 'Tipografía 1', 'Tipografía 2', 'Tipografía 3', 'Tipografía 4', 'Tipografía 5', 'Tipografía 6', 'Tipografía 7', 'Tipografía 8', 'Tipografía 9', 'Tipografía 10', 'Tipografía 11', 'Tipografía 12'])

tipografiaChapa.html('Tipografía Chapa')

//Nombre Mascota
let nombreMascotaLabel = $('<label>')
let nombreMascota = $('<input type="text" placeholder="Nombre">')

nombreMascotaLabel.html('Ingresa Nombre de tu Mascota')

//Input agregar Chapa
let agregarChapa = $('<input type="button" value="Agregar">')

//Selección Chapas
$(selectModeloChapa).change(selectChapa)
$(selectTamanio).change(selectChapa)
$(selectTipografia).change(selectChapa)

    /*Variables agregr Chapa a carrito*/

let modeloChapaEscogido = ""
let tamanioChapaEscogido = ""
let tipografiaChapaEscogido = ""
let divProductoChapa = $('<div class="divProductoChapa">')
let productoChapa = {}
let itemProductoChapa = $('<h4>')
let itemModeloChapa = $('<li>')
let itemTamanioChapa = $('<li>')
let itemTipografiaChapa = $('<li>')
let itemNombreMascota = $('<li>')

$(itemProductoChapa).html("Chapa Perzonalizada")
$(divProductoChapa).append(itemProductoChapa, itemModeloChapa, itemTamanioChapa, itemTipografiaChapa, itemNombreMascota)


//Evento Agregar a Carrito
$(agregarFunda).click(fundaAgregada)
$(agregarChapa).click(chapaAgregada)

