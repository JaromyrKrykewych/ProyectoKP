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
*Agregar productos a carrito de compra 
*/

const productosCarrito = []

$("#addToCart-Funda").click(addFundaToCart)
$("#addToCart-Chapa").click(addChapaToCart)


/* 
*Eliminar productos del Carrito 
*/



