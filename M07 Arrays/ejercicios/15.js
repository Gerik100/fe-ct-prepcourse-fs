function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var n = array.length;
  var bandera = false;
  for(var i = 1; i < n; i++)
    {
      if(array[i-1] == array[i])
        {
          bandera = true;
          break
        }
      else 
        {
          bandera = false;
        }
    }
  return bandera;
}

module.exports = todosIguales;
