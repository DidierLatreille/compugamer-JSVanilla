let totalCarrito;
let modelosEnCarrito = [];
let listaProductos = [];
const URLProductos = "js/productos.json";

// MOSTRAR PRODUCTOS //

function ordenarListaProductos(){
    listaProductos.sort(function (a, b){
        return (a.precio - b.precio)
    })
}

function crearCards(){
    let i = 0;
    for(const producto of listaProductos){
        producto.cantidad = 0;
        producto.id = i++;
        $(`#${producto.categoria}`).append(` <div>
            <h3 class="card_title rainbow_text_animated"> ${producto.modelo}</h3>
            <img src=${producto.portada} class="card_portada" alt="imagenFachera">
            <p class="card_price"> $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})" class="card_btn" >Agregar al carrito</button>
            </div>`).find('div:last').addClass('card');
    }
}

function traerProductos(){
    $.getJSON(URLProductos, function (respuesta, estado){
        if (estado === "success"){
            let misDatos = respuesta;
            for(const producto of misDatos){
                listaProductos.push(producto);
            }
        }
    ordenarListaProductos();
    crearCards();
    });
}
// CARRITO //

function carritoVacio(){
    if(localStorage.getItem("total_carrito_storage") === null){
        localStorage.setItem("total_carrito_storage", 0);
    }
}

function traerTotalMem(){
    totalCarrito = parseInt(localStorage.getItem("total_carrito_storage"));
}

function traerCarritoMem(){
    if(totalCarrito === 0){
        modelosEnCarrito = [];
    }
    else{
        modelosEnCarrito = JSON.parse(localStorage.getItem("listado_productos"));
    }
}

carritoVacio();
traerTotalMem();
traerCarritoMem();

function actualizarCarrito(){
    localStorage.setItem("total_carrito_storage", totalCarrito);
    localStorage.setItem("listado_productos", JSON.stringify(modelosEnCarrito));
}

function calcularTotal(){
    totalCarro = 0;
    for(const elemento of modelosEnCarrito){
        if(elemento != null){
            totalCarro += (elemento.cantidad * elemento.precio);
        }
    }
    return totalCarro;
}

function agregarAlCarrito(pos){
    modelosEnCarrito[pos] = listaProductos[pos];
    (modelosEnCarrito[pos].cantidad)++;
    totalCarrito = calcularTotal();
    actualizarCarrito();
}

function fadeBody(Segundos){
    $("body").fadeIn(Segundos*1000);
}

$(document).ready(function(){
    traerProductos();
    fadeBody(1.5);
});