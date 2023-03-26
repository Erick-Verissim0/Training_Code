function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution('abc', 'bc')); // retorna true
console.log(solution('abc', 'd')); // retorna false
