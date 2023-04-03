// NÃO CONSEGUI FAZER SOZINHO, POR ISSO, PREFERI NÃO CONCLUIR ELE NO CODEWARS

function maxNTimes(list, n) {
  const counts = {}; // Objeto para armazenar o número de ocorrências de cada número
  const result = []; // Lista para armazenar o resultado

  for (let i = 0; i < list.length; i++) {
    const num = list[i];
    if (counts[num] === undefined) {
      // Se o número ainda não apareceu, adicionamos ao resultado e registramos a primeira ocorrência
      result.push(num);
      counts[num] = 1;
    } else if (counts[num] < n) {
      // Se o número já apareceu menos de N vezes, adicionamos ao resultado e registramos a ocorrência
      result.push(num);
      counts[num]++;
    }
    // Caso contrário, ignoramos a ocorrência
  }
  console.log(result);
  return result;
}

// Exemplo de uso
const list = [1, 2, 3, 1, 2, 1, 2, 3];
const n = 2;
const result = maxNTimes(list, n); // [1, 2, 3, 1, 2, 3]
