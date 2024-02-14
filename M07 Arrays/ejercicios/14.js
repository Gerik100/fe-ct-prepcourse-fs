function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  var n = arguments.length;
  var producto = 1;
  if(arguments.length == 0)
  {
    return 0;
  }
  else{
    for(var i = 0; i < n; i ++)
    {
      producto = producto * arguments[i]
    }
  return producto;
  }
}


module.exports = multiplicarArgumentos;
