const proveedorService = {
  API: "http://localhost:8080/api/proveedor",

  HEADERS: {
    "Content-Type": "application/json",
    "X-TenantID": "tenant1",
  },
  //
  async listar() {
    const respuesta = await fetch(this.API + "/listar", {
      method: "GET",
      headers: this.HEADERS,
    });
    const listaProveedor = await respuesta.json();
    return listaProveedor;
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
  async registrar(proveedor) {
    const respuesta = await fetch(this.API + "/registrar", {
      method: "POST",
      headers: this.HEADERS,
      body: JSON.stringify(proveedor),
    });
  },
  //
  async modificar(proveedor) {
    const respuesta = await fetch(this.API + "/modificar", {
      method: "PUT",
      headers: this.HEADERS,
      body: JSON.stringify(proveedor),
    });
  },
  //
  async eliminar(id) {
    const proveedor = {
      id: id,
    };
    const respuesta = await fetch(this.API + "/eliminar", {
      method: "DELETE",
      headers: this.HEADERS,
      body: JSON.stringify(proveedor),
    });
  },
};
