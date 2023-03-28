function positiveSum(arr) {
  let newArr = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      let removeNumber = [i];

      arr.splice(removeNumber, 1);
    }
    newArr += arr[i];
  }
  return (arr = newArr), console.log(arr);
}

/* positiveSum([1, -4, 7, 12]);  Não preciso chamar a função porque no teste do CodeWars, ele mesmo chama*/

/* Como o ChatGPT fez:

function somaPositivos(array) {
    return array.reduce((total, numero) => {
      return (numero > 0) ? total + numero : total;
    }, 0);
  }
  
  console.log(somaPositivos([1, -4, 7, 12])); */
