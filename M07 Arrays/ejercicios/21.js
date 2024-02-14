function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  var m = secuencia.length;
  var multiplo = 0;
  for(var i = 0; i < m; i++)
    {
      if(secuencia[i] % n == 0)
        {
          multiplo = secuencia[i];
          break
        }
    }
  if(multiplo != 0)
    {
      return multiplo;
    }
  else
    {
      return undefined;
    }
}

module.exports = encontrarPrimerMultiploDeN;