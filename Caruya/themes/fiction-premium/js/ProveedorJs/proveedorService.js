const API = "http://localhost:8080/api/proveedor";

const HEADERS = {
  "Content-Type": "application/json",
  "X-TenantID": "tenant1",
};

const proveedorService = {
  //
  async listar() {
    const respuesta = await fetch(API + "/listar", {
      method: "GET",
      headers: HEADERS,
    });
    const listaProveedor = await respuesta.json();
    return listaProveedor;
  },
  //
  async buscarPorId(id) {
    const respuesta = await fetch(API + "/id/" + id, {
      method: "GET",
      headers: HEADERS,
    });
    return await respuesta.json();
  },
  //
  async registrar(proveedor) {
    const respuesta = await fetch(API + "/registrar", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(proveedor),
    });
  },
  //
  async modificar(proveedor) {
    const respuesta = await fetch(API + "/modificar", {
      method: "PUT",
      headers: HEADERS,
      body: JSON.stringify(proveedor),
    });
  },
  //
  async eliminar(id) {
    const proveedor = {
      id: id,
    };
    const respuesta = await fetch(API + "/eliminar", {
      method: "DELETE",
      headers: HEADERS,
      body: JSON.stringify(proveedor),
    });
  },
};
