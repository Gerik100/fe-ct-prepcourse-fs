function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var n = array.length;
  var nuevo = [];
  var sentencia = "No se encontraron los meses pedidos";
  for(var i = 0; i < n; i++)
    {
      if(array[i] == 'Enero' ||array[i] == 'Marzo' ||array[i] == 'Noviembre')
        {
          nuevo.push(array[i]);
        }
    }
  if(nuevo.length == 3)
    {
      return nuevo;
    }
  else if(nuevo.length < 3)
    {
      return sentencia;
    }
}

module.exports = mesesDelAño;
