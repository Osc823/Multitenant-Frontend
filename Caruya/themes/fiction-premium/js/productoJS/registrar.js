async function registrar(){
    const inputNombre = document.getElementById("nombre");
    const inputPrecio = document.getElementById("Precio");
    const inputCantidad = document.getElementById("cantidad");
    const nombre = inputNombre;
    const precio = inputPrecio;
    const cantidad = inputCantidad;

    const producto = {
          nombre: nombre,
          precio: precio,
          cantidad: cantidad,
    };

    await productoService.registar(producto);

    window.location.href = "listar.html";
}