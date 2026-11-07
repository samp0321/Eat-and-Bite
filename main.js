// selectores del DOM de la sección productos
const contenedor = document.getElementById('productos-container');
const filtroPrecio = document.getElementById('filtro-precio');
const inputBuscar = document.getElementById('buscar-producto');
const btnBuscar = document.getElementById('btn-buscar');
const inputNuevoNombre = document.getElementById('nuevo-nombre');
const inputNuevoPrecio = document.getElementById('nuevo-precio');
const inputNuevaDescripcion = document.getElementById('nuevo-descripcion');
const btnGuardarProducto = document.getElementById('btn-guardar-producto');
const mensajeProductos = document.getElementById('mensaje-productos');

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


// Crea las estrellas como elementos: 4.6 -> ★★★★★, 4.4 -> ★★★★☆
function crearEstrellas(rating) {
  const contenedorRating = document.createElement('div');
  contenedorRating.classList.add('producto-rating');

  const llenas = Math.round(rating);
  for (let i = 1; i <= 5; i++) {
    const estrella = document.createElement('span');
    estrella.classList.add('estrella');
    estrella.textContent = i <= llenas ? '★' : '☆';
    contenedorRating.appendChild(estrella);
  }

  const texto = document.createElement('span');
  texto.classList.add('rating-text');
  texto.textContent = `(${rating.toFixed(1)})`;
  contenedorRating.appendChild(texto);

  return contenedorRating;
}


function formatearPrecio(precio) {
  return '$' + precio.toLocaleString('es-CO');
}
 

// Crea la tarjeta de un producto con createElement y appendChild
function crearCard(producto) {
  const card = document.createElement('div');
  card.classList.add('producto-card');

  const imagen = document.createElement('img');
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;

  const info = document.createElement('div');
  info.classList.add('producto-info');

  const titulo = document.createElement('h3');
  titulo.textContent = producto.nombre;

  const descripcion = document.createElement('p');
  descripcion.textContent = producto.descripcion;

  const detalles = document.createElement('p');
  detalles.classList.add('producto-detalles');
  detalles.textContent = producto.detalles;

  const precio = document.createElement('span');
  precio.classList.add('precio');
  precio.textContent = formatearPrecio(producto.precio);

  const botonAgregar = document.createElement('button');
  botonAgregar.classList.add('btn-agregar');
  botonAgregar.textContent = 'Agregar al carrito';
  botonAgregar.addEventListener('click', () => {
    mensajeProductos.textContent = `${producto.nombre} se agregó al carrito`;
  });

  info.appendChild(titulo);
  info.appendChild(crearEstrellas(producto.rating));
  info.appendChild(descripcion);
  info.appendChild(detalles);
  info.appendChild(precio);
  info.appendChild(botonAgregar);

  card.appendChild(imagen);
  card.appendChild(info);

  return card;
}

function renderProductos(lista, orden = 'menor') {
  // se limpia el área de resultados antes de volver a pintar
  contenedor.innerHTML = '';

  if (lista.length === 0) {
    const vacio = document.createElement('p');
    vacio.textContent = 'No se encontraron productos.';
    contenedor.appendChild(vacio);
    return;
  }

  let resultado = [...lista];

  if (orden === 'menor') {
    resultado.sort((a, b) => a.precio - b.precio);
  } else if (orden === 'mayor') {
    resultado.sort((a, b) => b.precio - a.precio);
  } else if (orden === 'extremos') {
    const masCaro = lista.reduce((max, p) => p.precio > max.precio ? p : max);
    const masBarato = lista.reduce((min, p) => p.precio < min.precio ? p : min);
    resultado = masCaro === masBarato ? [masCaro] : [masBarato, masCaro];
  }

  resultado.forEach(producto => {
    contenedor.appendChild(crearCard(producto));
  });
}

// Quita mayúsculas y tildes para comparar: "Salmón" -> "salmon"
function normalizarTexto(texto) {
  return texto.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

// Limpia el buscador y vuelve a pintar todos los productos con el orden elegido
function mostrarTodos() {
  inputBuscar.value = '';
  renderProductos(productos, filtroPrecio.value);
  mensajeProductos.textContent = '';
}

// Busca con filter los productos cuyo nombre contiene el texto escrito
function buscarProductos() {
  const textoEscrito = inputBuscar.value.trim();

  if (textoEscrito === '') {
    mostrarTodos();
    mensajeProductos.textContent = 'Escribe el nombre de un producto para buscar.';
    return;
  }

  const texto = normalizarTexto(textoEscrito);
  const encontrados = productos.filter(p => normalizarTexto(p.nombre).includes(texto));

  renderProductos(encontrados, filtroPrecio.value);
  mensajeProductos.textContent = `Se encontraron ${encontrados.length} producto(s) para "${textoEscrito}"`;
}

// Agrega con push un producto nuevo al arreglo y lo muestra en la lista
function guardarProducto() {
  const nombre = inputNuevoNombre.value.trim();
  const precio = Number(inputNuevoPrecio.value);
  const descripcion = inputNuevaDescripcion.value.trim();

  if (nombre === '' || precio <= 0) {
    mensajeProductos.textContent = 'Escribe un nombre y un precio mayor a 0.';
    return;
  }

  const nuevoProducto = {
    id: productos.length + 1,
    nombre: nombre,
    precio: precio,
    rating: 0, // aún no tiene calificaciones
    imagen: 'img/comida_saludable.jpg',
    descripcion: descripcion || 'Sin descripción.',
    detalles: 'Producto nuevo agregado por el usuario.'
  };

  productos.push(nuevoProducto);

  // se limpia el buscador para que el producto nuevo se vea en la lista
  inputBuscar.value = '';
  renderProductos(productos, filtroPrecio.value);
  mensajeProductos.textContent = `${nuevoProducto.nombre} se guardó correctamente. Ahora hay ${productos.length} productos.`;

  inputNuevoNombre.value = '';
  inputNuevoPrecio.value = '';
  inputNuevaDescripcion.value = '';
}

// solo en productos.html existen el contenedor y el filtro
if (contenedor && filtroPrecio) {
  renderProductos(productos, 'menor');

  // al cambiar el orden se muestran todos los productos ordenados, no solo los buscados
  filtroPrecio.addEventListener('change', mostrarTodos);
  btnBuscar.addEventListener('click', buscarProductos);

  // buscar también con la tecla Enter
  inputBuscar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      buscarProductos();
    }
  });

  // si el usuario borra todo el texto del buscador, vuelve la lista completa
  inputBuscar.addEventListener('input', () => {
    if (inputBuscar.value.trim() === '') {
      mostrarTodos();
    }
  });
  btnGuardarProducto.addEventListener('click', guardarProducto);
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

const botonEliminar = document.querySelector(".btn-reset");
if (botonEliminar) {
    botonEliminar.addEventListener("click", (event) => {
        if (!confirm("¿Seguro que deseas limpiar el formulario?")) {
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

//apartado contacto
const formularioContacto = document.querySelector(".contact-form");
if (formularioContacto) {
    formularioContacto.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const numero = document.getElementById("telefono").value.trim();
        const correo = document.getElementById("Correo").value.trim();
        const mensajeTExto = document.getElementById("Mensaje").value.trim();

        const nuevoContacto = {
            nombre: nombre,
            numero: numero,
            correo: correo,
            mensaje: mensajeTExto
        };

        let listaContactos = document.getElementById("lista-contactos");
        if (!listaContactos) {
            listaContactos = document.createElement("div");
            listaContactos.id = "lista-contactos";
            formularioContacto.parentNode.appendChild(listaContactos);
        }

        const item = document.createElement("div");
        item.classList.add("contacto-usuario");

        const titulo = document.createElement("strong");
        titulo.textContent = `${nuevoContacto.nombre} - ${nuevoContacto.correo}`;

        const telParrafo = document.createElement("p");
        telParrafo.textContent = `Teléfono: ${nuevoContacto.numero}`;

        const mensaje = document.createElement("p");
        mensaje.classList.add("contacto-mensaje");
        mensaje.textContent = nuevoContacto.mensaje;

        item.appendChild(titulo);
        item.appendChild(telParrafo);
        item.appendChild(mensaje);

        listaContactos.appendChild(item);

        let estadoMensaje = document.getElementById("mensaje-estado");
        if (!estadoMensaje) {
            estadoMensaje = document.createElement("p");
            estadoMensaje.id = "mensaje-estado";
            formularioContacto.parentNode.insertBefore(estadoMensaje, formularioContacto);
        }

        estadoMensaje.textContent = `Gracias por escribirnos, ${nuevoContacto.nombre}, nos pondremos en contacto pronto.`;
        estadoMensaje.style.color = "green";
        estadoMensaje.style.fontFamily = "sans-serif";
        estadoMensaje.style.marginTop = "15px";

        formularioContacto.reset();
    });

    // enlazando mockapi con productos usando async 
}

// funcion para mostrar mensajes de carga o de error en el DOM
function mostrarMensaje(contenedorMensaje, texto, color) {
  let mensaje = document.createElement('p');
  mensaje.textContent = texto;
  mensaje.style.color = color;
  mensaje.style.fontFamily = 'sans-serif';
  mensaje.style.textAlign = 'center';
  contenedorMensaje.appendChild(mensaje);
  return mensaje;
}

    let productosApi = [];

async function crearProducto() {
  // mensaje de carga mientras se piden los productos
  contenedor.innerHTML = '';
  let mensajeCarga = mostrarMensaje(contenedor, 'Solicitando la información de los productos...', 'gray');

  try {

    let resultados = await fetch('https://6adcddd4fa5e73d4ab2dc4e3.mockapi.io/api/v1/Productos');


    if (!resultados.ok) {
      throw new Error('Ocurrió un error al consultar la API');
    }

    productosApi = await resultados.json();
    console.log('Productos cargados con éxito: ', productosApi);

    // se borra el mensaje de carga
    mensajeCarga.remove();

    // se pasan los productos de la api al arreglo productos para que buscar y ordenar sigan funcionando
    productos.length = 0;
    productosApi.forEach(producto => {
      producto.precio = Number(producto.precio);
      producto.rating = Number(producto.rating);
      productos.push(producto);
    });
    renderProductos(productos, filtroPrecio.value);

  } catch (error) {
    console.log('Hubo un problema:', error);
    contenedor.innerHTML = '';
    mostrarMensaje(contenedor, 'No se pudieron cargar los datos. Intenta más tarde.', 'red');
  }
}
// solo se cargan los productos en productos.html
if (contenedor) {
  crearProducto();
}

// creacion de api de contacto 

let contactos= [];
let listaContactos = document.getElementById('lista-contactos');

 async function crearContacto(){
  // mensaje de carga mientras se piden los contactos
  let mensajeCarga = mostrarMensaje(listaContactos, 'Solicitando los mensajes de contacto...', 'gray');

  try{
let consultarContacto = await fetch ('https://6adcddd4fa5e73d4ab2dc4e3.mockapi.io/api/v1/Productos/1/Contacto')
 if(!consultarContacto.ok){
  throw new Error ('error al consultar contacto')
  }
 contactos = await consultarContacto.json();
 console.log('contactos cargados exitosamente', contactos);

 // se borra el mensaje de carga
 mensajeCarga.remove();

 if (contactos.length === 0) {
  mostrarMensaje(listaContactos, 'Aún no hay mensajes de contacto guardados.', 'gray');
 }

 // se crea una tarjeta por cada contacto
 contactos.forEach(contacto => {
  let tarjeta = document.createElement('div');
  tarjeta.classList.add('mensaje-contacto-card');

  let nombreContacto = document.createElement('strong');
  nombreContacto.textContent = contacto.nombre;

  let correoContacto = document.createElement('p');
  correoContacto.classList.add('mensaje-contacto-cuerpo');
  correoContacto.textContent = 'Correo: ' + contacto.correo;

  let mensaje = document.createElement('p');
  mensaje.classList.add('mensaje-contacto-cuerpo');
  mensaje.textContent = contacto.mensaje;

  tarjeta.appendChild(nombreContacto);
  tarjeta.appendChild(correoContacto);
  tarjeta.appendChild(mensaje);
  listaContactos.appendChild(tarjeta);
 });

 }catch (error){
  console.log('error al cargar la información de contacto', error)
  mensajeCarga.remove();
  mostrarMensaje(listaContactos, 'No se pudieron cargar los datos. Intenta más tarde.', 'red');
 }
}
// solo se cargan los contactos en contacto.html
if (listaContactos) {
  crearContacto();
}

// filtrar reseñas usando mockapi 
// Variable global para almacenar las reseñas
let reseñas = [];
let listaResenas = document.getElementById('lista-resenas');

async function LeeReseñas() {
  // mensaje de carga mientras se piden las reseñas
  let mensajeCarga = mostrarMensaje(listaResenas, 'Solicitando las reseñas...', 'gray');

  try {

    let leerReseña = await fetch('https://6ae60fcf877d34ccafc2a57f.mockapi.io/api/v1/:endpoint');

    if (!leerReseña.ok) {
      throw new Error('Error al leer reseñas');
    }
    reseñas = await leerReseña.json();
    console.log('Reseñas cargadas exitosamente: ', reseñas);

    // se borra el mensaje de carga
    mensajeCarga.remove();

    // se crea una tarjeta por cada reseña
    reseñas.forEach(reseña => {
      let item = document.createElement('div');
      item.classList.add('resena-usuario');

      let titulo = document.createElement('strong');
      titulo.textContent = `${reseña.autor} - ${reseña.producto}`;

      let estrellas = document.createElement('span');
      estrellas.classList.add('resena-estrellas');
      estrellas.textContent = '★'.repeat(reseña.estrellas);

      let comentario = document.createElement('p');
      comentario.textContent = reseña.comentario;

      item.appendChild(titulo);
      item.appendChild(estrellas);
      item.appendChild(comentario);
      listaResenas.appendChild(item);
    });

  } catch (error) {

    console.log('Error al cargar reseñas de productos:', error);
    mensajeCarga.remove();
    mostrarMensaje(listaResenas, 'No se pudieron cargar los datos. Intenta más tarde.', 'red');
  }
}
// solo se cargan las reseñas en reseña.html
if (listaResenas) {
  LeeReseñas();
}



