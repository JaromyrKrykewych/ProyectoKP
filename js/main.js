//Variables guardarUsuario
    let titulo = document.getElementById("titulo_principal")
    //let titulo = $("#titulo_principal")
    let ingreso = document.getElementById("login_usuario")
   // let ingreso = $("#login_usuario")
    let usuario = document.getElementById("loginUsuario")
    let usuarioName = ""
    let bienvenida = document.createElement("h3")
    let saludo = ""

usuarioRegistrado = document.getElementById("guardarUsuario")
usuarioRegistrado.addEventListener("click", guardarUsuario)

//Variables mostrarOpciones
    let divProductos = document.createElement("div")
        let divFunda = document.createElement("div")
            let titleFunda = document.createElement("h4")
                let titleTextFunda = document.createTextNode("Fundas Personalizadas")
            let imgFunda = document.createElement("img")
            let continuarF = document.createElement("button") //boton para seleccionar producto
                let textoContinuarF = document.createTextNode("Continuar")
            continuarF.appendChild(textoContinuarF)
        let divChapa = document.createElement("div")
            let titleChapa = document.createElement("h4")
                let titleTextChapa = document.createTextNode("Chapas Personalizadas")
            let imgChapa = document.createElement("img")
            let continuarC = document.createElement("button") //boton para seleccionar producto
                let textoContinuarC = document.createTextNode("Continuar")
            continuarC.appendChild(textoContinuarC)
        let divPopsocket = document.createElement("div")
            let titlePopsocket = document.createElement("h4")
                let titleTextPopsocket = document.createTextNode("Popsockets Personalizadas")
            let imgPopsocket = document.createElement("img")
            let continuarP = document.createElement("button") //boton para seleccionar producto
                let textoContinuarP = document.createTextNode("Continuar")
            continuarP.appendChild(textoContinuarP)
    let divCarrito = document.createElement("div")
        let buttonCarrito = document.createElement("button")
            let textButtonCarrito = document.createTextNode("Ver Carrito")
    divCarrito.appendChild(buttonCarrito)
    buttonCarrito.appendChild(textButtonCarrito)
    //Crear Modal
    buttonCarrito.setAttribute("type", "button")
    buttonCarrito.setAttribute("class", "btn")
    buttonCarrito.setAttribute("id", "btnCarrito")
    buttonCarrito.setAttribute("data-toggle", "modal")
    buttonCarrito.setAttribute("data-target", "#modalCarrito")

    let modal = document.createElement("div")
    modal.setAttribute("class", "modal fade")
    modal.setAttribute("id", "modalCarrito")
    modal.setAttribute("tabindex", "-1")
    modal.setAttribute("aria-labelledby", "modalCarritoLabel")
    modal.setAttribute("aria-hidden", "true")
    divCarrito.appendChild(modal)
        let modalDialog = document.createElement("div")
        modalDialog.setAttribute("class", "modal-dialog")
        modal.appendChild(modalDialog)
            let modalContent = document.createElement("div")
            modalContent.setAttribute("class", "modal-content")
            modalDialog.appendChild(modalContent)
                let modalHeader = document.createElement("div")
                modalHeader.setAttribute("class", "modal-header")
                modalContent.appendChild(modalHeader)
                    let modalTitle = document.createElement("h5")
                    modalTitle.setAttribute("class", "modal-title")
                    modalTitle.setAttribute("id", "modalCarritoLabel")
                    modalHeader.appendChild(modalTitle)
                        let textModalTitle = document.createTextNode("Mi Pedido")
                        modalTitle.appendChild(textModalTitle)
                    let buttonClose = document.createElement("button")
                    buttonClose.setAttribute("type", "button")
                    buttonClose.setAttribute("class", "close")
                    buttonClose.setAttribute("data-dismiss", "modal")
                    buttonClose.setAttribute("aria-label","close")
                    modalHeader.appendChild(buttonClose)
                        let spanButton = document.createElement("span")
                        spanButton.setAttribute("aria-hidden", "true")
                        buttonClose.appendChild(spanButton)
                            let spanIcon = document.createTextNode("&times;")
                            spanButton.appendChild(spanIcon)
                let modalBody = document.createElement("div")
                modalBody.setAttribute("class", "modal-body")
                modalContent.appendChild(modalBody)
                let modalFooter = document.createElement("div")
                modalFooter.setAttribute("class", "modal-footer")
                modalContent.appendChild(modalFooter)
                    let firstButton = document.createElement("button")
                    firstButton.setAttribute("type", "button")
                    firstButton.setAttribute("class", "btn btn-secondary")
                    firstButton.setAttribute("data-dismiss", "modal")
                    modalFooter.appendChild(firstButton)
                        let textFirstButton = document.createTextNode("Borrar Carrito")
                        firstButton.appendChild(textFirstButton)
                    let secondButton = document.createElement("button")
                    secondButton.setAttribute("type", "button")
                    secondButton.setAttribute("class", "btn btn-primary")
                    modalFooter.appendChild(secondButton)
                        let textSecondButton = document.createTextNode("Confirmar Pedido")
                        secondButton.appendChild(textSecondButton)           



usuarioRegistrado.addEventListener("click", mostrarOpciones)

//VARIABLES opcionFunda
    //variables Marca Celular
        let selectModelo = document.createElement("select")
        let opcionModelo = document.createElement("option")
        let opcionModeloUno = document.createElement("option")
        let opcionModeloDos = document.createElement("option")
        let opcionModeloTres = document.createElement("option")
        let labelSelect = document.createElement("label")
        let tituloSelect = document.createTextNode("Modelo Celular")
        let tituloModelo = document.createTextNode("Modelo")
        let opcionUno = document.createTextNode("Samsung")
        let opcionDos = document.createTextNode("Iphone")
        let opcionTres = document.createTextNode("Motorola")
        let selectMaterial = document.createElement("Select")
    //Variables Material Funda
        let labelMaterial = document.createElement("label")
        let opcionMaterial = document.createElement("option")
        let opcionMaterialUno = document.createElement("option")
        let opcionMaterialDos = document.createElement("option")
        let nameMaterial = document.createTextNode("Material")
        let tituloMaterial = document.createTextNode("Material Funda")
        let materialUno = document.createTextNode("PC: Plastico Rígido")
        let materialDos = document.createTextNode("TPU: Goma")
    //Variable Bordes Funda
        let selectBordes = document.createElement("select")
        let labelBordes = document.createElement("label")
        let opcionBordes = document.createElement("option")
        let opcionBordesUno = document.createElement("option")
        let opcionBordesDos = document.createElement("option")
        let nameBordes = document.createTextNode("Estilo Borde")
        let tituloBordes = document.createTextNode("Estilo Borde")
        let bordesUno = document.createTextNode("Transparente")
        let bordesDos = document.createTextNode("Negro")
    //Boton Agregar A Carrito
        let agregarF = document.createElement("button")
        let textAgregarF = document.createTextNode("Agregar")
            agregarF.appendChild(textAgregarF)

//El usuario escoge el producto
    continuarF.addEventListener("click", opcionFunda)
    continuarC.addEventListener("click", opcionChapa)
    continuarP.addEventListener("click", opcionPopsocket)

//Variables Selección Funda
    let modeloEscogido = ""
    let materialEscogido = ""
    let bordeEscogido = ""

//Selección Funda
    selectModelo.addEventListener("change", seleccion)
    selectMaterial.addEventListener("change", seleccion)
    selectBordes.addEventListener("change", seleccion)

//Variables Agregar Funda a Carrito
    let productoFunda = new Object //FUNCIONA
    let divProductoFunda = document.createElement("div")
        let itemProducto = document.createElement("div")
        divProductoFunda.appendChild(itemProducto)
            let textItemProducto = document.createTextNode("Funda Perzonalizada")
            itemProducto.appendChild(textItemProducto)
        let itemModelo = document.createElement("div")
        divProductoFunda.appendChild(itemModelo)
            let textItemModelo = document.createTextNode("")
            itemModelo.appendChild(textItemModelo)
        let itemMaterial = document.createElement("div")
        divProductoFunda.appendChild(itemMaterial)
            let textItemMaterial = document.createTextNode("")
            itemMaterial.appendChild(textItemMaterial)
        let itemBorde = document.createElement("div")
        divProductoFunda.appendChild(itemBorde)
            let textItemBorde = document.createTextNode("")
            itemBorde.appendChild(textItemBorde)
    //Atributos
    divProductoFunda.setAttribute("class", "divProductoFunda")
    itemProducto.setAttribute("class", "itemProducto")
    itemModelo.setAttribute("class", "itemModelo")
    itemMaterial.setAttribute("class", "itemMaterial")
    itemBorde.setAttribute("class", "itemBorde")



//Agregar Funda a Carrito
    agregarF.addEventListener("click", agregarCarrito)
