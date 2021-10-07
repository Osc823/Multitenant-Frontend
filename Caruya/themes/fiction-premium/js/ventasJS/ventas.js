async function cargarDatos() {
  const tabla = document.getElementById("datosTabla");

  const listaVentas = await ventasService.listar();

  listaVentas.forEach((venta) => {
    let fila =
      "<tr><th>" +
      venta.id +
      "</th><td>" +
      venta.fecha +
      "</td><td>" +
      venta.descripcion +
      "</td><td>" +
      venta.estado +
      "</td><td>" +
      venta.cliente.nombre +
      "</td><td>" +
      venta.sucursal.nombre +
      "</td><th><button type='button' class='btn btn-default btn-main th-btn-border' onclick='eliminar(" +
      venta.id +
      ")'>Eliminar</button><a class='btn btn-default btn-main th-btn-border' href='ventasModificar.html?id=" +
      venta.id +
      "'>Modificar</a></th></tr>";

    tabla.innerHTML += fila;
  });
}

async function eliminar(id) {
  await ventasService.eliminar(id);
  location.reload();
}

cargarDatos();
