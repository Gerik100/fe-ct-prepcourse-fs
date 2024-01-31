function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var separada = texto.split("");
  var reversa = [];
  for(var i = 0; i < separada.length; i++)
    {
      reversa[i] = separada[separada.length - i - 1];
    }
  var salida = reversa.join("");
  return salida;
}

module.exports = invertirTexto;