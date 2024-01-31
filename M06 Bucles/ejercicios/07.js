function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  var resto2 = a % 2;
  var resto3 = a % 3;
  if(resto2 === 0 && resto3 === 0)
    {
      return true;
    }
  else{
    return false;
  }
}

module.exports = esParYDivisiblePorTres;