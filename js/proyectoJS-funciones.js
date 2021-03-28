function guardarUsuario() {
    usuarioName = $("#usuario").val()
    usuarioEmail = $("#mailUsuario").val()
    
    const regex = new RegExp('\\S+@\\S+\\.\\S+');

    if (!regex.test(usuarioEmail)){return}

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


const deleteProductFromCart = (e) => {
    const id = e.target.parentElement.getAttribute('data-productid')
    let index = 0
    productosCarrito.forEach((item, i) => {
        if (item.parentId === id) index = i
    })
    productosCarrito.splice(index, 1)
    document.getElementById("articulosCarrito").removeChild(e.target.parentElement)
}

 const restaurarSelectoresFunda = () => {
    $(btnMarcaCelular).text("Marca Celular") 
    $(btnMaterialFunda).text("Material Funda") 
    $(btnBordeFunda).text("Borde Funda") 
    $(btnSamsung).text("Modelo Samsung") 
    $(btnMotorola).text("Modelo Motorola") 
    $(btnIphone).text("Modelo Iphone")
}

const restaurarSelectoresChapa = () => {
    $(btnModeloChapa).text("Modelo Chapa")
    $(btnTamanioChapa).text("Tamaño Chapa")
    $(btnTipografiaChapa).text("Tipografía")
    $("#nombreMascota").val("") 
}

const addFundaToCart = () => {
    const productoFunda = {
        productId: Math.floor(Math.random() * Math.floor(1000)),
        articulo: 'Funda',
        precio: 600,
        marca : $(btnMarcaCelular).text(),
        modelo : '',
        materialFunda : $(btnMaterialFunda).text(),
        bordeFunda : $(btnBordeFunda).text(),
        showInCart : showFundaInCart = () => {
            const articulo = 
                `<div class="divProductInCart" data-productid="${productoFunda.productId}">
                    <h1>${productoFunda.articulo} Perzonalizada</h1>
                    <p>$${productoFunda.precio}</p>
                    <div>Marca de Celular:<br> ${productoFunda.marca}</div>
                    <div>Modelo:<br> ${productoFunda.modelo}</div>
                    <div>Material de Funda:<br> ${productoFunda.materialFunda}</div>
                    <div>Borde de Funda:<br> ${productoFunda.bordeFunda}</div>
                    <input type="button" class="btnBorrarProducto" value="X">
                </div>`
                $("#articulosCarrito").append(articulo)
                $("#articulosCarrito .btnBorrarProducto").click(deleteProductFromCart)
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
    restaurarSelectoresFunda()
    swal({
        icon: "success",
      });  
}

const addChapaToCart = () => {
    const productoChapa = {
        productId: Math.floor(Math.random() * Math.floor(1000)),
        articulo: 'Chapa',
        precio: 250,
        modelo : $(btnModeloChapa).text(),
        tamanio : $(btnTamanioChapa).text(),
        tipografia: $(btnTipografiaChapa).text(),
        mascota: $("#nombreMascota").val(),
        showInCart : showChapaInCart = () => {
            const articulo = 
                `<div class="divProductInCart data-productid="${productoChapa.productId}">
                    <h1>${productoChapa.articulo} Perzonalizada</h1>
                    <p>$${productoChapa.precio}</p>
                    <div>Modelo:<br> ${productoChapa.modelo}</div>
                    <div>Tamaño Chapa:<br> ${productoChapa.tamanio}</div>
                    <div>Tipografía:<br> ${productoChapa.tipografia}</div>
                    <div>Tu Mascota se llama:<br> ${productoChapa.mascota}</div>
                    <input type="button" class="btnBorrarProducto" value="X">
                </div>`
                $("#articulosCarrito").append(articulo)
                $("#articulosCarrito .btnBorrarProducto").click(deleteProductFromCart)    
        }
    }
    productosCarrito.push(productoChapa)
    productoChapa.showInCart()
}

const verificarSeleccionFunda = () => {
    if (
        $(btnMarcaCelular).text().trim() == "Marca Celular" || 
        $(btnSamsung).text().trim() == "Modelo Samsung" &&
        $(btnMotorola).text().trim() == "Modelo Motorola" && 
        $(btnIphone).text().trim() == "Modelo Iphone" ||
        $(btnMaterialFunda).text().trim() == "Material Funda" || 
        $(btnBordeFunda).text().trim() == "Borde Funda"
    ) {
        swal("Por Favor, Selecciona una opción de cada selector")
    } else {
        addFundaToCart()
    }
} 

const verificarSeleccionChapa = () => {
    if ( $(btnModeloChapa).text().trim() == "Modelo Chapa" || $(btnTamanioChapa).text().trim() == "Tamaño Chapa" ||
    $(btnTipografiaChapa).text().trim() == "Tipografía" || $("#nombreMascota").val() == "" ) {
        swal("Por Favor, Selecciona una opción de cada selector")       
    } else {
        addChapaToCart()
        restaurarSelectoresChapa()
        swal({
            icon: "success",
          });
    }
}

/*
*Confirmar Pedido 
*/

const confirmarPedido = () => {
    
    $(modalBody).text("")
    $("#modalCarrito").modal('toggle')
    $(btnCarrito).attr('data-target', '')
    $(btnPedidoConfirmado).css('display', 'block')
    $("#mensajeParaCliente").css('display', 'block')
    
    for (i=0; i<productosCarrito.length; i++) {
        if (productosCarrito[i].articulo == "Funda" ){
            const articuloFunda = 
            `<div class="funda-agregada">
                <div>Funda Personalizada</div>
                <div>Modelo Celular: ${productosCarrito[i].modelo}</div>
                <div>Especificaciones: Material ${productosCarrito[i].materialFunda} y borde ${productosCarrito[i].bordeFunda}</div>
                <div>SubTotal: $${productosCarrito[i].precio}</div>
            </div>`
            $("#divPedidoConfirmado .card").append(articuloFunda)
        } else if (productosCarrito[i].articulo == "Chapa" ){
            const articuloChapa = 
            `<div class="chapa-agregada">
                <div>Chapa Personalizada para ${productosCarrito[i].mascota}</div>
                <div>Modelo de Chapa: ${productosCarrito[i].modelo}</div>
                <div>Especificaciones: Tamaño ${productosCarrito[i].tamanio} y tipografia ${productosCarrito[i].tipografia}</div>
                <div>SubTotal: $${productosCarrito[i].precio}</div>
            </div>`
            $("#divPedidoConfirmado .card").append(articuloChapa)
        } 
        $("#mensajeParaCliente").text("Gracias " + usuarioName + ", enviamos un correo electrónico con los datos de tu pedido a tu email: " + usuarioEmail)
         TOTAL += productosCarrito[i].precio;
    }

    $("#total").text("Total: " + TOTAL)
    productosCarrito = []
}

function verificarUsuario() {
    if (usuarioName == "" || usuarioEmail == "") {
        swal("Por Favor, debes ingresar un nombre de usuario y un email para procesar tu pedido")
    } else {
        confirmarPedido()
    }
}

