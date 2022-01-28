class Producto{
    constructor(modelo,portada,precio,categoria,id){
        this.modelo = modelo;
        this.portada = portada;
        this.precio = precio;
        this.categoria = categoria;
        this.id = id;
    }
}


const cpu1 = new Producto("Ryzen 5 2600", "assets/r5_2600.png", 22000, "cpus");
const cpu2 = new Producto("Ryzen 5 3600", "assets/r5_3600.png", 30000, "cpus");
const cpu3 = new Producto("Ryzen 5 5600", "assets/r5_5600.png", 43000, "cpus");

const gpu1 = new Producto("RX 580", "assets/rx_580.png", 100000, "gpus");
const gpu2 = new Producto("RX 6700XT", "assets/rx_6700xt.png", 250000, "gpus");
const gpu3 = new Producto("RX 6800XT", "assets/rx_6800xt.png", 400000, "gpus");

const ram1 = new Producto("Corsair 16GB (3000MHZ)", "assets/corsair_16.png", 10500, "rams");
const ram2 = new Producto("HyperX 16GB (3200MHZ)", "assets/hyperx_16.png", 14500, "rams");
const ram3 = new Producto("Trident 16GB (3600MHZ)", "assets/trident_16.png", 20000, "rams");

let listaProductos = [cpu1,cpu2,cpu3,gpu1,gpu2,gpu3,ram1,ram2,ram3];

function ordernarListaProductos(){
    listaProductos.sort(function (a, b){
        return (a.precio - b.precio)
    })
}

function crearCards(){
    let i = 0;

    for(const producto of listaProductos){
        producto.id = i++;
        $(`#${producto.categoria}`).append( ` <div>
                                <h3 class="card_title"> ${producto.modelo}</h3>
                                <img src=${producto.portada} class="card_portada" alt="imagenFachera">
                                <p class="card_price"> $${producto.precio}</p>
                                <button onclick="agregarAlCarrito(${producto.id})" class="card_btn" >Agregar al carrito</button>
                                </div>`).find('div:last').addClass('card');  
    }
}

if(localStorage.getItem("total-carrito-storage") === null){
    localStorage.setItem("total-carrito-storage", 0);
}

let totalCarrito = parseInt(localStorage.getItem("total-carrito-storage"));
let modelos = [];
modelos.push(localStorage.getItem("listado_productos"));

document.getElementsByClassName("total-carrito")[0].innerHTML = "$"+localStorage.getItem("total-carrito-storage");
document.getElementsByClassName("lista-productos-carrito")[0].innerHTML = localStorage.getItem("listado_productos");

function actualizarCarrito(){
    localStorage.setItem("total-carrito-storage", totalCarrito);
    localStorage.setItem("listado_productos", modelos.join(" - "));
    document.getElementsByClassName("total-carrito")[0].innerHTML = "$"+totalCarrito;
    document.getElementsByClassName("lista-productos-carrito")[0].innerHTML = modelos.join(" - ");
}
    
function agregarAlCarrito(pos){
    totalCarrito += listaProductos[pos].precio;
    modelos.push(listaProductos[pos].modelo);
    actualizarCarrito();
    return totalCarrito;
}

function vaciarCarrito(){
    modelos = [];
    totalCarrito=0;
    localStorage.setItem("total-carrito-storage", totalCarrito);
    localStorage.setItem("listado_productos", modelos.join(" - "));
    actualizarCarrito();   
}

crearCards();