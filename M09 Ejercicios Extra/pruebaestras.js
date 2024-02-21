// function identificarMayusculas(cadena) {
//     var mayusculasEncontradas = cadena.match(/[A-Z]/g);
//     return mayusculasEncontradas;
// }

// var cadena = "Hola Mundo";
// var mayusculas = identificarMayusculas(cadena);

// console.log("Letras mayúsculas encontradas:", mayusculas);
// var cadena = 'soyHENRY'; 
// var arr = cadena.split('');
//   var arrM = [];
//   var arrm = [];
//   var arrSalida = []

//  for( var i = 0; i < arr.length; i ++)
//    {
        
//       if(arr[i] == arr[i].toUpperCase())
//         {
//           arrM.push(arr[i]);
//         }
//       if(arr[i] == arr[i].toLowerCase())
//         {
//           arrm.push(arr[i]);
//         }
//    }
  //arrSalida = arrM.push(arrm)
  //console.log(arrM.join('') + arrm.join(''));
  //return arrSalida;

//   var frase = "Nunca podrás con los Hell Satan's. Callate marrano."
//   var arregloFrase = frase.split(' ');
//   var arregloEspejo = [];
//   var palabra = [];
//   var palabraEspejo = [];
//   for(var i = 0; i < arregloFrase.length; i ++)
//     {
//         palabra = arregloFrase[i].split('');
//         for(var j = 0; j < palabra.length; j++)
//             {
//                 //palabraEspejo[i].push(palabra[palabra.length-2]);                 
//                 //arregloEspejo[i].push(palabra[arregloFrase[i].length - 1 -j]);
//                 palabraEspejo[j] = palabra[palabra.length - 1 -j];
//             }
//         arregloEspejo[i] = palabraEspejo.join('');
//         palabraEspejo = [];
        

//             //console.log(palabraEspejo[i]);
//     }
//   console.log(arregloEspejo.join(' '));

// var numero = 123221;
// var arrNum = numero.toString().split('');
// var cape = false;
// for(var i = 0; i < arrNum.length; i++)
//     {
//         if(arrNum[i] != arrNum[arrNum.length - 1 - i])
//             {
//                 console.log('No es capecue');
//                 break;
//             }
//     }
// console.log('Es capecue');
// var string = 'abcefgh';
// var arrString = string.split('');
// for( var i = 0; i < arrString.length; i++)
//     {
//       if(arrString[i] == 'a' || arrString[i] == 'b' || arrString[i] == 'c')
//         {  
//           arrString[i] = '';
//         }
//     }


//   console.log(arrString.join(''));
// var arrayOfStrings = ["You", "are", "beautiful", "looking"];
// arrayOfStrings.sort(function(a,b){
//   return a.length - b.length;
// });
// console.log(arrayOfStrings);

var arrSalida = [];
var array1 = [7, 23, 4];
var array2 = [23, 70];
  for(var i = 0; i < array1.length; i++)
    {
      if(array2.includes(array1[i]))
        {
          arrSalida.push(array1[i]);
        }
    }
  console.log(arrSalida);



