function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  // var cadena = array.find(i => i.length > 5);
  // return cadena;

  for(var i = 0; i < array.length; i++)
    {
      if(array[i].length > 5)
        {
          return array[i];
        }
    }
}

module.exports = obtenerPrimerStringLargo;
