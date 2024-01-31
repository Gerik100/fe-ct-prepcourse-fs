function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var cadena = num.toString().replace('.','').length;
  if(cadena === 3)
    {
      return true;
    }
  else
    {
      return false;
    }
}

module.exports = tieneTresDigitos;



