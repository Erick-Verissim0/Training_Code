function solution(str) {
  let newString = '';

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (letter === letter.toUpperCase() && i > 0) {
      newString += ' ';
    }
    newString += letter;
  }
  console.log(newString);
  return newString;
}

solution('camelCasing');


// A BAIXO FOI COMO O GTP FEZ O DESAFIO(tem um excelênte clean code)

/* function solution(str) {
  const newString = str.replace(/([A-Z])/g, ' $1');
  console.log(newString);
  return solution;
}

solution('camelCasing'); */
