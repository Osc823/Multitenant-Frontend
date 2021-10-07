const sucursalService = {
  API: "http://localhost:8080/api/sucursal",
  HEADERS: {
    "Content-Type": "application/json",
    "X-TenantID": "tenant2",
  },
  //
  async listar() {
    const respuesta = await fetch(this.API + "/listar", {
      method: "GET",
      headers: this.HEADERS,
    });
    const listaSucursales = await respuesta.json();
    return listaSucursales;
  },
  //
  async buscarPorId(id) {
    const respuesta = await fetch(this.API + "/id/" + id, {
      method: "GET",
      headers: this.HEADERS,
    });
    return await respuesta.json();
  },
  //
  async registrar(sucursal) {
    const respuesta = await fetch(this.API + "/registrar", {
      method: "POST",
      headers: this.HEADERS,
      body: JSON.stringify(sucursal),
    });
  },
  //
  async modificar(sucursal) {
    const respuesta = await fetch(this.API + "/modificar", {
      method: "PUT",
      headers: this.HEADERS,
      body: JSON.stringify(sucursal),
    });
  },
  //
  async eliminar(id) {
    const sucursal = {
      id: id,
    };
    const respuesta = await fetch(this.API + "/eliminar", {
      method: "DELETE",
      headers: this.HEADERS,
      body: JSON.stringify(sucursal),
    });
  },
};
