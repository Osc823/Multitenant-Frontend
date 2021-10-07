async function cargarDatos() {
    const tabla = document.getElementById("datosTabla");
  
    const listaProveedor = await proveedorService.listar();
  
    listaProveedor.forEach((proveedor) => {
      let fila =
        "<tr><th>" +
        proveedor.id +
        "</th><td>" +
        proveedor.nombre +
        "</th><td>" +
        proveedor.correo +
        "</td><th><button type='button' class='btn btn-default btn-main th-btn-border' onclick='eliminar(" +
        proveedor.id +
        ")'>Eliminar</button><a class='btn btn-default btn-main th-btn-border' href='modificar.html?id=" +
        proveedor.id +
        "'>Modificar</a></th></tr>";
  
      tabla.innerHTML += fila;
    });
  }
  
  async function eliminar(id) {
    await proveedorService.eliminar(id);
    location.reload();
  }
  
  cargarDatos();
  