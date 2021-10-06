const inputId = document.getElementById("id");
const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");

async function cargarProveedor() {
  const stringUrl = window.location.href;
  const url = new URL(stringUrl);
  const stringId = url.searchParams.get("id");
  const id = parseInt(stringId);

  const proveedor = await proveedorService.buscarPorId(id);

  inputId.value = proveedor.id;
  inputNombre.value = proveedor.nombre;
  inputCorreo.value = proveedor.correo;
}

cargarProveedor();

async function modificar() {
  const id = inputId.value;
  const nombre = inputNombre.value;
  const correo = inputCorreo.value;

  const proveedor = {
    id: id,
    nombre: nombre,
    correo: correo,
  };

  await proveedorService.modificar(proveedor);

  window.location.href = "proveedor.html";
}