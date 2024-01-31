function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  var cadenaMin = string.toLowerCase().replace(/\s/g, '');
  var cadenaSep = cadenaMin.split("");
  var cadenaInv = [];
  var reflejo = [];

  for(var i = 0; i < cadenaSep.length; i++)
    {
      cadenaInv[i] = cadenaSep[cadenaSep.length - i - 1];
    }
  var reflejo = cadenaInv.join("");
  return cadenaMin === reflejo;

}

module.exports = esPalindromo;
