
//-----------------ejercicio de entrega: Arrays--------------------------------//


console.log('Carrito de compras de la Joyeria');

//interaccion con el usuario-----------------//

let nombre = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
alert("Hola " + nombre + " " + apellido);
alert("consulte nuestros productos");


const Anillos=[     
{
        nombre: "anilloOro",
        tipo :"oro",
        accesorio : "ninguno",
        precio : "1500",
        stock : "20",
},    
{

    
        nombre : "anilloDiamantes",
        tipo : "oro",
        accesorio : "diamantes",
        precio : "1600",
        stock : "10",
},        	
{    
    
        nombre : "anilloPlata",
        tipo : "plata",
        accesorio : "ninguno",
        precio : "2300",
        stock : "20",
},        	
{    
    
        nombre : "anilloRegalo",
        tipo : "quirurgico",
        accesorio : "fantasia",
        precio : "0",
        stock : "100",
},        	
{    
    
        nombre : "anilloOnice",
        tipo : "onice",
        accesorio : "ninguno",
        precio : "2000",
        stock : "10",
},        	
{    
    
        nombre : "anilloPurpura",
        tipo : "platino",
        accesorio : "rubi",
        precio : "4000",
        stock : "30",
},        	
{    
    
        nombre : "anilloSello",
        tipo : "oro",
        accesorio : "ninguno",
        precio : "2500",
        stock : "10",
    }    	
    ];

alert("para consultar producto  y precio ingrese 1, para consultar stock ingrese 2 o A para consulta por nombre");
let consultaProducto = parseInt(prompt("ingrese"));

if (consultaProducto==1){


for (const anillo of Anillos){
    alert("producto: " + anillo.nombre +" y su precio es: " + anillo.precio)}
};

if (consultaProducto==2) {

        for (const anillo of Anillos){
    alert("producto: " + anillo.nombre + " tenemos: " + anillo.stock + " unidades")}
};



let consultaNombre= prompt("ingrese el nombre del anillo que desea comprar");

let anilloEncontrado=Anillos.find((anillo)=> anillo.nombre==consultaNombre);

console.log(anilloEncontrado);


alert("usted ingreso: " + anilloEncontrado);
