# Eat And Bite

Eat and Bite es una pagina de comida saludable, la cual se basa en ofrece productos con otros provedores que ofrecen y envian la comida con los repartidores.

### Integrantes:
- Samuel Pulgarin Chavarria
- Michell Paola Gonzalez Comas
- Andrey Hernandez Patiño

---

## Documento de integración (FrontEnd ↔ API)

### Cómo se ejecuta
```bash
npm install
npm start
```
La aplicación se abre con Electron. También se puede abrir con Live Server en VS Code.

### Cómo consume la API hoy (MockAPI)
Por ahora el backend se simula con **MockAPI**. La URL base es:

```
https://6adcddd4fa5e73d4ab2dc4e3.mockapi.io/api/v1
```

Al cargar cada página, `main.js` pide los datos con `fetch()` y `async/await`:

1. Muestra en el área de resultados un mensaje de carga ("Solicitando la información...").
2. Hace la petición dentro de un bloque `try...catch`.
3. **Si sale bien (`try`):** borra el mensaje de carga y recorre el arreglo recibido con `forEach`, creando cada tarjeta con `createElement` y `appendChild`.
4. **Si falla (`catch`):** muestra en el DOM el mensaje "No se pudieron cargar los datos. Intenta más tarde."

| Página | Función en `main.js` | Endpoint de MockAPI | Dónde se muestran los datos |
|---|---|---|---|
| `productos.html` | `crearProducto()` | `GET /Productos` | `#productos-container` |
| `contacto.html` | `crearContacto()` | `GET /Productos/1/Contacto` | `#lista-contactos` |
| `reseña.html` | `LeeReseñas()` | `GET /resenas` | `#lista-resenas` |

### Endpoints que esperamos del Backend (Spring Boot – Nivel 3)
Para reemplazar MockAPI, el equipo de Backend debe exponer estos endpoints. Todos deben responder en JSON.

| Método | URL | Uso en el FrontEnd |
|---|---|---|
| GET | `/api/productos` | Listar los productos en `productos.html` |
| GET | `/api/productos/{id}` | Consultar un producto |
| POST | `/api/productos` | Guardar un producto nuevo |
| GET | `/api/resenas` | Listar las reseñas en `reseña.html` |
| POST | `/api/resenas` | Guardar una reseña nueva |
| GET | `/api/contactos` | Listar los mensajes de contacto en `contacto.html` |
| POST | `/api/contactos` | Guardar un mensaje del formulario de contacto |

**Formato esperado de cada objeto:**

```json
// Producto
{ "id": 1, "nombre": "Ensalada Fit", "precio": 22000, "rating": 4.8,
  "imagen": "https://...", "descripcion": "...", "detalles": "..." }

// Reseña
{ "id": 1, "autor": "Laura Gómez", "producto": "Salmón a la Mantequilla",
  "comentario": "...", "estrellas": 5, "fecha": "2026-03-15" }

// Contacto
{ "id": 1, "nombre": "Ana", "telefono": "3001234567",
  "correo": "ana@correo.com", "mensaje": "..." }
```

### Qué cambia en el FrontEnd cuando llegue Spring Boot
- Reemplazar las URLs de MockAPI en `main.js` por las del backend (ej. `http://localhost:8080/api/productos`).
- El backend debe permitir CORS para el FrontEnd (ej. `@CrossOrigin` en los controladores).
- No hay que cambiar el resto del código: los mensajes de carga y de error, y la forma de pintar los datos, siguen igual.
