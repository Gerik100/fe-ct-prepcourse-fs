function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  var dias = 0;
  // do
  //   {
      switch(mes){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        dias = 31;
        break;
      case 4: // Abril
      case 6: // Junio
      case 9: // Septiembre
      case 11: // Noviembre
        dias = 30;
        break;
      case 2:
        dias = 28;
        break;
      default:
        dias = 0;
        break;
      }

  //   }
  // while(mes < 1 || mes > 12);
  return dias;
}

module.exports = diasEnMes;
