function getCount(str) {
  newPhrase = 0;
  for (let index = 0; index < str.length; index++) {
    let count = str[index].toLowerCase();

    if (
      count == 'a' ||
      count == 'e' ||
      count == 'i' ||
      count == 'o' ||
      count == 'u'
    ) {
      newPhrase += 1;
    }
  }
  return newPhrase;
}

getCount('Erick Veríssimo');
