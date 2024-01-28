function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  var resto = num % 2;
  if(resto == 0)
  {
    return true;
  }else{
    return false;
  }
}

module.exports = esPar;
