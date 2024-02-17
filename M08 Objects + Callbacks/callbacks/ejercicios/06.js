function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var nuevoArreglo = []
  for(var i = 0; i < array.length; i ++)
    {
      nuevoArreglo[i] = cb(array[i]);
    }
  return nuevoArreglo;
}

module.exports = map;
