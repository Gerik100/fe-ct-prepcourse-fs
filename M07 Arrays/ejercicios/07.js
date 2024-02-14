function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var cadenas = array.filter(s => typeof(s) === 'string')
  var mayusculas = cadenas.map(c => c.toUpperCase())
  return mayusculas;
}

module.exports = convertirStringAMayusculas;
