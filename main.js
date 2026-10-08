// arreglos y objetos en productos 
 const productos1 = [
{nombre: 'ensalada fit ', precio : 22000},
{nombre: 'wrap integral ', precio : 24000},
{nombre: 'protein bowl ', precio : 28000},
{nombre: 'sushie saludable ', precio : 26000},
{nombre: 'poke bowl ', precio : 27000},
{nombre: 'pizza integral ', precio : 24500},
{nombre: 'tostada de aguacate ', precio : 18000},
]
productos1.push({nombre: 'pie de manzana', precio: 18000});
productos1.push({nombre: 'te milenario', precio: 28000});
// uso del filter 
const productosCaros = productos1.filter (p=>p.precio>25000);
console.log(productosCaros);
// captura de eventos y datos (javascript) contacto 
// solo se ejecuta en la pagina de contacto (donde existe el campo telefono)
let telefono = document.getElementById("telefono");
if (telefono) {
    let nombre = document.getElementById("nombre");
    nombre.textContent = "mi nombre Completo";
    telefono.textContent = "222333333";
    let correo = document.getElementById("Correo");
    correo.textContent = "mmmm@icloud.com";
    let comentario = document.getElementById("Mensaje");
    comentario.textContent = "Este no es un mensaje de prueba se está comunicando con servicio al cliente";
}

// botones  de contacto html
const botonEnviar = document.querySelector(".btn-submit");
if (botonEnviar) {
    botonEnviar.addEventListener("click", () => alert("Mensaje enviado correctamente"));
}

const botonEliminar = document.querySelector(".btn-reset");
if (botonEliminar) {
    botonEliminar.addEventListener("click", (event) => {
        if (!confirm("¿Seguro desea limpiar el formulario?")) {
            event.preventDefault();
        }
    });
}

// reseñas manejo del dom
const formulario = document.querySelector(".review-form");
const estadoMensaje = document.querySelector("#mensaje-estado");
if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombreFormulario = document.getElementById("nombre").value.trim();
        const selectProducto = document.getElementById("producto");
        const productoFormulario = selectProducto.options[selectProducto.selectedIndex].text;

        estadoMensaje.textContent = `Gracias por su comentario ${nombreFormulario}, agradecemos su calificación en ${productoFormulario}`;
        estadoMensaje.style.color = "green";
        estadoMensaje.style.fontFamily = "sans-serif";

        formulario.reset();
    }); 
}
