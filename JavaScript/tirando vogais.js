function disemvowel(str) {
  let newPhrase = '';

  for (i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();

    if (
      letter !== 'a' &&
      letter !== 'e' &&
      letter !== 'i' &&
      letter !== 'o' &&
      letter !== 'u'
    ) {
      newPhrase += str[i]; // Se a letra for uma das vogais, vai pular para a próxima letra da lista
    }
  }
  return newPhrase;
}

let originalPhrase = 'Este site é para perdedores, LOL!';
let newPhrase = disemvowel(originalPhrase);
console.log(newPhrase);
