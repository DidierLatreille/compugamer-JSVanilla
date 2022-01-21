const carritoCompras = [];
let totalCarrito = 0;
let procesadorElegido;
let gpuElegido;
let ramElegido;
let procesadorElegidoJSON;
let gpuElegidoJSON;
let ramElegidoJSON;
let listadoCarritoPrevio = "";
let listadoCarritoActual = "";

class Procesador{
    constructor(modeloProce,precioTotal){
        this.modelo = modeloProce;
        this.precio = precioTotal;
    }
}
class PlacaVideo{
    constructor(modeloGPU,precioTotal){
        this.modelo = modeloGPU;
        this.precio = precioTotal;
    }
}

class MemRAM{
    constructor(modeloRAM,precioTotal){
        this.modelo = modeloRAM;
        this.precio = precioTotal;
    }
}

const ryzen5_2600 = new Procesador("r52600", 22000);
const ryzen5_3600 = new Procesador("r53600", 30000);
const ryzen5_5600 = new Procesador("r55600", 43000);

const rx580_8gb = new PlacaVideo("RX580", 100000);
const rx6700_xt = new PlacaVideo("RX6700XT", 250000);
const rx6800_xt = new PlacaVideo("RX6800XT", 400000);

const corsair16_3000 = new MemRAM("Corsair16", 10500);
const hyperX16_3200 = new MemRAM("HyperX16", 14500);
const trident16_3600 = new MemRAM("Trident16", 20000);

let listaCPU = [ryzen5_2600, ryzen5_3600, ryzen5_5600];
let listaGPU = [rx580_8gb, rx6700_xt, rx6800_xt];
let listaRAM = [corsair16_3000, hyperX16_3200, trident16_3600];

function pedirModProce(cpuSeleccionado){
    procesadorElegido = listaCPU.find(cpu => cpu.modelo == cpuSeleccionado);
    actualizarCPUCarrito(procesadorElegido);
}

function pedirModGPU(gpuSeleccionado){
    gpuElegido = listaGPU.find(gpu => gpu.modelo == gpuSeleccionado);
    actualizarGPUCarrito(gpuElegido);
}

function pedirModRAM(ramSeleccionado){
    ramElegido = listaRAM.find(ram => ram.modelo == ramSeleccionado);
    actualizarRAMCarrito(ramElegido);
}

function actualizarCPUCarrito(cpu){
    carritoCompras[0] = cpu;
    procesadorElegidoJSON = JSON.stringify(procesadorElegido)
    localStorage.setItem("procesador", procesadorElegidoJSON);
}

function actualizarGPUCarrito(gpu){
    carritoCompras[1]= gpu;
    gpuElegidoJSON = JSON.stringify(gpuElegido);
    localStorage.setItem("gpu", gpuElegidoJSON);
}

function actualizarRAMCarrito(ram){
    carritoCompras[2]= ram;
    ramElegidoJSON = JSON.stringify(ramElegido);
    localStorage.setItem("ram", ramElegidoJSON);
}

function traerListadoStorage(){
    carritoCompras[0] = JSON.parse(localStorage.getItem("procesador"));
    carritoCompras[1] = JSON.parse(localStorage.getItem("gpu"));
    carritoCompras[2] = JSON.parse(localStorage.getItem("ram"));
}

function traerListadoPrevio(){
    traerListadoStorage();
    for (const producto of carritoCompras){
        listadoCarritoPrevio = listadoCarritoPrevio + producto.modelo + " - ";
    }
    document.getElementById("listadoCarritoPrevio").innerHTML = listadoCarritoPrevio;
    actualizarTotalCarrito();
}

function resetearCarritoActual(){
    listadoCarritoActual = "";
}

function actualizarListadoCarrito(){

    for (const producto of carritoCompras){
        listadoCarritoActual = listadoCarritoActual + producto.modelo + " - ";
    }
    document.getElementById("listadoCarritoActual").innerHTML = listadoCarritoActual;
    actualizarTotalCarrito();
    resetearCarritoActual();
}

function actualizarTotalCarrito(){
    totalCarrito = 0;
    for (const producto of carritoCompras){
        totalCarrito = totalCarrito + producto.precio;
    }
    document.getElementById("presupuestoCalculado").innerHTML = totalCarrito;
    console.log(totalCarrito);
}

window.addEventListener('load', function(){
    traerListadoPrevio();
})