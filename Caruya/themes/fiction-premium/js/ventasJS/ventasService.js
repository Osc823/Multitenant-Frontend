const ventasService = {
  API: "http://localhost:8080/api/venta",

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
    const listaVentas = await respuesta.json();
    return listaVentas;
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
  async registrar(venta) {
    const respuesta = await fetch(this.API + "/registrar", {
      method: "POST",
      headers: this.HEADERS,
      body: JSON.stringify(venta),
    });
  },
  //
  async modificar(venta) {
    const respuesta = await fetch(this.API + "/modificar", {
      method: "PUT",
      headers: this.HEADERS,
      body: JSON.stringify(venta),
    });
  },
  //
  async eliminar(id) {
    const venta = {
      id: id,
    };
    const respuesta = await fetch(this.API + "/eliminar", {
      method: "DELETE",
      headers: this.HEADERS,
      body: JSON.stringify(venta),
    });
  },
};
