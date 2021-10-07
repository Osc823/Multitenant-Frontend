async function registrar() {
  const inputFecha = document.getElementById("fecha");
  const inputDescripcion = document.getElementById("descripcion");
  const inputEstado = document.getElementById("estado");
  const inputIdCliente = document.getElementById("idCliente");
  const inputIdSucursal = document.getElementById("idSucursal");

  const fecha = inputFecha.value;
  const descripcion = inputDescripcion.value;
  const estado = inputEstado.value;
  const idCliente = inputIdCliente.value;
  const idSucursal = inputIdSucursal.value;

  const venta = {
    fecha: fecha,
    descripcion: descripcion,
    estado: estado,
    cliente: {
      id: idCliente,
    },
    sucursal: {
      id: idSucursal,
    },
  };

  console.log(venta);

  //await ventasService.registrar(ventas);

  // window.location.href = "ventas.html";
}

async function cargarDatosClientes() {
  const selectClientes = document.getElementById("idCliente");
  const listaClientes = await clienteService.listar();
  listaClientes.forEach((cliente) => {
    let option =
      "<option value=" + cliente.id + ">" + cliente.nombre + "</option>";

    selectClientes.innerHTML += option;
  });
}

async function cargarDatosSucursales() {
  const selectSucursales = document.getElementById("idSucursal");
  const listaSucursales = await sucursalService.listar();
  listaSucursales.forEach((sucursal) => {
    let option =
      "<option value=" + sucursal.id + ">" + sucursal.nombre + "</option>";

      selectSucursales.innerHTML += option;
  });
}

cargarDatosClientes();
cargarDatosSucursales();
