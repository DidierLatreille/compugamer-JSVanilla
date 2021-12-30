//---------------------------------CPU--------------------------------------------//

class procesador{
    constructor(modeloProce,precioTotal){
        this.modelo = modeloProce;
        this.precio = precioTotal;
    }

    calcularPrecio(){
        switch (this.modelo){
            case 'Ryzen 5 2600':
                this.precio = 22000;
                break;
            case 'Ryzen 5 3600':
                this.precio = 36000;
                break;
            case 'Ryzen 5 5600':
                this.precio = 43000;
                break;
            default: alert("algo hicimos mal");
        }
    }
}

function pedirModProce(){
    let opcionMenuProce;
    let modProce;
    do {opcionMenuProce = parseInt(prompt("Elige un procesador:\n" + "1. Ryzen 5 2600 ($22.000)\n" + "2. Ryzen 5 3600($30.000)\n" + "3. Ryzen 5 5600($43.000)"));}
    while (opcionMenuProce < 1 || opcionMenuProce > 3 || Number.isNaN(opcionMenuProce));

    switch(opcionMenuProce){
        case 1:
            modProce = "Ryzen 5 2600";
            break;
        case 2:
            modProce = "Ryzen 5 3600";
            break;
        case 3:
            modProce = "Ryzen 5 5600";
            break;
        default: alert("algo hicimos mal");
    }
    return modProce;
}

let modeloProceElegido = pedirModProce();

const procesadorElegido = new procesador(modeloProceElegido);

procesadorElegido.calcularPrecio();

console.log(procesadorElegido);

//---------------------------------GPU--------------------------------------------//

class placaVideo{
    constructor(modeloGPU,precioTotal){
        this.modelo = modeloGPU;
        this.precio = precioTotal;
    }

    calcularPrecio(){
        switch (this.modelo){
            case 'RX 580 8GB':
                this.precio = 100000;
                break;
            case 'RX 6700 XT':
                this.precio = 250000;
                break;
            case 'RX 6800 XT':
                this.precio = 400000;
                break;
            default: alert("algo hicimos mal");
        }
    }
}

function pedirModGPU(){
    let opcionMenuGPU;
    let modGPU;
    do {opcionMenuGPU = parseInt(prompt("Elige una placa de video:\n" + "1. RX 580 8GB ($100.000)\n" + "2. RX 6700 XT($250.000)\n" + "3. RX 6800 XT($400.000)"));}
    while (opcionMenuGPU < 1 || opcionMenuGPU > 3 || Number.isNaN(opcionMenuGPU));

    switch(opcionMenuGPU){
        case 1:
            modGPU = "RX 580 8GB";
            break;
        case 2:
            modGPU = "RX 6700 XT";
            break;
        case 3:
            modGPU = "RX 6800 XT";
            break;
        default: alert("algo hicimos mal");
    }
    return modGPU;
}

let modeloGPUElegido = pedirModGPU();

const gpuElegido = new placaVideo(modeloGPUElegido);

gpuElegido.calcularPrecio();

console.log(gpuElegido);

//---------------------------------RAM--------------------------------------------//

class memRAM{
    constructor(modeloRAM,precioTotal){
        this.modelo = modeloRAM;
        this.precio = precioTotal;
    }

    calcularPrecio(){
        switch (this.modelo){
            case 'Corsair 16GB 3000MHZ':
                this.precio = 10500;
                break;
            case 'HyperX 16GB 3200MHZ':
                this.precio = 14500;
                break;
            case 'Trident 16GB 3600MHZ':
                this.precio = 20000;
                break;
            default: alert("algo hicimos mal");
        }
    }
}

function pedirModRAM(){
    let opcionMenuRAM;
    let modRAM;
    do {opcionMenuRAM = parseInt(prompt("Elige una memoria RAM:\n" + "1. Corsair 16GB 3000MHZ($10.500)\n" + "2. HyperX 16GB 3200MHZ($14.500)\n" + "3. Trident 16GB 3600MHZ($20.000)"));}
    while (opcionMenuRAM < 1 || opcionMenuRAM > 3 || Number.isNaN(opcionMenuRAM));

    switch(opcionMenuRAM){
        case 1:
            modRAM = "Corsair 16GB 3000MHZ";
            break;
        case 2:
            modRAM = "HyperX 16GB 3200MHZ";
            break;
        case 3:
            modRAM = "Trident 16GB 3600MHZ";
            break;
        default: alert("algo hicimos mal");
    }
    return modRAM;
}

let modeloRAMElegido = pedirModRAM();

const ramElegido = new memRAM(modeloRAMElegido);

ramElegido.calcularPrecio();

console.log(ramElegido);

//--------------------------CARRITO----------------------------

//function Carrito(precioCPU,precioGPU,precioRAM){
//    this.total = precioCPU + precioGPU + precioRAM;
//}

//const carritoCompras = new Carrito(procesadorElegido.precio,GPUElegido.precio,RAMElegido.precio);
//console.log(carritoCompras);
//document.getElementById("presupuestoCalculado").innerHTML = carritoCompras.total;

//No estoy seguro de que este bien organizado el codigo.-----------
//La definicion de clases y objetos se puede hacer todo junto arriba, y las llamadas juntas abajo no?-----------

//Procedo a hacer el Desafio de la clase 6, y agrego un Array, que sea basicamente, un carrito de compras.

const carritoCompras = [];
carritoCompras.push(procesadorElegido);
carritoCompras.push(gpuElegido);
carritoCompras.push(ramElegido);

console.log(carritoCompras);

let totalCarrito = 0;

for (const producto of carritoCompras){
    totalCarrito = totalCarrito + producto.precio;
}

document.getElementById("presupuestoCalculado").innerHTML = totalCarrito;
console.log(totalCarrito);