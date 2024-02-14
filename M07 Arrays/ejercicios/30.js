function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var n = numeros.length;
  var repetido = 0;
  for(var i = 0; i < n; i++)
    {
      for(var j = i+1; j < n; j++)
        {
          if(numeros[i] == numeros[j])
            {
              return numeros[i];
            }
        }
      
    }
  return undefined;
}

module.exports = encontrarElementoRepetido;