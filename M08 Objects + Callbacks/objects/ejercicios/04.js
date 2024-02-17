function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:
  var verifica = objeto.hasOwnProperty(propiedad);
  return verifica;
}

module.exports = verificarPropiedad;
