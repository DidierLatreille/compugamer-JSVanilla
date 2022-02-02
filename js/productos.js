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
const cpu4 = new Producto("Ryzen 5 5600", "assets/r5_5600.png", 43000, "cpus");

const gpu1 = new Producto("RX 580", "assets/rx_580.png", 100000, "gpus");
const gpu2 = new Producto("RX 6700XT", "assets/rx_6700xt.png", 250000, "gpus");
const gpu3 = new Producto("RX 6800XT", "assets/rx_6800xt.png", 400000, "gpus");

const ram1 = new Producto("Corsair 16GB (3000MHZ)", "assets/corsair_16.png", 10500, "rams");
const ram2 = new Producto("HyperX 16GB (3200MHZ)", "assets/hyperx_16.png", 14500, "rams");
const ram3 = new Producto("Trident 16GB (3600MHZ)", "assets/trident_16.png", 20000, "rams");