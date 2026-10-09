const contenedor = document.getElementById('productos-container');
const filtroPrecio = document.getElementById('filtro-precio');

// arreglos y objetos en productos 
const productos = [
  {
    id: 1,
    nombre: 'Ensalada Fit',
    precio: 22000,
    rating: 4.8,
    imagen: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
    descripcion: 'Mix de hojas verdes con proteína vegetal.',
    detalles: 'Rica en nutrientes, perfecta para mantener tu energía durante el día.'
  },
  {
    id: 2,
    nombre: 'Wrap Integral',
    precio: 24000,
    rating: 4.5,
    imagen: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500',
    descripcion: 'Tortilla integral con pollo y vegetales.',
    detalles: 'Una opción deliciosa y equilibrada para cualquier momento del día.'
  },
  {
    id: 3,
    nombre: 'Protein Bowl',
    precio: 28000,
    rating: 5.0,
    imagen: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500',
    descripcion: 'Arroz integral, salmón y vegetales.',
    detalles: 'Alto en proteína y omega-3, ideal para tu bienestar y salud.'
  },
  {
    id: 4,
    nombre: 'Smoothie Verde',
    precio: 12000,
    rating: 4.7,
    imagen: 'img/bebida_Smoothie-Verde.png',
    descripcion: 'Bebida refrescante con frutas y espinaca.',
    detalles: 'Detox natural para empezar tu día con energía positiva.'
  },
  {
    id: 5,
    nombre: 'Sushi Saludable',
    precio: 26000,
    rating: 4.9,
    imagen: 'img/plato-Sushi-Saludable.png',
    descripcion: 'Rolls integrales con pescado fresco.',
    detalles: 'Sabor oriental con ingredientes premium seleccionados.'
  },
  {
    id: 6,
    nombre: 'Acai Bowl',
    precio: 20000,
    rating: 4.6,
    imagen: 'img/plato_Acai-Bowl.png',
    descripcion: 'Bol de açaí con granola y frutas.',
    detalles: 'Desayuno perfecto, nutritivo y completamente delicioso.'
  },
  {
    id: 7,
    nombre: 'Poké Bowl',
    precio: 27000,
    rating: 5.0,
    imagen: 'img/plato_Poke-Bowl.png',
    descripcion: 'Atún fresco con vegetales y salsa especial.',
    detalles: 'Plato hawaiano auténtico, delicioso y saludable.'
  },
  {
    id: 8,
    nombre: 'Pizza Integral',
    precio: 24500,
    rating: 4.4,
    imagen: 'img/plato-Pizza-Integral.png',
    descripcion: 'Base integral con mozzarella y vegetales frescos.',
    detalles: 'Pizza saludable sin culpa, deliciosa en cada bite.'
  },
  {
    id: 9,
    nombre: 'Tostadas de Aguacate',
    precio: 18000,
    rating: 4.9,
    imagen: 'img/plato_Tostadas-Aguacate.png',
    descripcion: 'Pan integral con aguacate, huevo y tomate.',
    detalles: 'Desayuno nutritivo que te mantendrá satisfecho.'
  },
  {
    id: 10,
    nombre: 'Pollo a la Parrilla',
    precio: 26000,
    rating: 4.7,
    imagen: 'img/plato_Pollo-Parrilla.png',
    descripcion: 'Pechuga de pollo con vegetales asados.',
    detalles: 'Alto en proteína, perfecto para tu rutina fitness.'
  },
  {
    id: 11,
    nombre: 'Tacos de Verdura',
    precio: 19000,
    rating: 4.5,
    imagen: 'img/plato_Tacos-Verdura.png',
    descripcion: 'Tacos con verduras de temporada y salsas caseras.',
    detalles: 'Opción vegana deliciosa y natural.'
  },
  {
    id: 12,
    nombre: 'Tabla de Quesos Gourmet',
    precio: 30000,
    rating: 5.0,
    imagen: 'img/plato_Tabla-Quesos-Gourmet.png',
    descripcion: 'Selección de quesos artesanales con frutas y frutos secos.',
    detalles: 'Tabla premium para compartir o disfrutar en solitario.'
  },
  {
    id: 13,
    nombre: 'Salmón a la Mantequilla',
    precio: 31000,
    rating: 4.8,
    imagen: 'img/plato_Salmon-Mantequilla.png',
    descripcion: 'Filete de salmón con salsa de mantequilla y limón.',
    detalles: 'Omega-3 puro, delicioso y sofisticado.'
  }
];


// Convierte un número como 4.6 en ★★★★★ / ★★★★☆ etc.
function generarEstrellas(rating) {
  const llenas = Math.round(rating);   // 4.6 -> 5, 4.4 -> 4
  const vacias = 5 - llenas;
  return '<span class="estrella">★</span>'.repeat(llenas) +
         '<span class="estrella">☆</span>'.repeat(vacias);
}


function formatearPrecio(precio) {
  return '$' + precio.toLocaleString('es-CO');
}
 

function crearCard(producto) {
  return `
    <div class="producto-card">
      <img src="${producto.imagen}" alt="${producto.nombre}"/>
      <div class="producto-info">
        <h3>${producto.nombre}</h3>
        <div class="producto-rating">
          ${generarEstrellas(producto.rating)}
          <span class="rating-text">(${producto.rating.toFixed(1)})</span>
        </div>
        <p>${producto.descripcion}</p>
        <p class="producto-detalles">${producto.detalles}</p>
        <span class="precio">${formatearPrecio(producto.precio)}</span>
        <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
      </div>
    </div>
  `;
}

function renderProductos(lista) {
  contenedor.innerHTML = lista.map(crearCard).join('');
}
 
function renderProductos(lista, orden = 'menor') {
  let resultado = [...lista];

  if (orden === 'menor') {
    resultado.sort((a, b) => a.precio - b.precio);
  } else if (orden === 'mayor') {
    resultado.sort((a, b) => b.precio - a.precio);
  } else if (orden === 'extremos') {
    const masCaro = lista.reduce((max, p) => p.precio > max.precio ? p : max);
    const masBarato = lista.reduce((min, p) => p.precio < min.precio ? p : min);
    resultado = [masBarato, masCaro];
  }

  contenedor.innerHTML = resultado.map(crearCard).join('');
}

// solo en productos.html existen el contenedor y el filtro
if (contenedor && filtroPrecio) {
  renderProductos(productos, 'menor');

  filtroPrecio.addEventListener('change', () => {
    renderProductos(productos, filtroPrecio.value);
  });
}




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
        if (!confirm("¿Seguro  limpiadesear el formulario?")) {
            event.preventDefault();
        }
    });
}

// reseñas manejo del dom

// APARTADO RESEÑAS



const formulario = document.querySelector(".review-form");
const estadoMensaje = document.querySelector("#mensaje-estado");
if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombreFormulario = document.getElementById("nombre").value.trim();
        const selectProducto = document.getElementById("producto");
        const productoFormulario = selectProducto.options[selectProducto.selectedIndex].text;
        const comentarioFormulario = document.getElementById("comentario").value.trim();
        const estrellasFormulario = document.querySelector('input[name="estrellas"]:checked').value;

        const nuevaResena = {
            nombre: nombreFormulario, 
            producto: productoFormulario, 
            mensaje: comentarioFormulario, 
            estrellas: estrellasFormulario};

        const listaResenas = document.getElementById("lista-resenas");
        const item = document.createElement("div");
        item.classList.add("resena-usuario");

        const titulo = document.createElement("strong");
        titulo.textContent = `${nuevaResena.nombre} - ${nuevaResena.producto}`;

        const estrellas = document.createElement("span");
        estrellas.classList.add("resena-estrellas");
        estrellas.textContent = "★".repeat(nuevaResena.estrellas);

        const mensaje = document.createElement("p");
        mensaje.textContent = nuevaResena.mensaje || "Sin comentario";

        item.appendChild(titulo);
        item.appendChild(estrellas);
        item.appendChild(mensaje);
        listaResenas.appendChild(item);

        estadoMensaje.textContent = `Gracias por su comentario ${nombreFormulario}, agradecemos su calificación en ${productoFormulario}`;
        estadoMensaje.style.color = "green";
        estadoMensaje.style.fontFamily = "sans-serif";

        formulario.reset();
    }); 
    //filtrar reseñas 
    const resenas = [
  {
    id: 1,
    autor: "Laura Gómez",
    comentario: "El Salmón a la Mantequilla estuvo espectacular, fresco y en su punto.",
    estrellas: 5,
    fecha: "2026-03-15"
  },
  {
    id: 2,
    autor: "Carlos Pérez",
    comentario: "Los tacos de verdura tenían buen sazón, aunque la porción fue pequeña.",
    estrellas: 4,
    fecha: "2026-03-18"
  },
  {
    id: 3,
    autor: "Mariana R.",
    comentario: "El Protein Bowl llegó frío, el resto de la comida estuvo normal.",
    estrellas: 3,
    fecha: "2026-03-22"
  },
  {
    id: 4,
    autor: "Felipe M.",
    comentario: "Excelente servicio y la ensalada fit muy fresca y crocante.",
    estrellas: 5,
    fecha: "2026-03-28"
  },
  {
    id: 5,
    autor: "Andrés Silva",
    comentario: "La comida tardó demasiado en llegar y el empaque venía roto.",
    estrellas: 2,
    fecha: "2026-04-01"
  },
  {
    id: 6,
    autor: "Sofía Castro",
    comentario: "La tabla de quesos gourmet superó mis expectativas, deliciosa.",
    estrellas: 5,
    fecha: "2026-04-05"
  },
  {
    id: 7,
    autor: "Julián V.",
    comentario: "Muy insípido el pollo a la parrilla, no volvería a pedirlo.",
    estrellas: 1,
    fecha: "2026-04-06"
  }
];



}
