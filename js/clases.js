class Product {
    containerId
    element

    constructor(containerId){
        this.containerId = containerId
        this.element = $(`#container-${this.containerId}`)
        
    }
}