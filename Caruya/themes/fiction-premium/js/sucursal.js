async function cargarDatos() {
  const tabla = document.getElementById("datosTabla");

  const listaSucursales = await sucursalService.listar();

  listaSucursales.forEach((sucursal) => {
    let fila =
      "<tr><th>" +
      sucursal.id +
      "</th><td>" +
      sucursal.nombre +
      "</td><th><button type='button' class='btn btn-default btn-main th-btn-border' onclick='eliminar(" +
      sucursal.id +
      ")'>Eliminar</button><a class='btn btn-default btn-main th-btn-border' href='sucursalModificar.html?id=" +
      sucursal.id +
      "'>Modificar</a></th></tr>";

    tabla.innerHTML += fila;
  });
}

async function eliminar(id) {
  await sucursalService.eliminar(id);
  location.reload();
}

cargarDatos();
