class CRectangulo{
    constructor(longitud,ancho){
        this.longitud = longitud;
        this.ancho = ancho;
    }
    calcularArea() {
        return this.longitud * this.ancho;
    }
}

document.querySelector("button").addEventListener("click",()=>{
    event.preventDefault();
    let longitud = parseInt(document.getElementById("long").value);
    let ancho = parseInt(document.getElementById("ancho").value);
    let rectangulo = new CRectangulo(longitud,ancho)
    document.querySelector("p").innerHTML = "El area es: " + rectangulo.calcularArea();
})


