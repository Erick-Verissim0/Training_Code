function accum(s) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const separation = s[i].toUpperCase() + s[i].toLowerCase().repeat(i);

    result += separation + '-';
  }
  result = result.slice(0, -1);
  console.log(result);
  return result;
}

accum('abcd');
