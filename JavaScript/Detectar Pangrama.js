function isPangram(str) {
  const phrase = str;

  let includes = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < phrase.lenght; i++) {
    if (phrase.toLowerCase().includes(includes)) {
      return false;
    }
  }
  console.log(phrase);
  return true;
}

isPangram('The quick brown fox jumps over the lazy dog');

/* function isPangram(phrase) {
  const checkingLetter = 'abcdefghijklmnopqrstuvwxyz';
  phrase = phrase.toLowerCase();
  for (let i = 0; i < checkingLetter.length; i++) {
    if (phrase.indexOf(checkingLetter[i]) === -1) {
      return false;
    }
  }
  return true;
}

isPangram('The quick brown fox jumps over the lazy dog'); */
