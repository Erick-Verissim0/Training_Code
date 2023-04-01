function countPositivesSumNegatives(input) {
  let newArr = [];
  if (input === null || input.length == 0) {
    console.log(newArr);
    return [];
  }

  let positiveCount = 0;
  let negativeCount = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positiveCount++;
    } else {
      negativeCount += input[i];
    }
  }
  newArr = [positiveCount, negativeCount];
  return newArr;
}

countPositivesSumNegatives([]);
