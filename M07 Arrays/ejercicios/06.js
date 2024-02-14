function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  var dobles = array.map(i => i*2)
  return dobles;
}

module.exports = duplicarElementos;
