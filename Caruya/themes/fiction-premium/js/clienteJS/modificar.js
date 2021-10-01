const inputId = document.getElementById("id");
const inputNombre = document.getElementById("nombre");
const inputCedula = document.getElementById("cedula");

async function cargarCliente(){
    const stringUrl = window.location.href;
    const url = new URL(stringUrl);
    const stringId = url.searchParams.get("id");
    const id = parseInt(stringId);

    const cliente = await clienteService.buscarPorId(id);

    inputId.value = cliente.id;
    inputNombre.value = cliente.nombre;
    inputCedula.value = cliente.cedula;

}

cargarCliente();

async function modificar(){
    const id = inputId.value;
    const nombre = inputNombre.value;
    const cedula = inputCedula.value;

    const cliente ={
        id: id,
        nombre: nombre,
        cedula: cedula,
    };

    await clienteService.modificar(cliente);

    window.location.href = "cliente.html";
}