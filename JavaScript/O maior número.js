function minMax(arr) {
  let numberMore = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr);
    if (arr[1] > numberMore) {
      numberMore = arr[i];
    }
  }
  console.log(numberMore);
}

minMax([2334454, 5]);
