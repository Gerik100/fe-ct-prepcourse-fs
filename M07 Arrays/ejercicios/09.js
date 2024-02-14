function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var arreglo10 = array.filter(mayores => mayores > 10)
  return arreglo10.length;
}

module.exports = contarElementosMayoresA10;
