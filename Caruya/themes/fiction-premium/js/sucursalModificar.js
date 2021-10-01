const inputId = document.getElementById("id");
const inputNombre = document.getElementById("nombre");

async function cargarSucursal() {
  const stringUrl = window.location.href;
  const url = new URL(stringUrl);
  const stringId = url.searchParams.get("id");
  const id = parseInt(stringId);

  const sucursal = await sucursalService.buscarPorId(id);

  inputId.value = sucursal.id;
  inputNombre.value = sucursal.nombre;
}

cargarSucursal();

async function modificar() {
  const id = inputId.value;
  const nombre = inputNombre.value;

  const sucursal = {
    id: id,
    nombre: nombre,
  };

  await sucursalService.modificar(sucursal);

  window.location.href = "sucursal.html";
}