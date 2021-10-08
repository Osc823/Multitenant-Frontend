async function registrar(){
    const inputNombre = document.getElementById("nombre");
    const inputPrecio = document.getElementById("Precio");
    const inputCantidad = document.getElementById("cantidad");
    const inputIdProveedor = document.getElementById("idProveedor");
    const inputIdSucursal = document.getElementById("idSucursal");

    const nombre = inputNombre;
    const precio = inputPrecio;
    const cantidad = inputCantidad;
    const idProveedor = inputIdProveedor.value;
    const idSucursal = inputIdSucursal.value;

    const producto = {
          nombre: nombre,
          precio: precio,
          cantidad: cantidad,
          proveedor: {
              id: idCliente,
          },
          sucursal: {
              id: idSucursal,
          },
    };

    //await productoService.registar(producto);

    //window.location.href = "listar.html";
}

async function cargarDatosProveedor() {
    const selecProveedor = document.getElementById("idProveedor");
    const listaProveedor = await proveedorService.listar();
    listaProveedor.forEach((proveedor)=> {
        let option =
        "<option value=" + proveedor.id + ">" + proveedor.nombre + "</option>";

        selectProveedor.innerHTML += option;   
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

cargarDatosProveedor();
cargarDatosSucursales();
