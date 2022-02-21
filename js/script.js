let totalCarrito;
let modelosEnCarrito = [];
let listaProductos = [];
let listaFiltrada = [];
const URLProductos = "js/productos.json";
let listaProductosPrueba = [];

// MOSTRAR PRODUCTOS //

function ordenarListaProductos(){
    listaProductos.sort(function (a, b){
        return (a.precio - b.precio)
    })
}

function idCantidadCrearCards(){
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

function crearCards(){
    for(const producto of listaProductos){
        $(`#${producto.categoria}`).append(` <div>
            <h3 class="card_title rainbow_text_animated"> ${producto.modelo}</h3>
            <img src=${producto.portada} class="card_portada" alt="imagenFachera">
            <p class="card_price"> $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})" class="card_btn" >Agregar al carrito</button>
            <p></p>
            </div>`).find('div:last').addClass('card');
    }
}

function traerCantidadesActualizadas(){
    if(localStorage.getItem("listadoProductosCant") != null){
        listaProductos = JSON.parse(localStorage.getItem("listadoProductosCant"));
        crearCards();
    }
    else{
        traerProductos();
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
    idCantidadCrearCards();
    });
}

function traerProductosPrueba(){
    $.getJSON(URLProductos, function (respuesta, estado){
        if (estado === "success"){
            let misDatos = respuesta;
            let i = 0;
            for(const producto of misDatos){
                producto.cantidad = 0;
                producto.id = i++;
                listaProductosPrueba.push(producto);
            }
        }
    });
}

function volcarFiltadoListaProductos(){
    listaFiltrada  = JSON.parse(localStorage.getItem("prueba"));
    for(const elemento of listaFiltrada){
        listaProductosPrueba[elemento.id] = elemento;
    }
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

function eliminarVacios(){
    let listadoFiltrado = listaProductos.filter(x => x.cantidad > 0);
    return listadoFiltrado;
}

function agregarAlCarrito(pos){
    modelosEnCarrito[pos] = listaProductos[pos];
    (modelosEnCarrito[pos].cantidad)++;
    totalCarrito = calcularTotal();
    actualizarCarrito();
    eliminarVacios();
    localStorage.setItem("listadoProductosCant", JSON.stringify(listaProductos));
    localStorage.setItem("prueba", JSON.stringify(eliminarVacios()));
}

function fadeBody(Segundos){
    $("body").fadeIn(Segundos*1000);
}

$(document).ready(function(){
    traerCantidadesActualizadas();
    fadeBody(1.5);
});