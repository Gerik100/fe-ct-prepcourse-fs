function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  const elementosConA = arrayOfStrings.filter(elemento => elemento.startsWith('a') || elemento.startsWith('A'));
  return elementosConA;
}

module.exports = filter;
