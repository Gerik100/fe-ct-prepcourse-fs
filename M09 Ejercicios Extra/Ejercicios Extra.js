/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var arrP = [];
  //var arrH = [];
  for(var i in objeto)
    {
      arrP.push([i,objeto[i]]); 
    }
  return arrP;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
   var contador = {};
   for(var i = 0; i < string.length; i++)
    {
      var caracter  = string[i];
      if(contador[caracter])
        {
          contador[caracter] += 1;
        }
      else
        {
          contador[caracter] = 1;
        }
    } 

  var letrasOrdenadas = Object.keys(contador).sort();

  var resultado = {};
  
  for(var j = 0; j < letrasOrdenadas.length; j++)
    {
      var letra = letrasOrdenadas[j];
      resultado[letra] = contador[letra];
    }

  return resultado;
  //return contador;

}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var arr = string.split('');
  var arrM = [];
  var arrm = [];
  var arrSalida = []

  for( var i = 0; i < arr.length; i ++)
    {
      if(arr[i] == arr[i].toUpperCase())
        {
          arrM.push(arr[i]);
        }
      if(arr[i] == arr[i].toLowerCase())
        {
          arrm.push(arr[i]);
        }
    }
  arrSalida = arrM.join('') + arrm.join('');
  return arrSalida;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var arregloFrase = frase.split(' ');
  var arregloEspejo = [];
  var palabra = [];
  var palabraEspejo = [];
  for(var i = 0; i < arregloFrase.length; i ++)
    {
        palabra = arregloFrase[i].split('');
        for(var j = 0; j < palabra.length; j++)
            {
                //palabraEspejo[i].push(palabra[palabra.length-2]);                 
                //arregloEspejo[i].push(palabra[arregloFrase[i].length - 1 -j]);
                palabraEspejo[j] = palabra[palabra.length - 1 -j];
            }
        arregloEspejo[i] = palabraEspejo.join('');
        palabraEspejo = [];
        

            //console.log(palabraEspejo[i]);
    }
  return arregloEspejo.join(' ');
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
var arrNum = numero.toString().split('');
var cape = false;
for(var i = 0; i < arrNum.length; i++)
    {
        if(arrNum[i] != arrNum[arrNum.length - 1 - i])
            {
                return 'No es capicua';
            }
    }
return 'Es capicua';
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var arrString = string.split('');
  for( var i = 0; i < arrString.length; i++)
      {
        if(arrString[i] == 'a' || arrString[i] == 'b' || arrString[i] == 'c')
          {  
            arrString[i] = '';
          }
      }
  return arrString.join('');
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  arrayOfStrings.sort(function(a,b){
    return a.length - b.length;
  });

  return arrayOfStrings;

}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var arrSalida = [];
  for(var i = 0; i < array1.length; i++)
    {
      if(array2.includes(array1[i]))
        {
          arrSalida.push(array1[i]);
        }
    }
  return arrSalida;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
