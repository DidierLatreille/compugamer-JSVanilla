let totalCarrito = parseInt(localStorage.getItem("total_carrito_storage"));
let modelos = [];
let listaProductos = [];
const URLProductos = "js/productos.json";

function comprobarEnMemoria(){
    if(localStorage.getItem("total_carrito_storage") === null){
        localStorage.setItem("total_carrito_storage", 0);
    }
    
    modelos.push(localStorage.getItem("listado_productos"));
    
    document.getElementsByClassName("total_carrito")[0].innerHTML = "$"+localStorage.getItem("total_carrito_storage");
    document.getElementsByClassName("lista_productos_carrito")[0].innerHTML = localStorage.getItem("listado_productos");
}


function ordenarListaProductos(){
    listaProductos.sort(function (a, b){
        return (a.precio - b.precio)
    })
}

function crearCards(){
    let i = 0;
    for(const producto of listaProductos){
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

function actualizarCarrito(){
    localStorage.setItem("total_carrito_storage", totalCarrito);
    localStorage.setItem("listado_productos", modelos.join(" - "));
    document.getElementsByClassName("total_carrito")[0].innerHTML = "$"+totalCarrito;
    document.getElementsByClassName("lista_productos_carrito")[0].innerHTML = modelos.join(" - ");
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
    localStorage.setItem("total_carrito_storage", totalCarrito);
    localStorage.setItem("listado_productos", modelos.join(" - "));
    actualizarCarrito();   
}

function fadeBody(Segundos){
    $("body").fadeIn(Segundos*1000);
}

$(document).ready(function(){
    comprobarEnMemoria();
    traerProductos();
    fadeBody(1.5);
});