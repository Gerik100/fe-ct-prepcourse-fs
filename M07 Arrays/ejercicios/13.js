function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  const n = resultadosTest.length;
  const promedio = resultadosTest.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
  )
  return promedio/n;
}

module.exports = promedioResultadosTest;
