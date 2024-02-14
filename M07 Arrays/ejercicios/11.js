function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var n = array.length;
  var productos = [];
for (var i = 0; i < n; i++)
  {
    productos[i] = i*array[i]; 
  }
return productos;
}

module.exports = multiplicarElementosPorIndice;
