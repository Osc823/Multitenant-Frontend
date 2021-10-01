const API = "http://localhost:8080/api/sucursal";

const HEADERS = {
  "Content-Type": "application/json",
  "X-TenantID": "tenant2",
};

const sucursalService = {
  //
  async listar() {
    const respuesta = await fetch(API + "/listar", {
      method: "GET",
      headers: HEADERS,
    });
    const listaSucursales = await respuesta.json();
    return listaSucursales;
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
  async registrar(sucursal) {
    const respuesta = await fetch(API + "/registrar", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(sucursal),
    });
  },
  //
  async modificar(sucursal) {
    const respuesta = await fetch(API + "/modificar", {
      method: "PUT",
      headers: HEADERS,
      body: JSON.stringify(sucursal),
    });
  },
  //
  async eliminar(id) {
    const sucursal = {
      id: id,
    };
    const respuesta = await fetch(API + "/eliminar", {
      method: "DELETE",
      headers: HEADERS,
      body: JSON.stringify(sucursal),
    });
  },
};