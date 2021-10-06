async function registrar() {
    const inputNombre = document.getElementById("nombre");
    const nombre = inputNombre.value;
    const inputCorreo = document.getElementById("correo");
    const correo = inputCorreo.value;
  
    const proveedor = {
      nombre: nombre,
      correo: correo,
    };
  
    await proveedorService.registrar(proveedor);
  
    window.location.href = "../Proveedor-Crud/index.html";
  }