const productoService = {
  API: "http://localhost:8080/api/producto",

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
    const listaProductos = await respuesta.json();
    return listaProductos;
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
  async registrar(producto) {
    const respuesta = await fetch(this.API + "/registrar", {
      method: "POST",
      headers: this.HEADERS,
      body: JSON.stringify(producto),
    });
  },
  //
  async modificar(producto) {
    const repuesta = await fetch(this.API + "/modificar", {
      method: "PUT",
      headers: this.HEADERS,
      body: JSON.stringify(producto),
    });
  },
  //
  async eliminar(id) {
    const producto = {
      id: id,
    };
    const respuesta = await fetch(this.API + "/eliminar", {
      method: "DELETE",
      headers: this.HEADERS,
      body: JSON.stringify(producto),
    });
  },
};
