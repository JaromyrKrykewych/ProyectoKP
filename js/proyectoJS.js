let usuarioName = ""

/* $(document).ready(function() {       //Funciona
    $(".box_carrito").hide()
}) */

$("#ingresoUsuario").click(guardarUsuario) //Funcionó

let btnModeloChapa = $("#selectModeloChapa")
let btnTamanioChapa = $("#selectTamanioChapa")
let btnTipografiaChapa = $("#selectTipografiaChapa")
let btnMarcaCelular = $("#selectMarcaCelular")
let btnMaterialFunda = $("#selectMaterialFunda")
let btnBordeFunda = $("#selectBordeFunda")
let btnSamsung = $("#selectSamsung")
let btnMotorola = $("#selectMotorola")
let btnIphone = $("#selectIphone")

/* if ($(btnMarcaCelular).html() == "Samsung") {
    console.log("carro")
    //$("#optionsSamsung").slideDown(1000)
} */

/*let optionsModeloChapa = $("#optionsModeloChapa")
let modelo = $(optionsModeloChapa).html()
let array = $(modelo).toArray()
let arrayModelo = [] */
/* for (let i=0; i<array.length; i++) {
    arrayModelo = [array[0], array[2], array[4], array[6], array[8], array[10], array[12], array[14]]
    if (i % 2 == 0) {
        console.log(array[i]) 
    }
}
for (let i=0; i<arrayModelo.length; i++){
    console.log(arrayModelo[2])
    arrayModelo[0].addEventListener("click", function() {   //no funciona
        console.log("funciona")
    })
} */


let chapa = new Product("chapa")
console.log(chapa.element)
let funda = new Product("funda")
console.log(funda.element)