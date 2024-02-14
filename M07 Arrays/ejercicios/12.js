function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  const valorInicial = 0;
  const suma = arrayOfNums.reduce(
    (acumulador, valorActual) => acumulador + valorActual
    );
  return suma;

}

module.exports = agregarNumeros;
