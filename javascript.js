function init()
{
    programarBotonNavbar();
    // Storage
    localStorage.setItem("Element", "Valor de Element");
}

const precioPantalon = 30;
const precioSkate = 50;
const precioBuzos = 40;
const precioZapatillas = 20;
const precioRemeras = 30;

let contadorProductos = 0;
let precioProductos = 0;

const contador = 1;

function agregarPantalon ()
    {
        console.log("Se agrego un Producto de Pantalon con un valor de $30");
        contadorProductos = contadorProductos + contador;
        precioProductos = precioProductos + precioPantalon;
    }
function agregarSkate ()
    {
        console.log("Se agrego un Producto de Skate con un valor de $50")
        contadorProductos = contadorProductos + contador;
        precioProductos = precioProductos + precioSkate;
    }
function agregarBuzos ()
    {
        console.log("Se agrego un producto de Buzos con un valor de $40")
        contadorProductos = contadorProductos + contador;
        precioProductos = precioProductos + precioBuzos;
    }
function agregarZapatillas ()
    {
        console.log("Se agrego un producto de Zapatillas con un valor de $20")
        contadorProductos = contadorProductos + contador;
        precioProductos = precioProductos + precioZapatillas;
    }
function agregarRemeras ()
    {
        console.log("Se agrego Un producto de Remeras con un valor de $30")
        contadorProductos = contadorProductos + contador;
        precioProductos = precioProductos + precioRemeras;
    }
function pedirOtroProducto ()
    {
        Comprar ();
    }
function precioTotal ()
    {
        console.log(`La cantidad de tus productos es: ${contadorProductos}`);
        console.log(`El Precio de tus productos es ${precioProductos}`);
        alert("Gracias por comprar");
    }


function Comprar ()
{ 
    let Productos = prompt("Bienvenido al carrito! \n Seleccione una opcion: \n Pantalon \n Skate \n Buzos \n Zapatillas \n Remeras \n Ir a la caja \n Volver al menu");

if (Productos === "Pantalon" || "Skate" || "Buzos" || "Zapatillas" || "Remeras" || "Ir a la Caja" || "Volver al menu")
    {
            if (Productos === "Pantalon")
                {
                    agregarPantalon();   
                    pedirOtroProducto();
                }
            else if (Productos === "Skate")
                {
                    agregarSkate();
                    pedirOtroProducto();
                }
            else if (Productos === "Buzos")
                {
                    agregarBuzos();
                    pedirOtroProducto();
                }
            else if (Productos === "Zapatillas")
                {
                    agregarZapatillas();
                    pedirOtroProducto();
                }
            else if (Productos === "Remeras")
                {
                    agregarRemeras();
                    pedirOtroProducto();
                }
            else if (Productos === "Ir a la caja")
                {
                    precioTotal();
                }
            else if (Productos === "Volver al menu")
                {
                    menu();
                }
            else 
                {
                    console.log("Operacion invalida.");
                    Comprar();
                }
                
    }
}

function verCarrito ()
    {
        let totalProductos = contadorProductos;
        let precioTotalProductos = precioProductos;
        console.log(`Su Cantidad de productos en este momento es de: ${totalProductos}`);
        console.log(`El precio de todos los productos en este momento es de: ${precioTotalProductos}`);
        menu()
    }

function menu ()
    {
        let menunav = prompt("Bienvenido al menu \n Por favor seleccione una opcion: \n Comprar \n Ver carrito \n Ir a la caja")
        if (menunav === "Comprar")
        {
            Comprar()
        }
        else if (menunav === "Ver carrito")
        {
            verCarrito ();
        }
        else if (menunav === "Ir a la caja")
        {
            precioTotal () ;
        }
        else
        {
            console.log("Operacion invalida");
            menu ();
        }
    }

menu ()

// DOM

const h4 =
document.getElementsByTagName("h4");

// h4[1].innerHTML="<h4>Seguinos</h4>";

console.log(h4);


// Eventos

function programarBotonNavbar()
{
    const botonNavar = document.querySelector("#boton");

    botonNavar.addEventListener("click",function()
    {
        alert("hice click en el boton")
    } )
}







