let totalCarrito = 0;
let modelos = [];

function comprobarEnMemoria(){
    if(localStorage.getItem("listado_productos") === null){
        document.getElementsByClassName("total_carrito")[0].innerHTML = "$0";
    } else if(localStorage.getItem("listado_productos") === ""){
        document.getElementsByClassName("total_carrito")[0].innerHTML = "$0";
    } else{
        modelos = JSON.parse(localStorage.getItem("listado_productos"));
        document.getElementsByClassName("total_carrito")[0].innerHTML = "$"+localStorage.getItem("total_carrito_storage");
    }
    crearCarrito();
}

function calcularTotal(){
    let totalCarro = 0;
    for(const elemento of modelos){
        if(elemento != null){
            totalCarro += (elemento.cantidad * elemento.precio);
        }
    }
    return totalCarro;
}

function actualizarCarrito(){
    totalCarrito = calcularTotal();
    document.getElementsByClassName("total_carrito")[0].innerHTML = "$"+totalCarrito;
    localStorage.setItem("listado_productos", JSON.stringify(modelos));
    localStorage.setItem("total_carrito_storage", totalCarrito);
}

function vaciarCarrito(){
    modelos = [];
    totalCarrito=0;
    localStorage.clear();
    actualizarCarrito();
    comprobarEnMemoria()
    $(".cardCarrito").remove();
}

function fadeBody(Segundos){
    $("body").fadeIn(Segundos*1000);
}

function crearCarrito(){
    for(const producto of modelos){
        if(producto != null){
            $(`#cajaCarrito`).append(` <div>
            <h3 class="card_title"> ${producto.modelo}</h3>
            <img src=${producto.portada} class="card_portada" alt="imagenFachera">
            <p class="card_price"> $${producto.precio}</p>
            <section class="seccionCantidad">
                <button onclick="restarCantidad(${producto.id})" class="botonCantidad" >-</button>
                <button class="card_cantidad" >${producto.cantidad}</button>
                <button onclick="sumarCantidad(${producto.id})" class="botonCantidad" >+</button>
            </section>
            </div>`).find('div:last').addClass('cardCarrito');
        }
    }
}

function sumarCantidad(id){
    (modelos[id].cantidad)++;
    actualizarCarrito();
    $(".cardCarrito").remove();
    crearCarrito();
}

function restarCantidad(id){
    (modelos[id].cantidad)--;
    if((modelos[id].cantidad) < 1){
        modelos[id] = null
    }
    actualizarCarrito();
    $(".cardCarrito").remove();
    crearCarrito();
}


// LOADING //
$(document).ready(function(){
    comprobarEnMemoria();
    fadeBody(1.5);
});
