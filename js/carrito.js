let totalCarrito = 0;
let modelos = [];

function comprobarEnMemoria(){
    if(localStorage.getItem("listado_productos") === null){
        document.getElementsByClassName("total_carrito")[0].innerHTML = "$0";
        document.getElementsByClassName("lista_productos_carrito")[0].innerHTML = "Carrito Vacio";
    } else if(localStorage.getItem("listado_productos") === ""){
        document.getElementsByClassName("total_carrito")[0].innerHTML = "$0";
        document.getElementsByClassName("lista_productos_carrito")[0].innerHTML = "Carrito Vacio";
    } else{
        modelos = JSON.parse(localStorage.getItem("listado_productos"));
        document.getElementsByClassName("total_carrito")[0].innerHTML = "$"+localStorage.getItem("total_carrito_storage");
        document.getElementsByClassName("lista_productos_carrito")[0].innerHTML = localStorage.getItem("listado_productos");
    }
    crearCarrito();
}

function actualizarCarrito(){
    document.getElementsByClassName("total_carrito")[0].innerHTML = "$"+totalCarrito;
    document.getElementsByClassName("lista_productos_carrito")[0].innerHTML = modelos.join(" - ");
}

function vaciarCarrito(){
    modelos = [];
    totalCarrito=0;
    localStorage.clear();
    actualizarCarrito();
    $(".cardCarrito").remove();
}

function fadeBody(Segundos){
    $("body").fadeIn(Segundos*1000);
}

function crearCarrito(){
    for(const producto of modelos){
        if(producto != null){
            $(`#cajaCarrito`).append(` <div>
            <h3 class="card_title rainbow_text_animated"> ${producto.modelo}</h3>
            <img src=${producto.portada} class="card_portada" alt="imagenFachera">
            <p class="card_price"> $${producto.precio}</p>
            <button class="card_cantidad" >${producto.cantidad}</button>
            </div>`).find('div:last').addClass('cardCarrito');
        }
    }
}


// LOADING //
$(document).ready(function(){
    comprobarEnMemoria();
    fadeBody(1.5);
});
