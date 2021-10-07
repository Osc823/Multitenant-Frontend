const API = "http://localhost:8080/api/producto";

const HEADERS ={
    "Content-Type": "application/json",
    "X-TenantID": "tenant1",
};

const productoService ={
    //
    async listar(){
        const respuesta = await fetch(API + "/listar", {
            method: "GET",
            headers: HEADERS,
        });
        const listaProductos = await respuesta.json();
        return listaProductos;
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
    async registrar(producto) {
        const respuesta = await fetch(API + "/registrar",{
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify(producto),
        });
    },
    //
    async modificar(producto){
        const repuesta = await fetch(API + "/modificar" ,{
            method: "PUT",
            headers: HEADERS,
            body: JSON.stringify(producto),
        });
    },
    //
    async eliminar(id){
        const producto ={
            id: id,
        };
        const respuesta = await fetch(API + "/eliminar",{
           method: "DELETE",
           headers: HEADERS,
           body: JSON.stringify(producto),
        });
    },
};