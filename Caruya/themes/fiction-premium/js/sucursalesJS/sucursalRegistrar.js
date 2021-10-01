async function registrar() {
  const inputNombre = document.getElementById("nombre");
  const nombre = inputNombre.value;

  const sucursal = {
    nombre: nombre,
  };

  await sucursalService.registrar(sucursal);

  window.location.href = "sucursal.html";
}
