const API = "http://localhost:8080/api/cliente";

const HEADERS ={
    "Content-Type": "application/json",
    "X-TenantID": "tenant1",
};

const clienteService ={
    //
    async listar(){
        const respuesta = await fetch(API + "/listar", {
            method: "GET",
            headers: HEADERS,
        });
        const listaClientes = await respuesta.json();
        return listaClientes;
    }
     ,
    //
    async buscarPorId(id){
        const respuesta = await fetch(API + "/id/" + id, {
            method: "GET",
            headers: HEADERS,
        });
       return await respuesta.json();
    },
    //
    async registrar(cliente) {
        const respuesta = await fetch(API + "/registrar",{
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify(cliente),
        });
    },
    //
    async modificar(cliente){
        const respuesta = await fetch(API + "/modificar" ,{
            method: "PUT",
            headers: HEADERS,
            body: JSON.stringify(cliente),
        });
    },
    //
    async eliminar(id){
        const cliente ={
            id: id,
        };
        const respuesta = await fetch(API + "/eliminar",{
           method: "DELETE",
           headers: HEADERS,
           body: JSON.stringify(cliente),
        });
    },
};