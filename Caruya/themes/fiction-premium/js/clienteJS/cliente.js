async function cargarDatos(){
     const tabla = document.getElementById("datosTabla");

     const listaClientes = await clienteService.listar();

     listaClientes.forEach((cliente) => {
         let fila =
         "<tr><th>" +
         cliente.id  +
         "</th><td>" +
         cliente.nombre +
         "</th><td>" +
         cliente.cedula +
         "</td><th><button type='button' class='btn btn-default btn-main th-btn-border' onclick='eliminar(" +
         cliente.id +
         ")'>Eliminar</button><a class='btn btn-default btn-main th-btn-border' href='modificar.html?id=" +
         cliente.id +
         "'>Modificar</a></th></tr>";

         tabla.innerHTML += fila;
     });
    }

async function eliminar(id){
    await clienteService.eliminar(id);
    location.reload();
}

cargarDatos();
