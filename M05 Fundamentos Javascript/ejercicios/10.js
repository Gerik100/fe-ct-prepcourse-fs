function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

var entrada = new Date(fecha);
if(entrada == 'Invalid Date')
{
  //console.log('Fecha invalida');
  return false;
}
else{
  //console.log('Fecha valida');
  return true;
}

}

module.exports = esFechaValida;


