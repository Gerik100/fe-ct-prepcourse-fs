function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
  var objeto2 = {};
  var nuevoObjeto = Object.assign(objeto2,objeto)
  nuevoObjeto[propiedad] = valor;
  return nuevoObjeto;
}

module.exports = actualizarValorPropiedad;
