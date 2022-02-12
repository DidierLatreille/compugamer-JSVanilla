function fadeBody(Segundos){
    $("body").fadeIn(Segundos*1000);
}

$(document).ready(function(){
    fadeBody(1.5);
});

let arrayCarrito = []

arrayCarrito = localStorage.getItem('listado_productos')