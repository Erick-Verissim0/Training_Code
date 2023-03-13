function oddOrEven() {
  const array = [0];

  let sumArray = array.reduce(function (total, current) {
    return total + current;
  });

  if (sumArray % 2 == 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}

oddOrEven();
