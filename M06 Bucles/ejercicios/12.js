function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  var resto3 = num % 3;
  var resto5 = num % 5;
  if(resto3 === 0 && resto5 != 0) 
    {
      return "fizz";
    }
  else if (resto5 === 0 && resto3 != 0)
    {
      return "buzz";
    }
  else if(resto3 === 0 && resto5 === 0)
    {
      return "fizzbuzz"
    }
  else{
    return false;
  }
}

module.exports = fizzBuzz;
