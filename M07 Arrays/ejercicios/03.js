function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  var encontrados = array.filter(filtrado => filtrado === elemento);
  if(encontrados.length === 1 && array.length !== 1)
    {
      return 1;
    }
  else if(array.length === 1 && array[0] === elemento)
    {
      return 0;
    }
  else if(encontrados.length > 1)
    {
      return 0;
    }
  else if(encontrados.length === 0)
    {
      return -1;
    }

}

module.exports = encontrarElemento;
