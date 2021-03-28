function guardarUsuario() {
    usuarioName = $("#usuario").val()

    $("#pasoUno").hide()
}

/*
*Select Modelo Chapa 
*/
$("#mod1").click(function() {
    $(btnModeloChapa).html($("#mod1").html())
})
$("#mod2").click(function() {
    $(btnModeloChapa).html($("#mod2").html())
})
$("#mod3").click(function() {
    $(btnModeloChapa).html($("#mod3").html())
})
$("#mod4").click(function() {
    $(btnModeloChapa).html($("#mod4").html())
})
$("#mod5").click(function() {
    $(btnModeloChapa).html($("#mod5").html())
})
$("#mod6").click(function() {
    $(btnModeloChapa).html($("#mod6").html())
})
$("#mod7").click(function() {
    $(btnModeloChapa).html($("#mod7").html())
})
$("#mod8").click(function() {
    $(btnModeloChapa).html($("#mod8").html())
})

/*
*Select Tamaño Chapa 
*/
$("#tamanio1").click(function() {
    $(btnTamanioChapa).html($("#tamanio1").html())
})
$("#tamanio2").click(function() {
    $(btnTamanioChapa).html($("#tamanio2").html())
})

/*
*Select Tipografía Chapa 
*/
$("#tipografia1").click(function() {
    $(btnTipografiaChapa).html($("#tipografia1").html())
})
$("#tipografia2").click(function() {
    $(btnTipografiaChapa).html($("#tipografia2").html())
})
$("#tipografia3").click(function() {
    $(btnTipografiaChapa).html($("#tipografia3").html())
})
$("#tipografia4").click(function() {
    $(btnTipografiaChapa).html($("#tipografia4").html())
})
$("#tipografia5").click(function() {
    $(btnTipografiaChapa).html($("#tipografia5").html())
})
$("#tipografia6").click(function() {
    $(btnTipografiaChapa).html($("#tipografia6").html())
})
$("#tipografia7").click(function() {
    $(btnTipografiaChapa).html($("#tipografia7").html())
})
$("#tipografia8").click(function() {
    $(btnTipografiaChapa).html($("#tipografia8").html())
})
$("#tipografia9").click(function() {
    $(btnTipografiaChapa).html($("#tipografia9").html())
})
$("#tipografia10").click(function() {
    $(btnTipografiaChapa).html($("#tipografia10").html())
})
$("#tipografia11").click(function() {
    $(btnTipografiaChapa).html($("#tipografia11").html())
})
$("#tipografia12").click(function() {
    $(btnTipografiaChapa).html($("#tipografia12").html())
})

/*
*Select Marca Celular 
*/
$("#marca1").click(function() {
    $(btnMarcaCelular).html($("#marca1").html())
})
$("#marca1").click(function() {
    $("#optionsSamsung").slideDown()
    $("#optionsMotorola").css("display", "none")
    $("#optionsIphone").css("display", "none")
})
$("#marca2").click(function() {
    $(btnMarcaCelular).html($("#marca2").html())
})
$("#marca2").click(function() {
    $("#optionsMotorola").slideDown()
    $("#optionsSamsung").css("display", "none")
$("#optionsIphone").css("display", "none")
})
$("#marca3").click(function() {
    $(btnMarcaCelular).html($("#marca3").html())
})
$("#marca3").click(function() {
    $("#optionsIphone").slideDown()
    $("#optionsSamsung").css("display", "none")
    $("#optionsMotorola").css("display", "none")
})

/*
*Select Material Funda 
*/
$("#material1").click(function() {
    $(btnMaterialFunda).html($("#material1").html())
})
$("#material2").click(function() {
    $(btnMaterialFunda).html($("#material2").html())
})

/*
*Select Borde Funda 
*/
$("#borde1").click(function() {
    $(btnBordeFunda).html($("#borde1").html())
})
$("#borde2").click(function() {
    $(btnBordeFunda).html($("#borde2").html())
})

/*
*Select Modelos Samsung 
*/
$("#samsung1").click(function() {
    $(btnSamsung).html($("#samsung1").html())
})
$("#samsung2").click(function() {
    $(btnSamsung).html($("#samsung2").html())
})
$("#samsung3").click(function() {
    $(btnSamsung).html($("#samsung3").html())
})
$("#samsung4").click(function() {
    $(btnSamsung).html($("#samsung4").html())
})
$("#samsung5").click(function() {
    $(btnSamsung).html($("#samsung5").html())
})
$("#samsung6").click(function() {
    $(btnSamsung).html($("#samsung6").html())
})
$("#samsung7").click(function() {
    $(btnSamsung).html($("#samsung7").html())
})
$("#samsung8").click(function() {
    $(btnSamsung).html($("#samsung8").html())
})

/*
*Select Modelo Motorola 
*/
$("#motorola1").click(function() {
    $(btnMotorola).html($("#motorola1").html())
})
$("#motorola2").click(function() {
    $(btnMotorola).html($("#motorola2").html())
})
$("#motorola3").click(function() {
    $(btnMotorola).html($("#motorola3").html())
})
$("#motorola4").click(function() {
    $(btnMotorola).html($("#motorola4").html())
})
$("#motorola5").click(function() {
    $(btnMotorola).html($("#motorola5").html())
})

/*
*Select Modelo Iphone 
*/
$("#iphone1").click(function() {
    $(btnIphone).html($("#iphone1").html())
})
$("#iphone2").click(function() {
    $(btnIphone).html($("#iphone2").html())
})
$("#iphone3").click(function() {
    $(btnIphone).html($("#iphone3").html())
})
$("#iphone4").click(function() {
    $(btnIphone).html($("#iphone4").html())
})
$("#iphone5").click(function() {
    $(btnIphone).html($("#iphone5").html())
})
$("#iphone6").click(function() {
    $(btnIphone).html($("#iphone6").html())
})

/* const restaurarSelectoresFunda = () => {
    $(btnMarcaCelular).text() = "Marca Celular"
    $(btnMaterialFunda).text() = "Material Funda"
    $(btnBordeFunda).text() = "Borde Funda"
    $(btnSamsung).text() = "Modelo Samsung"
    $(btnMotorola).text() = "Modelo Motorola"
    $(btnIphone).text() = "Modelo Iphone"
} */

const addFundaToCart = () => {
    const productoFunda = {
        articulo: 'Funda',
        marca : $(btnMarcaCelular).text(),
        modelo : '',
        materialFunda : $(btnMaterialFunda).text(),
        bordeFunda : $(btnBordeFunda).text(),
        showInCart : showFundaInCart = () => {
            const articulo = 
                `<div class="divProductInCart">
                    <h1>${productoFunda.articulo} Perzonalizada</h1>
                    <div>Marca de Celular:<br> ${productoFunda.marca}</div>
                    <div>Modelo:<br> ${productoFunda.modelo}</div>
                    <div>Material de Funda:<br> ${productoFunda.materialFunda}</div>
                    <div>Borde de Funda:<br> ${productoFunda.bordeFunda}</div>
                    <input type="button" value="X">
                </div>`
                $("#articulosCarrito").append(articulo)
        } 
    }
    if ( $(btnMarcaCelular).html() == "Samsung" ) {
        productoFunda.modelo = $(btnSamsung).text()
    } else if ( $(btnMarcaCelular).html() == "Motorola" ) {
        productoFunda.modelo = $(btnMotorola).text()
    } else if ( $(btnMarcaCelular).html() == "Iphone" ) {
        productoFunda.modelo = $(btnIphone).text()
    }

    productosCarrito.push(productoFunda)
    productoFunda.showInCart()
}

const verificarSeleccionFunda = () => {
    if ( $(btnMarcaCelular).text().trim() == "Marca Celular" || $(btnSamsung).text().trim() == "Modelo Samsung" &&
    $(btnMotorola).text().trim() == "Modelo Motorola" && $(btnIphone).text().trim() == "Modelo Iphone" ||
    $(btnMaterialFunda).text().trim() == "Material Funda" || $(btnBordeFunda).text().trim() == "Borde Funda") {
        swal("Por Favor, Selecciona una opción de cada selector")
    } else {
        addFundaToCart()
    }
}

const addChapaToCart = () => {
    const productoChapa = {
        articulo: 'Chapa',
        modelo : $(btnModeloChapa).text(),
        tamanio : $(btnTamanioChapa).text(),
        tipografia: $(btnTipografiaChapa).text(),
        mascota: $("#nombreMascota").val(),
        showInCart : showChapaInCart = () => {
            const articulo = 
                `<div class="divProductInCart">
                    <h1>${productoChapa.articulo} Perzonalizada</h1>
                    <div>Modelo:<br> ${productoChapa.modelo}</div>
                    <div>Tamaño Chapa:<br> ${productoChapa.tamanio}</div>
                    <div>Tipografía:<br> ${productoChapa.tipografia}</div>
                    <div>Tu Mascota se llama:<br> ${productoChapa.mascota}</div>
                    <input type="button" value="X">
                </div>`
                $("#articulosCarrito").append(articulo)    
        }
    }
    productosCarrito.push(productoChapa)
    productoChapa.showInCart()
}

/* const restaurar = () => {
    $(btnModeloChapa).text() = "Modelo Chapa"
} */

const verificarSeleccionChapa = () => {
    if ( $(btnModeloChapa).text().trim() == "Modelo Chapa" || $(btnTamanioChapa).text().trim() == "Tamaño Chapa" ||
    $(btnTipografiaChapa).text().trim() == "Tipografía" || $("#nombreMascota").val() == "" ) {
        swal("Por Favor, Selecciona una opción de cada selector")       
    } else {
        addChapaToCart()
        /* restaurar() */
    }
}

/*
*Confirmar Pedido 
*/

const confirmarPedido = () => {
    //Acciones en el modal
    $(modalBody).text("")
    $("#modalCarrito").modal('toggle')
    $(btnCarrito).attr('data-target', '')
    //Procesar pedido
    for (i=0; i<productosCarrito.length; i++) {
        console.log(productosCarrito[i].articulo)
        if (productosCarrito[i].articulo == "Funda" ){
            console.log("compraste una Funda")
            const articuloFunda = `<div>Funda Personalizada para ${productosCarrito[i].modelo} con funda ${productosCarrito[i].materialFunda} y borde ${productosCarrito[i].bordeFunda}</div>`
            $("#pedidoConfirmado").append(articuloFunda)
        } else if (productosCarrito[i].articulo == "Chapa" ){
            console.log("compraste una Chapa")
            const articuloChapa = `<div>Chapa Personalizada de ${productosCarrito[i].modelo}, de tamaño ${productosCarrito[i].tamanio} y tipografia ${productosCarrito[i].tipografia}</div>`
            $("#pedidoConfirmado").append(articuloChapa)
        }
        $(document).append(articuloFunda)
    }
}