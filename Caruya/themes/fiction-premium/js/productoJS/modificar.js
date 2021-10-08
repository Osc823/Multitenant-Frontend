const inputId = document.getElementById("id");
const inputNombre = document.getElementById("nombre");
const inputPrecio = document.getElementById("precio");
const inputCantidad = document.getElementById("cantidad");
const inputProveedor = document.getElementById("idProveedor");
const inputSucursal = document.getElementById("idSucursal");

async function cargarProducto() {
  const stringUrl = window.location.href;
  const url = new URL(stringUrl);
  const stringId = url.searchParams.get("id");
  const id = parseInt(stringId);

  const producto = await productoService.buscarPorId(id);

  inputId.value = producto.id;
  inputNombre.value = producto.nombre;
  inputPrecio.value = producto.precio;
  inputCantidad.value = producto.cantidad;
  inputProveedor.value = producto.idProveedor;
  inputSucursal.value = producto.idSucursal;
}

cargarProducto();

async function modificar() {
  const id = inputId.value;
  const nombre = inputNombre.value;
  const precio = inputPrecio.value;
  const cantidad = inputCantidad.value;
  const idProveedor = inputProveedor.value;
  const idSucursal = inputSucursal.value;

  const producto = {
    id: id,
    nombre: nombre,
    precio: precio,
    cantidad: cantidad,
    proveedor: {
      id: idProveedor
    },
    sucursal: {
      id: idSucursal
    }
  };

  await productoService.modificar(producto);

  window.location.href = "listar.html";
}