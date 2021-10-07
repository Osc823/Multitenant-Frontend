async function cargarDatos(){
    const tabla = document.getElementById("datosTabla");

    const listaProductos = await productoService.listar();

    listaProductos.forEach((producto) => {
        let fila =
        "<tr><th>" +
        producto.id  +
        "</th><td>" +
        producto.nombre +
        "</th><td>" +
        producto.precio +
        "</th><td>" +
        producto.cantidad +
        "</th><td>" +
        proveedor.nombre +
        "</th><td>" +
       sucursal.nombre +
        "</td><th><button type='button' class='btn btn-default btn-main th-btn-border' onclick='eliminar(" +
        producto.id +
        ")'>Eliminar</button><a class='btn btn-default btn-main th-btn-border' href='modificar.html?id=" +
        producto.id +
        "'>Modificar</a></th></tr>";

        tabla.innerHTML += fila;
    });
   }

async function eliminar(id){
   await productoService.eliminar(id);
   location.reload();
}

cargarDatos();
