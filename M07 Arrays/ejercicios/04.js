function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  var longitud = array.length;
  var indice = Math.floor(Math.random()*longitud);
  return array[indice];
}

module.exports = obtenerElementoAleatorio;
