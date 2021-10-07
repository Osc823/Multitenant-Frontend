const clienteService = {
  API: "http://localhost:8080/api/cliente",

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
    const listaClientes = await respuesta.json();
    return listaClientes;
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
  async registrar(cliente) {
    const respuesta = await fetch(this.API + "/registrar", {
      method: "POST",
      headers: this.HEADERS,
      body: JSON.stringify(cliente),
    });
  },
  //
  async modificar(cliente) {
    const respuesta = await fetch(this.API + "/modificar", {
      method: "PUT",
      headers: this.HEADERS,
      body: JSON.stringify(cliente),
    });
  },
  //
  async eliminar(id) {
    const cliente = {
      id: id,
    };
    const respuesta = await fetch(this.API + "/eliminar", {
      method: "DELETE",
      headers: this.HEADERS,
      body: JSON.stringify(cliente),
    });
  },
};
