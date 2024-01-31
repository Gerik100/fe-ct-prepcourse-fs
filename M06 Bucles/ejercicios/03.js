function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  var dif = x - y;
  if(dif > 0)
    {
      return x;
    }
  else if( dif == 0)
    {
      return x;
    }
  else if(dif < 0)
    {
      return y;
    }
}

module.exports = obtenerMayor;
