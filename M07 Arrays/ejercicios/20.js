function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var pares = 0
  var n = numeros.length;
  for(var i = 0; i < n; i++)
    {
      if(numeros[i] % 2 != 0)
        {
          continue;
        }
      else
       {
        pares++;
       }
    }
  return pares
}

module.exports = contarParesConContinue;
