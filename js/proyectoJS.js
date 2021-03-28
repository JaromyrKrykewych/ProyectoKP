let usuarioName = ""

$("#ingresoUsuario").click(guardarUsuario) //Funcionó

/*
 *Opciones de productos 
 */

let btnModeloChapa = $("#selectModeloChapa")
let btnTamanioChapa = $("#selectTamanioChapa")
let btnTipografiaChapa = $("#selectTipografiaChapa")
let btnMarcaCelular = $("#selectMarcaCelular")
let btnMaterialFunda = $("#selectMaterialFunda")
let btnBordeFunda = $("#selectBordeFunda")
let btnSamsung = $("#selectSamsung")
let btnMotorola = $("#selectMotorola")
let btnIphone = $("#selectIphone")

/*
* Notificación 'No haz agregado nada al Carrito'
*/
let btnCarrito = $("#btnCarrito")
let modalBody = $("#articulosCarrito")

$(btnCarrito).click(function(e) {
    let modalBodyText = e.target.nextElementSibling.firstElementChild.firstElementChild.children[1].innerText.trim() 
    if ( modalBodyText == '' ) {
        swal("No haz agregado nada a tu carrito")
    } else {
        $(btnCarrito).attr('data-target', '#modalCarrito')
    }     
})



/*
*Agregar productos a carrito de compra 
*/
let btnFunda = $("#addToCart-Funda")
let btnChapa = $("#addToCart-Chapa") 
const productosCarrito = []

$(btnFunda).click(verificarSeleccionFunda)
$(btnChapa).click(verificarSeleccionChapa)

/* 
*Eliminar productos del Carrito 
*/

/*
*Confirmar Pedido 
*/

$("#confirmarPedido").click(confirmarPedido)