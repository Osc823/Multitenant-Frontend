async function registrar(){
    const inputNombre = document.getElementById("nombre");
    const inputCedula = document.getElementById("cedula");
    const nombre = inputNombre.value;
    const cedula = inputCedula.value;

    const cliente = {
        nombre: nombre,
        cedula: cedula,
    };

    await clienteService.registrar(cliente);

    window.location.href = "cliente.html";
}