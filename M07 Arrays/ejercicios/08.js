function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var pares = array.filter(n => n % 2 === 0)
  return pares;
}

module.exports = filtrarNumerosPares;
